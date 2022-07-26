const http = require('http');
const { env } = require('process');

const server = http.createServer((req, res) => {
  res.end('This is my first response');
});

server.listen(process.env.PORT || 3000);
