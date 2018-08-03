require("colors");

const TICKS = 100000;
const STEPS = 30;
const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "gray"];
const out = str => process.stdout.write(str);

function step(color) {
  new Array(TICKS).fill().map(n => n++);
  out("."[color]);
}

function task() {
  const start = new Date();
  const ID = Math.floor(Math.random() * 9000) + 1000;
  const color = colors[Math.floor(Math.random() * colors.length)];
  out(`[^${ID}`[color]);

  new Array(STEPS).fill().map(() => step(color));

  const time = new Date() - start;
  out(`${ID} @ ${time / 1000}]`[color]);
  return time;
}

module.exports = task;
