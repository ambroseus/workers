const http = require("http");
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

const server = http.createServer();

server.on("request", (req, res) => {
  compute();
  res.write(`done.\n`);
  res.end();
});

server.listen(PORT);
console.log(`starting server http://localhost:${PORT}`);
