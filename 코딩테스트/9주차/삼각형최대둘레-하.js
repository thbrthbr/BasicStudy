// [문제 설명]
// 둘레가 가장 큰 삼각형을 구하려고 합니다.
// N개의 정수로 만들 수 있는 둘레가 가장 큰 삼각형의 둘레를 구하는 함수, solution을 완성해주세요.
// 예를 들어, arr [3, 2, 3]이 주어질 때, 결과는 8입니다.

// [제한 사항]
// - 삼각형을 만들 수 없는 경우 0을 반환합니다.

// [입력 형식]
// - arr는 길이가 3 이상 1,000 이하인 배열입니다.
// - arr의 요소는 1 이상 1,000,000 이하의 정수입니다.

// [출력 형식]
// - 둘레가 가장 큰 삼각형의 둘레를 int 형식으로 구합니다.

function solution(arr) {
  arr = arr.sort((x, y) => x - y);
  while (arr.length >= 3) {
    if (arr[arr.length - 1] >= arr[arr.length - 2] + arr[arr.length - 3]) {
      arr.pop();
    } else {
      return arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];
    }
  }
  return 0;
}
