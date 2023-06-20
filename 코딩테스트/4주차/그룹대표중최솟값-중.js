// [문제 설명]
//  그룹의 대표 중 최솟값을 구하려고 합니다. 2N 개의 정수가 주어질 때, 주어진 정수를 2개씩 그룹 짓고 그중 큰 값을 대푯값이라고 합니다.
//  이렇게 구한 대푯값들의 합의 최솟값을 구하는 함수, solution을 완성해주세요.

//  예를 들어, arr [4, 1, 3, 2]가 있을 때, 대푯값의 합의 최솟값은 6입니다.
//  > 그룹이 (1, 4), (2, 3)일 때, 대푯값은 4, 3으로 합은 7입니다.
//  > 그룹이 (1, 3), (2, 4)일 때, 대푯값은 3, 4로 합은 7입니다.
//  > 그룹이 (1, 2), (3, 4)일 때, 대푯값은 2, 4로 합은 6입니다.
//  > 대푯값의 합 중 최솟값은 6입니다.

// [입력 형식]
//  - arr는 길이가 2 이상 2N 이하인 배열입니다.
//  - N은 1 이상 100 이하의 정수입니다.
//  - arr의 원소는 0 이상 1,000 이하의 정수입니다.

// [출력 형식]
//  - 대푯값의 합의 최솟값을 구합니다.

let arr = [
  194, 147, 725, 307, 925, 345, 663, 378, 71, 374, 320, 705, 548, 329, 821, 864,
  263, 624, 50, 186, 207, 882, 607, 46, 966, 758, 869, 922, 648, 363,
];

let N = 98;

function solution(arr, N) {
  let temp = arr.sort((x, y) => x - y);
  let temp3 = [];
  let temp4 = [];
  for (let i = 0; i < temp.length; i = i + 2) {
    let temp2 = [];
    temp2.push(temp[i]);
    temp2.push(temp[i + 1]);
    temp3.push(temp2);
  }

  for (let i = 0; i < temp3.length; i++) {
    let max;
    temp4.push(Math.max.apply(null, temp3[i]));
  }

  let sum = 0;
  for (let i = 0; i < temp4.length; i++) {
    sum += temp4[i];
  }

  return sum;
}

console.log(solution(arr, N));
