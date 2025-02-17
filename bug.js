const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

server.on('error', (err) => {
  console.error('Server error:', err);
  // Missing proper error handling logic, such as retrying or graceful shutdown
});