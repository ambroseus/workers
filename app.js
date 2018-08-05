const task = require("./task");
const { out, timing, sec } = require("./utils");

let times = [];

const appTime = timing(() => {
  times = [1, 2, 3, 4].map(task);
});

out`
  sum time: ${sec(times.reduce((a, n) => a + n, 0))}
  app time: ${sec(appTime)}


  `;
