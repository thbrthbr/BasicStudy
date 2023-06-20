// [문제 설명]
// n개의 정수 배열 arr가 있습니다. 배열 내 짝수의 개수를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, arr [1, 9, 9, 1, 3, 2, 6]가 있을 때, 짝수의 개수는 2입니다.

// [입력 형식]
// - arr는 길이가 100 이하의 배열입니다.
// - arr의 요소는 1 이상 100 이하의 정수로 구성되어 있습니다.

// [출력 형식]
// - 짝수의 개수를 출력합니다.

function solution(arr) {
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      answer++;
    }
  }
  return answer;
}
