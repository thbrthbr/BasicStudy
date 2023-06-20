// 0 ~ 100까지의 숫자가 적혀있는 카드가 있습니다.
// 해당 카드를 뽑은 순서에 따라 아래 규칙에 의거해 점수를 책정합니다.

// 뽑은 카드의 숫자와 현재 까지 뽑은 카드의 수를 곱한다.
// 짝수번째로 뽑은 카드의 경우 -1을 더 곱한다.
// 배열 A에 뽑은 카드의 리스트가 제공될때 해당 카드들이 규칙에 따라 나올수 있는 가장 큰 점수가 몇점인지 구하는 함수를 작성하세요.

// [입력]
// 카드 리스트 배열 A

// [출력]
// 규칙에 의거해서 나올수 있는 최대 점수

function solution(A) {
  A = A.sort((x, y) => x - y);
  let temp = [];
  let origin = A.length;
  let fix = Math.floor(A.length / 2);
  for (let i = 0; i < fix; i++) {
    temp.push(A[0]);
    A.shift();
  }

  temp = temp.sort((x, y) => y - x);
  let final = [];
  let j = 0;
  let i = 0;
  for (let a = 0; a < origin; a++) {
    if (a % 2 == 0) {
      final.push(A[i]);
      i++;
    } else {
      final.push(temp[j]);
      j++;
    }
  }

  let count = 0;
  for (let i = 0; i < final.length; i++) {
    if (i % 2 == 0) {
      count += (i + 1) * final[i];
    } else {
      count += (i + 1) * final[i] * -1;
    }
  }

  return count;
}
