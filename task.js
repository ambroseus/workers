require("colors");

const TICKS = 100000;
const STEPS = 30;
const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "gray"];

const out = str => process.stdout.write(str);
const taskID = () => Math.floor(Math.random() * 9000) + 1000;

function step(color) {
  new Array(TICKS).fill().map(n => n++);
  out("."[color]);
}

function task() {
  const start = new Date();
  const n = taskID();
  const color = colors[Math.floor(Math.random() * colors.length)];
  out(`[^${n}`[color]);

  new Array(STEPS).fill().map(() => step(color));

  const time = new Date() - start;
  out(`${n} @ ${time / 1000}]`[color]);
  return time;
}

module.exports = task;
