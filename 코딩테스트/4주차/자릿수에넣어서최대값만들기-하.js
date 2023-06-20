// -10000 ~ 10000 사이의 숫자 N과 1 ~ 9 사이의 숫자 K가 주어집니다.
// K를 N의 특정 자리에 넣어서 만들수 있는 숫자들 중 최대값을 구하는 함수를 작성하세요.

// 입력
//  -10000 ~ 10000 사이의 정수 N, 1 ~ 9 사이의 정수 K

// 출력
//  주어진 조건에 만족하는 정수

// 매개변수 : int
// 리턴타입 : int

let N = 41332181;
let K = 3;

function solution(N, K) {
  let string = "";
  if (N > 0) {
    for (let i = 0; i < N.toString().length; i++) {
      if (parseInt(N.toString()[i]) < K) {
        return parseInt(
          N.toString().slice(0, i) + K.toString() + N.toString().slice(i)
        );
      } else {
        string = N.toString() + K.toString();
      }
    }
  } else if (N == 0) {
    return parseInt(K.toString() + N.toString());
  } else {
    for (let i = 1; i < N.toString().length; i++) {
      if (parseInt(N.toString()[i]) > K) {
        return parseInt(
          N.toString().slice(0, i) + K.toString() + N.toString().slice(i)
        );
      } else {
        string = N.toString() + K.toString();
      }
    }
  }
  return parseInt(string);
}

console.log(solution(N, K));
