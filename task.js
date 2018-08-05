const { cout, randcolor, uid, timer, sec } = require("./utils");

const TICKS = 1000000;
const STEPS = 20;

function step(color) {
  new Array(TICKS).fill().map(n => n++);
  cout(color)`.`;
}

function task() {
  const ID = uid();
  const color = randcolor();
  cout(color)`[^${ID}`;

  const time = timer(() => {
    new Array(STEPS).fill().map(() => step(color));
  });

  cout(color)`${ID} @ ${sec(time)}]`;
  return time;
}

module.exports = task;
