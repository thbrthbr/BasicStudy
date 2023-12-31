// [문제 설명]
//  문자열 배열 arr가 있습니다. 이 문자열들의 중복된 단어를 제외한 단어를 오름차순으로 출력하는 함수, solution을 완성해주세요.

//  예를 들어, arr [`We can', 'give advice', 'but we cannot give conduct`]가 있을 때,
//  단어는 'We', 'can', 'give', 'advice', 'but', 'we', 'cannot', 'give', 'conduct' 이며
//  중복을 제외한 단어 결과는 ['We', 'can', 'give', 'advice', 'but', 'we', 'cannot', 'give', 'conduct']입니다.

// [제한 사항]
//  - 단어는 공백(` `)으로 구분되어 있습니다.
//  - 정렬 순서는 소문자보다 대문자가 우선으로 정렬합니다.

// [입력 형식]
//  - arr는 길이가 1 이상 100 이하의 문자열 배열입니다.
//  - arr의 요소 s는 길이가 1 이상 1,000 이하인 문자열입니다.
//  - s는 영어 대, 소문자와 공백(` `)으로 이루어져 있습니다.

// [출력 형식]
//  - 중복을 제외한 단어를 오름차순으로 출력합니다.

function solution(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let check = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == " ") {
        temp.push(arr[i].slice(check, j));
        check = j;
      }
    }
    temp.push(arr[i].slice(check));
  }

  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].trim();
  }

  let set = new Set(temp);

  temp = Array.from(set);

  return temp.sort();
}
