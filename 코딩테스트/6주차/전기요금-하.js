// [문제 설명]
//  n개의 방에서 사용한 전기량 usageArr과 전기 요금 fee가 주어질 때, 사용한 모든 전기 요금을 구하는 함수, solution을 완성해주세요.

//  예를 들어, usageArr가 [1, 3, 5] 이고, fee가 5일 때, 총 전기 요금은 45입니다.

// [제한 사항]
//  - 전기 요금 fee는 사용한 전기량 1당 요금입니다.

// [입력 형식]
//  - usageArr는 길이가 1 이상 100 이하의 배열입니다.
//  - usageArr의 각 요소인 사용한 전기량은 0 이상 100 이하의 정수입니다.
//  - fee는 1 이상 1,000 이하의 정수입니다.

// [출력 형식]
//  - 사용한 모든 전기 요금을 구합니다.

function solution(useageArr, fee) {
  let count = 0;
  for (let i = 0; i < useageArr.length; i++) {
    count = count + useageArr[i] * fee;
  }
  return count;
}
