/* CDP functional check (dependency-free, Node >= 22). Usage:
   node _cdp-check.mjs <width> <height> [reduced]
   Verifies: console/exceptions, horizontal overflow, inline form validation
   (sem alert), keyboard focus ring, favicon, reduced-motion behavior. */
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [, , wStr, hStr, mode] = process.argv;
const W = parseInt(wStr || '390', 10);
const H = parseInt(hStr || '844', 10);
const REDUCED = mode === 'reduced';
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL_TO_OPEN = 'http://localhost:3000';
const PORT = 9334;

const profile = mkdtempSync(join(tmpdir(), 'edge-cdp-chk-'));
const edge = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWsUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const tabs = await res.json();
      const page = tabs.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* retry */ }
    await sleep(250);
  }
  throw new Error('Could not reach CDP endpoint');
}

const ws = new WebSocket(await getWsUrl());
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });

let idSeq = 0;
const pending = new Map();
const consoleErrors = [];
const exceptions = [];
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.method === 'Runtime.consoleAPICalled' &&
      ['error', 'warning'].includes(msg.params.type)) {
    consoleErrors.push(msg.params.type + ': ' + msg.params.args.map((a) => a.value ?? a.description ?? '').join(' '));
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    exceptions.push(msg.params.exceptionDetails.text + ' ' + (msg.params.exceptionDetails.exception?.description || ''));
  }
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
};
function send(method, params = {}) {
  const id = ++idSeq;
  return new Promise((resolve, reject) => {
    pending.set(id, (msg) => (msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evalJs(expression) {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  return r.result.value;
}

try {
  await send('Runtime.enable');
  await send('Page.enable');
  if (REDUCED) {
    await send('Emulation.setEmulatedMedia', {
      features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
    });
  }
  await send('Emulation.setDeviceMetricsOverride', {
    width: W, height: H, deviceScaleFactor: 2, mobile: W < 800,
  });
  await send('Page.navigate', { url: URL_TO_OPEN });
  await sleep(3200);

  // Aguarda o carregamento dos 25 GLBs ou uma falha explícita da experiência 3D.
  for (let i = 0; i < 80; i++) {
    const state = await evalJs(`(() => {
      const stage = document.getElementById('spineStage');
      return stage && (stage.classList.contains('is-ready') || stage.classList.contains('has-error'));
    })()`);
    if (state) break;
    await sleep(250);
  }

  const results = {};
  results.consoleErrors = consoleErrors;
  results.exceptions = exceptions;
  results.overflow = await evalJs(`document.documentElement.scrollWidth - document.documentElement.clientWidth`);
  results.favicon = await evalJs(`fetch('/assets/favicon.svg').then(r => r.status)`);
  await evalJs(`(() => {
    document.getElementById('spineCanvas').scrollIntoView({ block: 'center' });
    document.querySelector('[data-spine-region="cervical"]').click();
    return true;
  })()`);
  await sleep(350);
  const canvasRect = await evalJs(`(() => {
    const rect = document.getElementById('spineCanvas').getBoundingClientRect();
    return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
  })()`);
  const centerX = canvasRect.x + canvasRect.width * 0.5;
  const centerY = canvasRect.y + canvasRect.height * 0.5;
  const anatomyBefore = await evalJs(`window.__anatomyViewer?.getDiagnostics()`);

  // Amostra o canvas e aciona a mesma rotina de Raycaster usada pelo clique.
  await evalJs(`(() => {
    const canvas = document.getElementById('spineCanvas');
    const rect = canvas.getBoundingClientRect();
    const viewer = window.__anatomyViewer;
    for (const x of [0.5, 0.46, 0.54, 0.42, 0.58]) {
      for (const y of [0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74]) {
        if (viewer.pickAtClientPoint(rect.left + rect.width * x, rect.top + rect.height * y)) return true;
      }
    }
    return false;
  })()`);
  const anatomyAfterRaycast = await evalJs(`window.__anatomyViewer?.getDiagnostics()`);

  // Teclado usa o mesmo estado de rotação do arraste e é determinístico no CDP.
  await evalJs(`document.getElementById('spineCanvas').focus()`);
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 });
  await sleep(450);
  const anatomyAfterRotation = await evalJs(`window.__anatomyViewer?.getDiagnostics()`);

  // Zoom por teclado confirma a alternativa acessível e o mesmo cameraDistance da roda.
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: '+', code: 'Equal', windowsVirtualKeyCode: 187 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: '+', code: 'Equal', windowsVirtualKeyCode: 187 });
  await sleep(450);
  const anatomyAfterZoom = await evalJs(`window.__anatomyViewer?.getDiagnostics()`);

  results.anatomy = await evalJs(`(() => {
    const stage = document.getElementById('spineStage');
    const canvas = document.getElementById('spineCanvas');
    const explode = document.getElementById('spineExplode');
    const cervical = document.querySelector('[data-spine-region="cervical"]');
    explode.click();
    const explodedState = window.__anatomyViewer?.getDiagnostics();
    const cervicalSelected = cervical.getAttribute('aria-pressed');
    const explodedPressed = explode.getAttribute('aria-pressed');
    const selectionBeforeReset = document.getElementById('spineSelection').textContent.trim();
    document.getElementById('spineReset').click();
    const resetState = window.__anatomyViewer?.getDiagnostics();
    const result = {
      ready: stage.classList.contains('is-ready'),
      failed: stage.classList.contains('has-error'),
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      controls: document.querySelectorAll('[data-spine-region]').length,
      cervicalSelected,
      exploded: explodedPressed,
      loadingHidden: document.getElementById('spineLoading').hidden,
      selection: selectionBeforeReset,
      before: ${JSON.stringify(anatomyBefore)},
      afterRaycast: ${JSON.stringify(anatomyAfterRaycast)},
      afterRotation: ${JSON.stringify(anatomyAfterRotation)},
      afterZoom: ${JSON.stringify(anatomyAfterZoom)},
      explodedState,
      resetState
    };
    return result;
  })()`);
  results.sectionFlow = await evalJs(`(() => {
    const sections = [...document.querySelectorAll('#main > section')];
    return {
      count: sections.length,
      ids: sections.map((section) => section.id),
      positions: sections.map((section) => getComputedStyle(section).position),
      marginsTop: sections.map((section) => getComputedStyle(section).marginTop),
      naturalPositions: sections.every((section) => ['static', 'relative'].includes(getComputedStyle(section).position)),
      noNegativeSectionMargins: sections.every((section) => parseFloat(getComputedStyle(section).marginTop) >= 0)
    };
  })()`);
  if (!results.anatomy.ready && !results.anatomy.failed) {
    results.anatomy.moduleProbe = await evalJs(`import('/js/spine-3d.js')
      .then(() => 'module-imported')
      .catch((error) => String(error && (error.stack || error.message || error)))`);
    await sleep(1200);
    results.anatomy.stateAfterProbe = await evalJs(`document.getElementById('spineStage').className`);
  }

  // FASE 1 regression: erros de campo devem nascer ocultos (hidden + display:none)
  results.errorHiddenDefault = await evalJs(`['erro-nome', 'erro-whats', 'erro-mensagem'].map(id => {
    const el = document.getElementById(id);
    return { id, hidden: el.hidden, display: getComputedStyle(el).display };
  })`);

  results.validation = await evalJs(`(() => {
    window.__alertCalled = false;
    window.alert = () => { window.__alertCalled = true; };
    window.__opened = null;
    window.open = (u) => { window.__opened = u; return null; };
    const form = document.getElementById('contactForm');
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    const errsAfterEmpty = document.querySelectorAll('.field--error').length;
    const alertUsed = window.__alertCalled;
    const focused = document.activeElement && document.activeElement.id;
    const ariaInvalid = document.querySelectorAll('[aria-invalid="true"]').length;
    const whats = document.getElementById('whats');
    whats.value = '123';
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    const whatsMsg = document.getElementById('erro-whats').textContent.trim();
    document.getElementById('nome').value = 'Maria';
    whats.value = '(21) 98233-8381';
    document.getElementById('mensagem').value = 'Ola!';
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    return {
      errsAfterEmpty, alertUsed, focused, ariaInvalid, whatsMsg,
      errsAfterFill: document.querySelectorAll('.field--error').length,
      openedWa: (window.__opened || '').slice(0, 40),
      hintVisible: !document.getElementById('formHint').hidden
    };
  })()`);

  for (let i = 0; i < 3; i++) {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await sleep(60);
  }
  results.keyboardFocus = await evalJs(`(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return { tag: el.tagName, text: (el.textContent || el.id || '').trim().slice(0, 24), outline: cs.outlineWidth + ' ' + cs.outlineStyle };
  })()`);

  results.reducedMotion = await evalJs(`(() => {
    const track = document.querySelector('.marquee__track');
    const eyebrow = document.querySelector('.hero__eyebrow');
    return {
      marqueeState: getComputedStyle(track).animationPlayState,
      firstFoldRevealed: eyebrow.classList.contains('in')
    };
  })()`);

  console.log(JSON.stringify(results, null, 2));
} catch (e) {
  console.error('ERROR:', e.message);
  process.exitCode = 1;
} finally {
  ws.close();
  try { edge.kill(); } catch { /* ignore */ }
  await sleep(300);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* ignore */ }
}
