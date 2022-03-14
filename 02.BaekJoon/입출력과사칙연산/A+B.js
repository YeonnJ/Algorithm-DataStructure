const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [1, 2];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b] = input.toString().split(" ");
  console.log(typeof input);
});
