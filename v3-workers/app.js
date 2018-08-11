const task = require("./task");
const { out, timing, sec } = require("../utils");

let times = [];

const appTime = timing(() => {
  times = ["red", "green", "yellow", "blue"].map(task);
});

out`
  sum time: ${sec(times.reduce((a, n) => a + n, 0))}
  app time: ${sec(appTime)}


  `;
