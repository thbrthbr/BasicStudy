// [문제 설명]
//  당신은 조카에게 피아노를 가르쳐 주고 있습니다.
//  조카는 아직 어려 손이 작기 때문에 한 손으로는 인접한 건반 3개까지만 동시에 누를 수 있습니다.
//  예를 들어 눌러야 하는 건반을 '1', 아닌 건반을 '0'으로 표현하여 동시에 연주해야 하는 건반을 문자열로 나타냈을 때, 111 또는 101를 한 손으로 연주할 수는 있지만 1001를 한 손으로 누를 수는 없습니다.

//  어리지만 피아노에 재능이 있는 조카는 벌써 양손으로 연주하는 법을 익혔습니다.
//  즉, 위와 같은 문자열 표현으로 1110000101는 왼손으로 앞부분의 111를 누르고 오른손으로 뒷부분의 101를 눌러 연주할 수 있습니다.

//  당신은 이제 새로운 곡을 가르쳐주려고 하는데, 조카가 이 곡을 연주할 수 있는지 확인하려고 합니다.
//  동시에 눌러서 연주해야하는 건반들의 정보가 주어질 때, 조카가 연주할 수 있는지 판단하는 함수, solution을 완성해주세요.

// [제한 사항]
//  - 문자열 표현에서 '1' 이면 눌러야 하는 건반, '0' 이면 누르지 않아야 하는 건반입니다.

// [입력 형식]
//  - s는 길이가 12인 문자열입니다.
//  - s는 '0'과 '1'로만 구성됩니다.

// [출력 형식]
//  - 조카가 연주할 수 있으면 'YES', 아니면 'NO'를 출력합니다.

function solution(s) {
  let groupCount = 0;
  let currentGroupStart = -3;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      continue;
    }

    if (currentGroupStart + 2 < i) {
      groupCount += 1;
      currentGroupStart = i;
    }
  }

  return groupCount <= 2 ? "YES" : "NO";
}
