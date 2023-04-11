const http = require('http');
const cowsay = require("cowsay");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello everyone');
    res.end(cowsay.say({
    text : "I'm a moooodule",
    e : "XO",
    T : "u "
    }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});