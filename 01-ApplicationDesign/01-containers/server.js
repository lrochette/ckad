const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello from kubernetes!');
});
server.listen(port, () => {
  console.log("erver running on http:/localhost:%s", port);
});
