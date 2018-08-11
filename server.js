const http = require("http");
const { out, uid, timing, sec } = require("./utils");
const task = require("./v1-brutforce/task");

const PORT = process.env.PORT || 8888;

function compute() {
  const ID = uid();
  let times = [];

  out`\n[^${ID}\n`;

  const appTime = timing(() => {
    times = [1, 2, 3, 4].map(task);
  });

  out`
sum time: ${sec(times.reduce((a, n) => a + n, 0))}
app time: ${sec(appTime)}
  `;
}

const server = http.createServer();

server.on("request", (req, res) => {
  compute();
  res.write(`done.\n`);
  res.end();
});

server.listen(PORT);
out`starting server http://localhost:${PORT}\n`;
