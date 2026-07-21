const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.txt': 'text/plain' };

http.createServer((req, res) => {
  const pathname = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const file = path.join(root, pathname);
  if (!file.startsWith(root) || !fs.existsSync(file)) {
    res.writeHead(404);
    return res.end('Not found');
  }
  res.writeHead(200, { 'Content-Type': (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8' });
  fs.createReadStream(file).pipe(res);
}).listen(process.env.PORT || 8080, () => console.log('http://localhost:4173'));

