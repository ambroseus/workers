const http = require("http");
const task = require("./task");

const PORT = process.env.PORT || 8888;

function compute() {
  const ID = Math.floor(Math.random() * 9000) + 1000;
  console.log(`\n[^${ID}`);
  const start = new Date();

  const times = [1, 2, 3, 4].map(task);

  const appTime = new Date() - start;
  const tasksTime = times.reduce((a, n) => a + n, 0);

  console.log(`\n${ID} @ ${tasksTime / 1000}/${appTime / 1000}]`);
}

const server = http.createServer();

server.on("request", (req, res) => {
  compute();
  res.write(`done.\n`);
  res.end();
});

server.listen(PORT);
console.log(`starting server http://localhost:${PORT}`);
