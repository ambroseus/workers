const task = require("./task");
const start = new Date();

const tasksTime = [1, 2, 3, 4].reduce((acc, n) => acc + task(n), 0);

const appTime = new Date() - start;
console.log(`
  sum time: ${tasksTime}ms
  app time: ${appTime}ms

`);
