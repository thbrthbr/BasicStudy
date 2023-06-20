// 주어진 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요.

// [입력]
// 양의 정수 A, B

// [출력]
// A를 B로 바꾸기 위해 바뀌어야 하는 비트의 개수

function solution(A, B) {
  A = A.toString(2);
  B = B.toString(2);
  if (A.length != B.length) {
    let temp2 = 0;
    temp2 = Math.abs(A.length - B.length);
    if (A.length > B.length) {
      for (let i = 0; i < temp2; i++) {
        B = "0" + B;
      }
    } else {
      for (let i = 0; i < temp2; i++) {
        A = "0" + A;
      }
    }
  }
  let temp = 0;
  for (let i = 0; i < B.length; i++) {
    if (A[i] != B[i]) {
      temp++;
    }
  }
  return temp;
}
