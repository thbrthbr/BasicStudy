const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = [];

rl.on("line", function (line) {
  n = line.split(" ");

  //여기부터
  let save = n;
  let temp = [];
  while (n > 0) {
    let sum = "";
    for (let i = 0; i < n; i++) {
      sum += "*";
    }
    temp.push(sum);
    n--;
  }
  let reverse = temp.reverse();
  for (let i = 0; i < save; i++) {
    console.log(reverse[i]);
  }

  //여기까지 사이에 구현하면 됨
}).on("close", function () {
  // console.log(Number(input[0]) + Number(input[1]));
});
