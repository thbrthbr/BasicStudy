// [문제 설명]
// 여러 개의 문장을 줍니다. 이 중 가장 많은 단어를 가진 문장의 단어 수를 반환하는 함수, solution을 완성해주세요.

// 예를 들어, 여러 개의 문장 arr [Happy new year, Hello world, Nice to meet you]이 있을 때, 가장 많은 단어의 수는 4입니다.

// Happy new year는 3개의 단어로 구성됩니다.
// Hello world는 2개의 단어로 구성됩니다.
// Nice to meet you는 4개의 단어로 구성됩니다.
// 결과는 4입니다.

// [제한 사항]

// 단어는 공백()으로 구분되어 있습니다.
// [입력 형식]

// arr는 길이가 1 이상 100 이하인 배열입니다.
// arr의 요소는 길이가 1 이상 100 이하인 문자열입니다.
// arr의 요소는 영어 대, 소문자와 공백()으로 이루어져 있습니다.
// [출력 형식]

// 가장 많은 단어 수를 int 형식으로 반환합니다.

function solution(arr) {
  let temp = [];
  let temp2 = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].trim());
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == " ") {
        count++;
      }
    }
    temp2.push(count);
  }

  let max;
  max = Math.max.apply(null, temp2);

  return max + 1;
}
