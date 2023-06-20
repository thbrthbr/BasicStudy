// TEAM

// [문제 설명]
// 제로대학교에서 학생들을 대상으로 팀을 꾸리기를 원합니다. 학생마다 측정된 능력치가 존재하고, 이 능력치가 배열으로 주어집니다.
// 이 때, 능력치가 N이상 M이하인 학생들을 최대한 많이 뽑고 싶습니다.
// 또한 능력치가 N이상 M이하인 학생이 각 능력치 별로 K명 이상 존재해야 합니다.
// 이런 경우일 때, 뽑을 수 있는 학생들의 능력치(N과 M)의 합을 반환해주세요. 만약 어떤 경우에도 팀으로 꾸릴 수 없다면 -1을 반환해주세요.
// 예를 들면 학생들의 능력치 배열이 [10, 10, 11, 11, 11, 12, 12, 13, 14, 14]이고, K = 2인 경우를 생각해보면,
// 능력치가 10인 학생이 2명이므로 K명 이상 존재하고, 능력치 11, 12인 경우도 K명 이상 존재합니다.
// 하지만 능력치가 13인 학생이 1명이므로 K명 미만으로 존재하게 되어,
// 능력치의 범위가 10이상 12이하인 경우에 가장 많은 학생들을 선택할 수 있습니다. 이때의 반환값은 22입니다.

// [제한 사항]
// - 능력치의 범위는 1 이상 10000 이하입니다.
// - K의 범위는 1 이상 1000 이하입니다.
// [입력 형식]
// - 학생들의 능력치 배열인 stats와 K가 입력으로 주어집니다.
// [출력 형식]
// - 최대로 팀을 꾸릴 수 있는 능력치 범위 값 N과 M의 합을 반환해주세요.

let stats = [34];
let k = 1;

function solution(stats, k) {
  if (stats.length < k) {
    return -1;
  }

  if (stats.length == 1) {
    return stats[0] * 2;
  }

  stats.sort((x, y) => x - y);

  let temp = [];
  let tempCount = 0;
  for (let i = 0; i < stats.length; i++) {
    if (stats[i] != stats[i + 1]) {
      temp.push(tempCount);
      tempCount = 0;
    }
    tempCount++;
  }
  let max = Math.max.apply(null, temp);
  if (max < k) {
    return -1;
  }

  let first = stats[0];
  let last = 0;
  let history = [];
  let count = 0;
  let renew = 0;
  for (let i = 0; i < stats.length; i++) {
    if (stats[i + 1] != undefined) {
      if (stats[i] + 1 < stats[i + 1]) {
        if (renew <= count) {
          history.push(first + last);
        }
        count = 0;
        last = stats[i + 1];
        first = stats[i + 1];
        continue;
      }
    }

    last = stats[i + 1];
    count++;
    if (renew < count) {
      renew = count;
    }
  }
  if (renew <= count) {
    last = stats[stats.length - 1];
    history.push(first + last);
  }

  return history[0];
}

console.log(solution(stats, k));
