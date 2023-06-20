// 배열 A에는 0 ~ 1000사이의 숫자가 랜덤하게 들어있습니다.
// 이 숫자들이 2진수로 변환되었을 때 가지고 있는 1의 개수에 따라 오름차순 정렬하는 함수를 작성하세요.
// 단, 1의 개수가 같은 경우 숫자의 크기에 따라 오름차순 정렬을 합니다.

// [입력]
// 0 ~ 1000사이의 숫자가 들어있는 배열 A

// [출력]
// 주어진 조건에 따라 정렬된 배열

function solution(A) {
  // 1 10 11 100
  let check = 0;

  A.sort((x, y) => x - y);

  let max;
  max = Math.max.apply(null, A);
  let i = 0;
  let sum = 0;
  while (sum <= max) {
    i++;
    sum = 2 ** i;
  }
  let temp = [];
  let temp1 = [];
  for (let a = 0; a < i; a++) {
    temp.push([]);
    temp1.push([]);
  }

  let temp2 = [];
  for (let i = 0; i < A.length; i++) {
    temp2.push(A[i].toString(2));
  }

  for (let i = 0; i < temp2.length; i++) {
    let count = 0;
    for (let j = 0; j < temp2[i].length; j++) {
      if (temp2[i][j] == 1) {
        count++;
      }
    }
    if (count != 0) {
      temp1[count - 1].push(temp2[i]);
    } else {
      check++;
    }
  }

  for (let i = 0; i < temp1.length; i++) {
    if (temp1[i].length < 1) {
      temp1.splice(i, 1);
      i--;
    }
  }

  let final = [];

  for (let i = 0; i < temp1.length; i++) {
    for (let j = 0; j < temp1[i].length; j++) {
      final.push(temp1[i][j]);
    }
  }

  //   console.log(final);

  let last = [];

  for (let i = 0; i < final.length; i++) {
    last.push(parseInt(final[i], 2));
  }

  for (let i = 0; i < check; i++) {
    last.unshift(0);
  }

  return last;
}
