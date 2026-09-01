/* Lista elementos que estouram a largura da viewport. Usage: node _cdp-overflow.mjs <w> <h> */
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const W = parseInt(process.argv[2] || '390', 10);
const H = parseInt(process.argv[3] || '844', 10);
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const profile = mkdtempSync(join(tmpdir(), 'edge-cdp-ov-'));
const edge = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run',
  '--remote-debugging-port=9336', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWsUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const tabs = await (await fetch('http://127.0.0.1:9336/json/list')).json();
      const page = tabs.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('no CDP');
}
const ws = new WebSocket(await getWsUrl());
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pend = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); } };
const send = (method, params = {}) => new Promise((res, rej) => {
  const i = ++id; pend.set(i, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result)));
  ws.send(JSON.stringify({ id: i, method, params }));
});

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 2, mobile: W < 800 });
await send('Page.navigate', { url: 'http://localhost:3000' });
await sleep(3000);
const expr = [
  '(() => {',
  'const vw = document.documentElement.clientWidth;',
  'const bad = [];',
  'document.querySelectorAll("*").forEach((el) => {',
  '  const r = el.getBoundingClientRect();',
  '  if (r.right > vw + 1 && r.width > 0) {',
  '    const c = el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className;',
  '    bad.push({ cls: String(c || el.tagName).slice(0, 40), right: Math.round(r.right), w: Math.round(r.width) });',
  '  }',
  '});',
  'return JSON.stringify(bad.slice(0, 25));',
  '})()',
].join('\n');
const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
console.log('result:', r.result.value);
ws.close();
try { edge.kill(); } catch {}
await sleep(200);
try { rmSync(profile, { recursive: true, force: true }); } catch {}
