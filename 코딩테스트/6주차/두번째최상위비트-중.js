// [문제 설명]
//  정수 n이 주어집니다. 1부터 n까지의 정수를 각각 이진수로 나타내었을 때, 1이 등장하는 두 번째 최상위 비트 자리의 수를 모두 더하여 출력하시오.
//  예를 들어, 131을 이진수로 나타내면 10000011이고, 최상위 비트는 2^7인 128이며, 두 번째 최상위 비트는 2^1인 2입니다.
//  만약 4와 같이 이진수로 나타내었을 때 1이 단 한 번만 나타나는 수의 경우에는 0을 더합니다.

//  만약 n이 6으로 주어진다고 가정할 때, 두 번째 최상위 비트의 자릿수를 모두 더한 결과는 다음과 같습니다.
//  > 숫자 1의 비트 `1`에서 두 번째 최상위 비트는 없으므로 0입니다.
//  > 숫자 2의 비트 `10`에서 두 번째 최상위 비트는 없으므로 0입니다.
//  > 숫자 3의 비트 `11`에서 두 번째 최상위 비트의 수는 2^0이므로 1입니다.
//  > 숫자 4의 비트 `100`에서 두 번째 최상위 비트는 없으므로 0입니다.
//  > 숫자 5의 비트 `101`에서 두 번째 최상위 비트의 수는 2^0이므로 1입니다.
//  > 숫자 6의 비트 `110`에서 두 번째 최상위 비트의 수는 2^1이므로 2입니다.
//  > 결과 : 4

// [제한 사항]
//  - 두 번째 최상위 비트가 없으면 0을 더합니다.

// [입력 형식]
//  - n은 1 이상 10,000 이하의 정수입니다.

// [출력 형식]
//  - 1부터 n까지의 정수를 각각 이진수로 나타내었을 때, 1이 등장하는 두 번째 최상위 비트 자리의 수를 더하여 출력하세요.

function solution(n) {
  let temp = [];
  for (let i = 1; i <= n; i++) {
    temp.push(i.toString(2));
  }

  let temp2 = [];
  let temp3 = [];
  for (let i = 0; i < temp.length; i++) {
    let count = 0;
    let check = 0;
    for (let j = 0; j < temp[i].length; j++) {
      if (check == 1 && temp[i][j] == "1") {
        temp2.push(j + 1);
        check++;
      }
      if (check == 0 && temp[i][j] == "1") {
        check++;
      }
      count++;
    }
    if (check != 2) {
      temp2.push(0);
    }
    temp3.push(count);
  }

  let last = 0;
  for (let i = 0; i < temp3.length; i++) {
    if (temp2[i] != 0) {
      let the = 2 ** (temp3[i] - 1);
      for (let j = 0; j < temp2[i] - 1; j++) {
        the = the / 2;
      }
      last += the;
    }
  }

  return last;
}
