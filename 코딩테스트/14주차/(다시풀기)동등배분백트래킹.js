// [문제 설명]
// 문제를 풀었을 때 리워드 포인트가 주어지게 되는데, 리워드 포인트들이 담긴 배열이 주어집니다.
// 이 때, K명의 학생이 있고 서로 최대한 동등하게 포인트를 나누어 가지고 싶습니다.
// 만약 리워드 포인트가 [8, 15, 10, 20, 8]와 K=2로 주어졌을 경우, [8, 8, 15]를 첫 번째 학생이 풀고 나머지 [10, 20]을 두 번째 학생이 풀게 되면 포인트를 최대한으로 동등하게 배분할 수 있습니다.
// 이 경우에, [8, 8, 15]의 합과 [10, 20]의 합의 최대값 max(31, 30) = 31을 반환해주시면 됩니다.

// [제한 사항]
// - 리워드 포인트 배열의 길이는 2이상 8이하입니다.
// - 각 포인트는 1 이상 10000이하입니다.
// - 학생의 명수는 2명 이상 리워드 포인트 배열 길이 이하입니다.

// [입력 형식]
// - 리워드 포인트 배열 rewards와 학생의 명수인 K가 주어집니다.

// [출력 형식]
// - 포인트를 최대한 동등하게 분배하고 난 결과물 합의 최대값을 반환해주세요.

let rewards = [1];
let k = 1;

function solution(rewards, k) {
  rewards.sort((a, b) => b - a);
  let students = [];
  let result = Infinity;
  for (let i = 0; i < k; i++) {
    students.push([]);
  }
  for (let i = 0; i < k; i++) {
    students[i].push(rewards.shift());
  }

  const distribute = () => {
    if (rewards.length === 0) {
      let max = 0;
      for (let i = 0; i < students.length; i++) {
        max = Math.max(
          max,
          students[i].reduce((acc, cur) => {
            return acc + cur;
          }, 0)
        );
      }
      result = Math.min(result, max);
      return;
    }

    for (let i = 0; i < students.length; i++) {
      let number = rewards.shift();
      students[i].push(number);
      distribute();
      students[i].pop();
      rewards.unshift(number);
    }
  };

  distribute();
  return result;
}

console.log(solution(rewards, k));
