const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

let port = 3000;
let retries = 0;
const maxRetries = 5;
const retryDelay = 1000; // 1 second

function startServer() {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    retries = 0; // Reset retries on successful start
  });
}

function handleServerError(err) {
  if (err.code === 'EADDRINUSE') {
    if (retries < maxRetries) {
      const delay = retryDelay * 2**retries;
      console.error(`Port ${port} is in use. Retrying in ${delay / 1000} seconds...`);
      setTimeout(startServer, delay);
      retries++;
    } else {
      console.error(`Failed to start server after ${maxRetries} retries.`);
      process.exit(1); // Exit with error code
    }
  } else {
    console.error('Fatal server error:', err);
    process.exit(1); // Exit with error code
  }
}

server.on('error', handleServerError);

startServer();