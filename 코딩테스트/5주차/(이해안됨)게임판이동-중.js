// [문제 설명]
// h x w개의 격자 형태의 게임판이 있습니다. 이 중 왼쪽 위에 시작점이 있고, 오른쪽 아래에 종료 지점이 있습니다.
// 게임 방법은 시작 지점에 말을 놓고, 말을 종료 지점까지 이동하면 이기는 게임이며, 말은 오른쪽이나 아래로만 이동할 수 있습니다.
// 이때, 게임을 이기는 방법의 수를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, h가 2이고, w가 3인 게임판이 주어질 때, 게임을 이기는 방법의 수는 다음과 같이 총 3가지 방법이 있습니다.

// 오른쪽 -> 오른쪽 -> 아래
// 오른쪽 -> 아래 -> 오른쪽
// 아래 -> 오른쪽 -> 오른쪽

// [제한 사항]

// 말은 오른쪽이나 아래로만 이동할 수 있습니다.
// [입력 형식]

// 두 정수 h와 w는 1 이상 25 이하의 정수입니다.
// [출력 형식]

// 게임을 이기는 방법의 수를 int 형식으로 출력합니다.
function solution(h, w) {
  // h x w 크기의 배열에, 해당 지점까지 갈 수 있는 경우의 수를 저장
  const dp = new Array(h).fill(new Array(w).fill(1));

  // dp[i][j] 까지 갈 수 있는 경우의 수는,
  // dp[i][j]의 좌측과 상단까지 갈 수 있는 경우의 수를 더한 것과 같다.
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[h - 1][w - 1];
}

//bfs 보고 다시 풀기
