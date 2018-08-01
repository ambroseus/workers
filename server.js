const http = require("http");
const task = require("./task");

const PORT = process.env.PORT || 8888;

function load() {
  const ID = Math.floor(Math.random() * 9000) + 1000;
  console.log(`\n[^${ID}`);
  const start = new Date();

  const times = [1, 2, 3, 4].map(() => task());

  const appTime = new Date() - start;
  const tasksTime = times.reduce((acc, n) => acc + n, 0);
  console.log(`\n${ID} @ ${tasksTime / 1000}/${appTime / 1000}]`);
}

const server = http.createServer();

server.on("request", (req, res) => {
  load();
  res.write(`done.\n\n`);
  res.end();
});

server.listen(PORT);
console.log(`http://localhost:${PORT}`);
