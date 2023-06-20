// 0 ~ N 까지 수를 나열했을때 숫자 K가 몇번이나 등장하는지 확인하는 함수를 구현하세요.

// K의 등장 횟수이기 때문에 K가 1인 경우 111에서는 1이 3번 등장했고 결과에 3을 합해야 합니다.

// 입력
//  양의 정수 N, 0~9 사이의 정수 K

// 출력
//  0 ~ N 까지 K 등장 횟수

// 매개변수 : int N, int K
// 리턴타입 : int

function solution(N, K) {
  let temp = [];
  let count = 0;
  for (let i = 0; i < N + 1; i++) {
    temp.push(i);
  }
  let string = temp.join("");
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) == K) {
      count++;
    }
  }

  return count;
}
