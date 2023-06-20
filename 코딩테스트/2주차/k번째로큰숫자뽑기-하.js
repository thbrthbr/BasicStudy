// 배열 A에는 0~9까지의 숫자가 랜덤하게 들어있습니다.
// 해당 배열의 숫자를 두개 뽑아 조합했을 때  K번째로 큰 숫자를 리턴하는 함수를 작성하세요.

// 입력
//  0 ~ 9까지의 임의의 숫자 배열 A
//  숫자 K

// 출력
//  K 번재 큰 2자리 숫자

// 매개변수 : int[] A, int K
// 리턴타입 : int

function solution(A, K) {
  let temp = [];
  let temp2 = [];
  let temp3 = [];
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    temp.push(A[i].toString());
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i != j) {
        temp2.push(temp[i] + temp[j]);
      }
    }
  }

  for (let i = 0; i < temp2.length; i++) {
    if (temp2[i] > 10) {
      temp3.push(parseInt(temp2[i]));
    }
  }
  let dsc = function (x, y) {
    return y - x;
  };
  temp3 = temp3.sort(dsc);
  for (let i = 0; i < temp3.length; i++) {
    if (K - 1 == i) {
      answer = temp3[i];
    }
  }

  return answer;
}
