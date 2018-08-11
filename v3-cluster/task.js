const { cout, uid, timing, sec } = require("../utils");

const TICKS = 1000000;
const STEPS = 20;

function step(color) {
  new Array(TICKS).fill().map(() => Math.random());
  cout(color)`.`;
}

function task(color) {
  return new Promise((resolve, reject) => {
    const ID = uid();
    cout(color)`[^${ID}`;

    const time = timing(() => {
      new Array(STEPS).fill().map(() => step(color));
    });

    cout(color)`${ID} @ ${sec(time)}]`;
    return resolve(time);
  });
}

module.exports = task;
