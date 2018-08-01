const http = require("http");
const task = require("./task");

const PORT = process.env.PORT || 8888;
const processID = () => Math.floor(Math.random() * 9000) + 1000;

function process() {
  const ID = processID();
  console.log(`\n[^${ID}`);
  const start = new Date();

  const times = [1, 2, 3, 4].map(() => task());

  const appTime = new Date() - start;
  const tasksTime = times.reduce((acc, n) => acc + n, 0);
  console.log(`\n${ID} @ ${tasksTime / 1000}/${appTime / 1000}]`);
}

const server = http.createServer();
server.on("request", (req, res) => {
  process();
  res.write(`done.\n\n`);
  res.end();
});

server.listen(PORT);
console.log(`http://localhost:${PORT}`);
