let n = 3;

function solution(n) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[i] = [];
  }

  let direction = 1;
  let x = -1;
  let y = 0;
  let num = 0;
  while (1) {
    for (let i = 0; i < n; i++) {
      x += direction;
      temp[y][x] = ++num;
    }
    n--;
    if (n == 0) break;

    for (let j = 0; j < n; j++) {
      y += direction;
      temp[y][x] = ++num;
    }
    direction *= -1;
  }

  return temp;
}

console.log(solution(n));
