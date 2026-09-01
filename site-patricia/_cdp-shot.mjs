/* CDP screenshot helper (dependency-free, Node >= 22). Usage:
   node _cdp-shot.mjs <outPng> <width> <height> <waitMs> [mobileDPR] */
import { spawn } from 'node:child_process';
import { writeFileSync, rmSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [, , outPng, wStr, hStr, waitStr, dprStr] = process.argv;
const W = parseInt(wStr || '390', 10);
const H = parseInt(hStr || '844', 10);
const WAIT = parseInt(waitStr || '3500', 10);
const DPR = parseFloat(dprStr || '2');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL_TO_OPEN = 'http://localhost:3000';
const PORT = 9333;

const profile = mkdtempSync(join(tmpdir(), 'edge-cdp-'));
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
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
};
function send(method, params = {}) {
  const id = ++idSeq;
  return new Promise((resolve, reject) => {
    pending.set(id, (msg) => (msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
}

try {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: W, height: H, deviceScaleFactor: DPR, mobile: true,
  });
  await send('Page.navigate', { url: URL_TO_OPEN });
  await sleep(WAIT); /* tempo real: IO + timers + rAF rodando normalmente */

  const diag = await send('Runtime.evaluate', {
    expression: `(() => {
      const all = document.querySelectorAll('[data-reveal]');
      let inn = 0; all.forEach((e) => { if (e.classList.contains('in')) inn++; });
      return all.length + '/' + inn + ' revealed, readyState=' + document.readyState;
    })()`,
    returnByValue: true,
  });
  console.log('DIAG:', diag.result.value);

  /* Warmup de reveal: rola a página em passos para disparar o IntersectionObserver
     real (mode 'scroll'), volta ao topo e aguarda as transições terminarem. Sem isso,
     captureBeyondViewport captura o conteúdo abaixo da dobra ainda em opacity:0. */
  if (process.argv[8] === 'scroll') {
    const warmed = await send('Runtime.evaluate', {
      expression: `(async () => {
        const step = Math.max(300, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 260));
        }
        await new Promise((r) => setTimeout(r, 500));
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 900));
        const all = document.querySelectorAll('[data-reveal]');
        let inn = 0; all.forEach((e) => { if (e.classList.contains('in')) inn++; });
        return all.length + '/' + inn + ' revealed after scroll warmup';
      })()`,
      awaitPromise: true,
      returnByValue: true,
    });
    console.log('WARMUP:', warmed.result.value);
  }

  const shot = await send('Page.captureScreenshot',
    process.argv[7] === 'full' ? { format: 'png', captureBeyondViewport: true } : { format: 'png' });
  writeFileSync(outPng, Buffer.from(shot.data, 'base64'));
  console.log('SAVED:', outPng);
} catch (e) {
  console.error('ERROR:', e.message);
  process.exitCode = 1;
} finally {
  ws.close();
  try { edge.kill(); } catch { /* ignore */ }
  await sleep(300);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* ignore */ }
}
