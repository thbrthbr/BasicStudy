// 문자열 S는 숫자와 4칙연산 기호로 이루어진 수식입니다.
// 해당 수식을 4칙연산 계산 순서에 맞춰 계산하는 함수를 작성하세요.

// 단, 소수점 자리는 2번째 자리까지 표현합니다.

// [입력]
// 사칙 연산이 가능한 String 문자열

// [출력]
// 소수점 2자리까지 표현된 사칙 연산 결과값

// 예를들어, S가 “23+5/63+15” 인 경우 결과는 23.50 입니다.

// 쉬운풀이
// function solution(S) {
//   return eval(S);
// }

function solution(S) {
  let temp = [];
  let string = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] * 1 == S[i]) {
      string += S[i];
    } else {
      temp.push(string);
      string = "";
      temp.push(S[i]);
    }
  }
  temp.push(string);
  let result = 0;

  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "/") {
      result = parseFloat(temp[i - 1]) / parseFloat(temp[i + 1]);
      result = result.toFixed(2);
      temp.splice(i + 1, 1, result);
      temp.splice(i - 1, 2);
      i = 0;
      result = 0;
    } else if (temp[i] == "*") {
      result = parseFloat(temp[i - 1]) * parseFloat(temp[i + 1]);
      temp.splice(i + 1, 1, result);
      temp.splice(i - 1, 2);
      i = 0;
      result = 0;
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "+") {
      result = parseFloat(temp[i - 1]) + parseFloat(temp[i + 1]);
      temp.splice(i + 1, 1, result);
      temp.splice(i - 1, 2);
      i = 0;
      result = 0;
    }
    if (temp[i] == "-") {
      result = parseFloat(temp[i - 1]) - parseFloat(temp[i + 1]);
      temp.splice(i + 1, 1, result);
      temp.splice(i - 1, 2);
      i = 0;
      result = 0;
    }
  }

  return temp[0];
}
