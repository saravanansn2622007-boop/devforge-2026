const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.webp': 'image/webp'
};

const resolveFilePath = (reqUrl) => {
  let cleanPath = decodeURI((reqUrl || '/').split('?')[0]);
  if (cleanPath === '/' || cleanPath === '') {
    cleanPath = '/index.html';
  }
  const safePath = path.normalize(cleanPath).replace(/^(\.\.[\/\\])+/, '');
  
  // Try __dirname first, then process.cwd()
  const candidates = [
    path.join(__dirname, safePath),
    path.join(process.cwd(), safePath),
    path.join(__dirname, 'index.html'),
    path.join(process.cwd(), 'index.html')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      const stat = fs.statSync(candidate);
      if (stat.isDirectory()) {
        const nestedIndex = path.join(candidate, 'index.html');
        if (fs.existsSync(nestedIndex)) return nestedIndex;
      } else {
        return candidate;
      }
    }
  }

  return path.join(__dirname, 'index.html');
};

const requestHandler = (req, res) => {
  try {
    const filePath = resolveFilePath(req.url);

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
    });
    res.end(content);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error: ' + (err.message || ''));
  }
};

const server = http.createServer(requestHandler);

if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`DevForge 2026 server running at http://localhost:${PORT}`);
  });
}

module.exports = requestHandler;
module.exports.default = requestHandler;
