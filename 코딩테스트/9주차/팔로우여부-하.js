// SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
// 다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.

// 이때 ["철수", "영희"] 라는 정보는 철수가 영희를 팔로우 했음을 나타냅니다.

// [입력]
// 팔로우 관계가 표현된 String 2차원 배열 A.

// [출력]
// 맞팔 관계인 쌍의 수

function solution(A) {
  let B = JSON.parse(JSON.stringify(A));
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      A[i].reverse();
      if (JSON.stringify(A[i]) == JSON.stringify(B[j])) {
        count++;
      }
      A[i].reverse();
    }
  }
  return count / 2;
}
