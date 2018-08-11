const task = require("./task");
const { timing, sec, sum } = require("../utils");

const appTime = timing(() => {
  Promise.all(["red", "green", "yellow", "blue"].map(task)).then(times => {
    console.log(`\nsum time: ${sec(sum(times))}`);
  });
});

console.log(`\napp time: ${sec(appTime)}`);
