// [문제 설명]
// 돌로 만들어진 징검다리를 건너려고 합니다.
// 징검다리 bridge는 돌을 나타내는 1과 돌이 없음을 나타내는 0의 배열로 이루어져 있습니다
// 최대 멀리 뛸 수 있는 jumpSize가 주어질 때 다리를 건널 수 있는지를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, 징검다리 bridge가 [1, 0, 1, 0, 0, 1]이고, jumpSize가 2일 때, 결과는 true입니다.

// 첫 번째 돌 (index=0)과 두 번째 돌 (index=2)은 거리가 1만큼 떨어져 있으므로 이동할 수 있습니다.
// 두 번째 돌 (index=2)과 세 번째 돌 (index=5)는 거리가 2만큼 떨어져 있으므로 이동할 수 있습니다.
// 이 징검다리는 건널 수 있습니다.

// [제한 사항]

// 두 돌 사이의 거리 즉, bridge의 두 개의 1 사이의 0의 수가 K일 때, K <= jumpSize면 이동할 수 있습니다.
// bridge의 양 끝은 돌이 존재합니다. 즉, bridge의 길이가 N일 때, bridge[0]와 bridge[N-1]의 값은 1입니다.
// [입력 형식]

// bridge는 길이가 2 이상 1,000 이하의 배열입니다.
// bridge는 0과 1의 요소로 이루어져 있습니다.
// jumpSize는 1 이상 1,000 이하의 정수입니다.
// [출력 형식]

// 징검다리를 건널 수 있는지를 boolean 형식으로 출력합니다.

function solution(bridge, jumpSize) {
  let count = 0;
  let temp = [];
  for (let i = 0; i < bridge.length; i++) {
    if (bridge[i] == 0) {
      count++;
    } else {
      temp.push(count);
      count = 0;
    }
  }
  temp.push(count);

  let max;
  max = Math.max.apply(null, temp);

  if (max > jumpSize) {
    return false;
  } else {
    return true;
  }
}
