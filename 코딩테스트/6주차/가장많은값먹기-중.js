// [문제 설명]
//  n 층의 피라미드의 꼭대기에서 1층으로 내려와 탈출하려고 합니다. 피라미드에는 방이 있으며, n 층에는 1개의 방이 존재하고, n-1 층에는 2개의 방, n-2 층에는 3개의 방, 1층에는 n개의 방이 존재합니다.
//  각 방은 왼쪽 아래와 오른쪽 아래의 방으로 이동하는 계단이 있고, 각 방에는 j개의 보석이 존재합니다.
//  n 층의 피라미드 각 방에 존재하는 보석의 정보 arr가 주어질 때, 꼭대기 층에서 1층까지 내려오면서 모을 수 있는 보석의 최대 수를 구하는 함수, solution을 완성해주세요.

//  예를 들어, 3층의 피라미드 그림 (a) 인 각 방에 존재하는 보석의 정보 arr가 [ [3], [5, 10], [4, 8, 6] ]이 주어질 때, 피라미드를 탈출하며 모들 수 있는 보석의 최대 수는 그림 (b) 인 다음과 같습니다.
//  > 3 + 10 + 8 = 21

// [제한 사항]
//  - 계단은 올라갈 수 없고, 내려갈 수만 있습니다.

// [입력 형식]
//  - 피라미드의 층수 n은 1 이상 100 이하의 정수입니다.
//  - 각 방의 보석 수 j는 1 이상 1000 이하의 정수입니다.

// [출력 형식]
//  - 피라미드를 탈출하며 모을 수 있는 보석의 최대 수를 출력합니다.

function solution(arr) {
  const dp = [];

  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j >= 0; j--) {
      if (i === n - 1) {
        dp[i][j] = arr[i][j];
        continue;
      }

      dp[i][j] = arr[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
