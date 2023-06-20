// [문제 설명]
//  정수 n에서 각 자리수에서 짝수의 개수를 출력하는 함수, solution을 완성해주세요.

//  예를 들어, n의 값이 2875812 일 때, 각 자리수의 짝수 값은 2, 8, 8, 2로 결과는 4입니다.

// [입력 형식]
//  - n은 1 이상 100,000,000 이하의 자연수입니다.

// [출력 형식]
//  - 각 자리수의 짝수 개수를 출력합니다.

function solution(n) {
  var answer = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 == 0) {
      answer++;
    }
  }
  return answer;
}
