const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  // if문 이용
  // 입력받은 값을 같이 출력하고 싶다면 아래와 같이 사용
  // 입력 값은 line에 들어가 있음
  if (line <= 0) {
    console.log("음수");
  } else if (line === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
