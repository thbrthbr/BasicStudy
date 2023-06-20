// [문제 설명]
//  둘레가 가장 큰 사각형을 구하려고 합니다.
//  N개의 정수로 만들 수 있는 둘레가 가장 큰 사각형의 둘레를 구하는 함수, solution을 완성해주세요.

//  예를 들어, arr [3, 2, 3, 1]이 주어질 때, 결과는 9입니다.

// [제한 사항]
//  - 사각형을 만들 수 없는 경우 0을 반환합니다.

// [입력 형식]
//  - arr는 길이가 4 이상 1,000 이하인 배열입니다.
//  - arr의 요소는 1 이상 1,000,000 이하의 정수입니다.

// [출력 형식]
//  - 둘레가 가장 큰 사각형의 둘레를 구합니다.

function solution(A) {
  let sorted = A.sort((x, y) => x - y);
  while (A.length >= 4) {
    if (
      A[A.length - 1] >=
      A[A.length - 2] + A[A.length - 3] + A[A.length - 4]
    ) {
      A.splice(A.length - 1, 1);
    } else {
      return (
        A[A.length - 1] + A[A.length - 2] + A[A.length - 3] + A[A.length - 4]
      );
    }
  }

  return 0;
}
