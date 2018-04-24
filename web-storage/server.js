const http = require('http');
const server = http.createServer();

server
  .on('request', (req, res) => {
    const cookies = req.headers['cookie'];
    req.cookie = {};

    if (cookie) {
      cookie.split(';').forEach(cookie => {
        const temp = cookie.split('=');
        req.cookie[temp[0]] = temp[1];
      });
    }

    if (req.cookie.isFirstTimeVisit) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });

      res.end('Wellcome back!')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Set-Cookie': 'isFirstTimeVisit=true; Max-Age=20;'
      });

      res.end('Wellcome');
    }
  })
  .listen(4000, () => {
    console.log('running...')
  })
