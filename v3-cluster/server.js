const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const { uid, timing, sec, sum } = require("../utils");
const task = require("./task");

const PORT = process.env.PORT || 8888;

function compute() {
  const ID = uid();
  console.log(`[^${ID} `);

  const appTime = timing(() => {
    Promise.all(["red", "green", "yellow", "blue"].map(task)).then(times => {
      console.log(`\n${ID}]\nsum time: ${sec(sum(times))}`);
    });
  });
  console.log(`\napp time: ${sec(appTime)}`);
}

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  new Array(numCPUs).fill().map(() => cluster.fork());

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer();

  server.on("request", (req, res) => {
    compute();
    res.write(`done.\n`);
    res.end();
  });

  server.listen(PORT);
  console.log(`starting server http://localhost:${PORT}`);

  console.log(`Worker ${process.pid} started`);
}
