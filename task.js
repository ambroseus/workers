require("colors");

const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray"
];

const write = str => process.stdout.write(str);
const writeln = str => write(`${str}\n`);

function step(color) {
  const TICKS = 1000000;
  new Array(TICKS).fill().map(n => n++);
  write(`.`[color]);
}

function task() {
  const start = new Date();
  const n = start % (1000 * 60);
  const STEPS = 30;
  const color = colors[start % 8];
  write(`start task ${n}`[color]);

  new Array(STEPS).fill().map(() => step(color));
  const time = new Date() - start;

  writeln(`stop task ${n} (${time}ms)`[color]);
  return time;
}

module.exports = task;
