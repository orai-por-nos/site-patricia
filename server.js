// Servidor estático simples para rodar o site localmente.
// Uso:  node server.js   ->  http://localhost:3000
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  // Segurança básica: impede acesso fora da raiz
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Acesso negado');
    return;
  }

  // MP4 byte ranges let browsers fetch metadata and playback buffers without
  // downloading a complete clip for every range request.
  if (path.extname(filePath).toLowerCase() === '.mp4') {
    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Arquivo não encontrado');
        return;
      }
      let start = 0;
      let end = stat.size - 1;
      const headers = { 'Content-Type': 'video/mp4', 'Accept-Ranges': 'bytes' };
      const range = req.headers.range;
      if (range) {
        const match = /^bytes=(\d*)-(\d*)$/.exec(range);
        if (match && (match[1] || match[2])) {
          if (!match[1]) start = Math.max(0, stat.size - Number(match[2]));
          else {
            start = Number(match[1]);
            if (match[2]) end = Math.min(Number(match[2]), end);
          }
        } else start = stat.size;
        if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= stat.size) {
          res.writeHead(416, { ...headers, 'Content-Range': `bytes */${stat.size}`, 'Content-Length': 0 });
          res.end();
          return;
        }
        headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
      }
      headers['Content-Length'] = end - start + 1;
      res.writeHead(range ? 206 : 200, headers);
      if (req.method === 'HEAD') { res.end(); return; }
      const stream = fs.createReadStream(filePath, { start, end });
      stream.on('error', () => res.destroy());
      res.on('close', () => stream.destroy());
      stream.pipe(res);
    });
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Arquivo não encontrado');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('Site disponível em: http://localhost:' + PORT);
});