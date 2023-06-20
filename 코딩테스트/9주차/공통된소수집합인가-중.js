// 주어진 두개의 수의 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.

// 예를들어 12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
// 9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.

// [입력]
// 1 ~ 10000 사이의 정수 A, B

// [출력]
// 공통된 소수 집합인 경우 1, 아니면 0

function solution(A, B) {
  let arr = [];
  arr.push(A);
  arr.push(B);

  let all = [];

  for (let i = 0; i < arr.length; i++) {
    let index = 1;
    let temp = [];
    while (index <= arr[i]) {
      if (arr[i] % index == 0) {
        temp.push(index);
      }
      index += 1;
    }
    all.push(temp);
  }
  //   console.log(all);

  let each = [];

  let space = [];

  for (let i = 0; i < all.length; i++) {
    for (let j = 0; j < all[i].length; j++) {
      let check = 0;
      for (let a = all[i][j]; a >= 0; a--) {
        if (all[i][j] % a == 0) {
          check++;
        }
      }
      if (check == 2) {
        space.push(all[i][j]);
      }
    }
    each.push(space);
    space = [];
  }

  //   console.log(each);

  if (each[0].length > each[1].length) {
    for (let i = 0; i < each[0].length; i++) {
      if (each[0][i] != each[1][i]) {
        return 0;
      }
    }
  } else {
    for (let i = 0; i < each[1].length; i++) {
      if (each[0][i] != each[1][i]) {
        return 0;
      }
    }
  }
  return 1;
}
