// [문제 설명]
// 숫자 n이 주어질 때, 0 이상 n 이하의 연속된 정수의 합이 n과 같은 경우의 수를 구하는 함수, solution을 완성해주세요.

// 예를 들어, n이 15로 주어질 경우, 연속된 정수의 합이 15와 같은 경우의 수는 다음과 같이 4입니다.

// 15
// 8 + 7
// 4 + 5 + 6
// 1 + 2 + 3 + 4 + 5

// [입력 형식]

// n은 1 이상 10,000 이하의 정수입니다.
// [출력 형식]

// 연속된 정수의 합이 n과 같은 경우의 수를 int 형식으로 출력합니다.

function solution(n) {
  let count = 0;

  let save = [];

  for (let j = 1; j < n; j++) {
    let temp = j;
    for (let i = 0; i < n + 1; i++) {
      if (j < i) {
        temp = temp + i;
      }
      if (temp == n) {
        save.push(j + "+" + i);
        count++;
      } else if (temp > n) {
        break;
      }
    }
  }

  if (count == 0) {
    return 1;
  }

  console.log(save);
  return count + 1;
}
