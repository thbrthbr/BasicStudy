// [문제 설명]
// 문자열이 하나 주어지고, 이 문자열은 ‘x’와 ‘y’ 그리고 ‘z’로만 이루어져 있는 문자열입니다.
// 이 문자열을 저희가 목표로 하는 문자열로 바꾸고 싶은데, 바꿀 때 규칙이 존재합니다.
// ‘xy’ 문자열은 ‘yx’로 바꿀 수 있고, ‘yz’ 문자열은 ‘zy’로 바꿀 수 있습니다.
// 이 때, 문자열 두 개가 주어지고 처음 주어진 문자열 ‘ini’를 바꾸고 싶은 문자열 ‘trans’로 바꿀 수 있는지 여부를 반환해주세요.
// 예를 들어 ini = ‘xyyxyz’ 로 주어지고 trans = ‘yyxxzy’이라면, 저희는 다음과 같은 순서로 이 문자를 바꿀 수 있습니다.
// ‘xy’yxyz -> ‘yx’yxyz / y’xy’xyz -> y’yx’xyz / yyxx’yz’ -> yyxx’zy’ 로 3번에 걸쳐 바꾸면, trans와 같아지게 됩니다. 이 경우 문자열을 목표한 trans로 바꿀 수 있기 때문에 ‘YES’를 반환해주시면 되고, 만약 불가능할 경우 ‘NO’를 반환해주시면 됩니다

// [제한 사항]
// - 문자열은 1 이상 100,000이하의 길이를 가지고 있고 항상 x, y, z 로만 이루어져 있습니다.

// [입력 형식]
// - 원래의 문자열 ini와 바뀌어야 하는 문자열 trans가 주어집니다.

// [출력 형식]
// - ini를 trans로 바꿀 수 있다면 ‘YES’를 반환, 아니라면 ‘NO’를 반환해주세요.

// 제한 시간: 30분
// 문제 유형: DP

/**
 * @param {string} ini = "xyyxyz";
 * @param {string} trans = "yyxxzy;"
 * @return {string}
 */

let ini = "xyyxyz";
let trans = "yyxxzy";

function solution(ini, trans) {
  let i = 0;
  let j = 0;

  while (i < ini.length || j < trans.length) {
    while (ini[i] == "y") i++; // y일 때는 count 올려주고 y가 아니게 되면 스톱
    while (trans[j] == "y") j++; // y일 때는 count 올려주고 y가 아니게 되면 스톱
    // i = 0 / j = 2
    if ((i == ini.length || j == ini.length) && i != j) return "NO";
    //
    if (ini[i] != trans[j]) return "NO";
    // 처음 접해지는 문자가 둘이 다를 경우는 같게 만들어 줄 수 없으므로 NO
    if (ini[i] == "x" && i > j) return "NO";
    // i j 번째에 해당하는 문자가 둘 다 x로 같은데 숫자는 i가 더 클 경우도 NO
    if (ini[i] == "z" && i < j) return "NO";
    // i j 번째에 해당하는 문자가 둘 다 y로 같은데 숫자는 i가 더 작을 경우도 NO

    i++;
    j++;
  }

  return "YES";
}

console.log(ini);
console.log(solution(ini, trans));
