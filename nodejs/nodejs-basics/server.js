const http = require('http');
const url = require('url');
const greeter = require('./greeter');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { filename, name } = url.parse(req.url, true).query;

  fs.writeFile(`${filename}.txt`, greeter(name), (err) => {
    if (err) {
      res.end(err);
    } else {
      res.end(`Your file has been created ${name}!`);
    }
  });
});

server.listen(3000);
