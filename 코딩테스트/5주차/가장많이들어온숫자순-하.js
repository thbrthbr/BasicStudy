// [문제 설명]
// 숫자로 이루어진 문자열 s가 있습니다. 이때 가장 많이 들어온 숫자 순서대로 출력하는 함수, solution을 완성해주세요.
// 단, 들어온 횟수가 같은 경우에는 작은 수를 먼저 출력합니다.

// 예를 들어, s가 '221123'으로 주어질 때, 출력 결과는 '2 1 3 0 4 5 6 7 8 9'입니다.

// [입력 형식]

// s는 길이가 1 이상 100,000 이하의 문자열입니다.
// s는 숫자로 구성됩니다.
// [출력 형식]

// 가장 많이 들어온 숫자 순서대로 공백으로 구분하여 string 형식으로 출력합니다.

function solution(s) {
  let int = parseInt(s);

  let pack = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    0: 0,
  };
  for (let i = 0; i < s.length; i++) {
    s[i] in pack ? (pack[s[i]] += 1) : (pack[s[i]] = 1);
  }

  let test = Object.keys(pack).sort(function (a, b) {
    return pack[b] - pack[a];
  });

  let string = "";
  for (let i = 0; i < test.length; i++) {
    string = string + test[i] + " ";
  }
  string = string.trim();

  return string;
}
