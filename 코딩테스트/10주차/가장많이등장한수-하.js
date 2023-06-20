// [문제 설명]
// 숫자로 이루어진 문자열 s가 있습니다. 이 문자열에서 가장 많이 등장하는 수를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, s가 '104001100'로 주어질 때, 가장 많이 등장하는 수는 0입니다.

// [제한 사항]

// 등장하는 수가 같은 경우, 작은 수를 출력합니다.
// [입력 형식]

// s는 길이가 1 이상 100 이하의 문자열입니다.
// s는 숫자로 구성됩니다.
// [출력 형식]

// 가장 많이 등장하는 수를 출력합니다.
function solution(s) {
  let temp = s.split("");
  let save = [];
  for (let i = 0; i < temp.length; i++) {
    save.push(parseInt(temp[i]));
  }
  save.sort((x, y) => x - y);
  let set = new Set(save);
  let check = save[0];
  let count = 0;
  let final = [];
  for (let i = 0; i < save.length; i++) {
    if (check == save[i]) {
      count++;
    } else {
      final.push(count);
      count = 1;
      check = save[i];
    }
  }
  final.push(count);

  let max = Math.max.apply(null, final);
  let arr = Array.from(set);
  return arr[final.indexOf(max)];
}
