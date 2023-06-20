// 배열 A에는 0보다 큰 숫자가 N개 들어있습니다.
// 모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요.

// 입력
//  0보다 큰 정수가 들어있는 배열 A

// 출력
//  배열 A의 모든 정수를 아우르는 최대 공약수

// 매개변수 : int[] A
// 리턴타입 : int

let A = [6, 12, 4];

function solution(A) {
  let all = [];
  for (let i = 0; i < A.length; i++) {
    let index = 1;
    let temp = [];
    while (index <= A[i]) {
      if (A[i] % index == 0) {
        temp.push(index);
      }
      index += 1;
    }
    all.push(temp);
  }
  let last = all[0];
  for (let i = 1; i < all.length; i++) {
    last = last.concat(all[i]);
  }
  let reallast = last.sort((x, y) => x - y);

  // console.log(reallast);
  let temp2 = [];

  for (let i = 1; i < reallast.length; i++) {
    if (reallast[i - 1] == reallast[i]) {
      temp2.push(reallast[i]);
    }
  }

  const result = {};
  temp2.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  let arr = Object.values(result);
  let max = Math.max(...arr);

  let lasttemp;
  for (var key in result) {
    if (result[key] == max) {
      lasttemp = key;
    }
  }
  return parseInt(lasttemp);
}

console.log(solution(A));
