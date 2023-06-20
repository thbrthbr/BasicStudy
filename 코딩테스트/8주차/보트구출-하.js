// 무인도에 갇힌 N명의 인원이 우연히 발견한 보트를 통해 탈출을 생각하고 있습니다.
// 보트의 경우 2인승이라 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한이 있습니다.

// 사람들의 몸무게를 담은 배열과 보트 무게제한 limit를 주어줄 때 최대한 적게 보트를 사용하여 모든 사람을 구출 하려고 할 때 보트의 사용 횟수를 구하는 함수를 작성하세요.

// 단, 무인도에 갇힌 사람은 1명 이상이며, 보트의 무게 제한보다 사람의 몸무게보다 큰 경우는 없습니다.

// [입력]
// 사람들의 몸무게를 담은 배열 A, 보트의 제한 무게 K

// [출력]
// 최소한의 보트 사용 횟수

function solution(A, K) {
  A = A.sort((x, y) => x - y);
  let count = 0;
  let check = 0;
  while (check != 1) {
    if (A[A.length - 1] + A[0] > K) {
      A.pop();
      count++;
    } else {
      check = 1;
    }
  }
  let what = 0;
  if (A.length % 2 == 1) {
    what = Math.floor(A.length / 2) + 1;
  } else {
    what = Math.floor(A.length / 2);
  }
  return count + what;
}
