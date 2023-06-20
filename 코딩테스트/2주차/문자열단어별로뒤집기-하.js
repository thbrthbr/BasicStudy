// [문제 설명]
//  알파벳 대/소문자와 숫자 그리고 구분자인 마침표("."), 쉼표(","), 느낌표("!"), 물음표("?"), 스페이스(" ")로 이뤄진 문장이 있습니다. 문장 내에는 구분자를 기준으로 단어를 구분합니다.
//  문장 s가 주어질 때, 단어를 거꾸로 출력하는 함수, solution을 완성해주세요.

//  예를 들어, 문장 "Hello, World!?"가 주어진다고 가정할 때, 구분자를 기준으로 구분된 단어는 "Hello", "World"이며, 단어를 거꾸로 출력한 결과는 ["olleH", "dlroW"] 입니다.

// [입력 형식]
//  - s는 길이가 1 이상 1000 이하의 문자열입니다.

// [출력 형식]
//  - 단어를 거꾸로 치환한, 문자열로 이뤄진 배열을 출력합니다.
//  - 비어있는 단어는 제거하고 출력합니다.

function solution(s) {
  let result = [];
  let result2 = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "," ||
      s[i] == "." ||
      s[i] == "!" ||
      s[i] == "?" ||
      s[i] == " "
    ) {
      let temp = "";
      while (j < i) {
        if (
          s[j] != "," ||
          s[j] != "." ||
          s[j] != "!" ||
          s[j] != "?" ||
          s[j] != " "
        ) {
          temp += s[j];
        }
        j++;
      }
      result.push(temp);
    }
    //console.log(i);
    //console.log(s.length);
    let temp2 = "";
    if (i + 1 == s.length) {
      for (let i = j; i < s.length; i++) {
        temp2 += s[i];
      }
      result.push(temp2);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] != "," &&
      result[i] != "." &&
      result[i] != "!" &&
      result[i] != "?" &&
      result[i] != " "
    ) {
      result2.push(result[i]);
    }
  }
  //  console.log(result2);
  let answer = "";
  let final = [];
  for (let a = 0; a < result2.length; a++) {
    if (
      result2[a] != "" &&
      result2[a] != " " &&
      result2[a] != "," &&
      result2[a] != "!" &&
      result2[a] != "?" &&
      result2[a] != "."
    ) {
      for (let i = result2[a].length - 1; i >= 0; i--) {
        if (
          result2[a][i] != " " &&
          result2[a][i] != "," &&
          result2[a][i] != "!" &&
          result2[a][i] != "?" &&
          result2[a][i] != "."
        ) {
          answer += result2[a][i];
        }
      }
      final.push(answer);
      answer = "";
    }
  }

  return final;
}
