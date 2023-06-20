// [문제 설명]

// SNS 서비스에는 보통 친구 추천 기능이 존재합니다.
// 친구 추천 기능을 구현하는 방법에는 여러가지 방식이 있는데, 가장 간단한 방법 중 하나가 친구의 친구를 추천하는 방식입니다.
// 즉, 아직 나와 친구가 아닌 사람들 중에서, 나의 친구 중 1명 이상과 친구인 사람을 추천하는 것입니다.

// 임의의 인원 수 N과 그 N명 사이의 친구 관계가 주어질 때, 위에서 설명한 것과 친구 추천 기능으로 각 사람들이 몇명을 추천받는지 계산하는 함수, solution을 완성해주세요.

// [입력 형식]
// - n은 3 이상 10 이하의 정수입니다.
// - graph는 0과 1로 이루어진 n * n 크기의 2차원 배열입니다.
// - graph[i][j] 가 1이면 i번 사람과 j번 사람이 서로 친구임을 나타내고, 0이면 친구가 아님을 나타냅니다.
// - graph[i][i] 는 항상 0 입니다.
// - 가능한 모든 (i, j) 쌍에 대해서 graph[i][j] == graph[j][i] 를 만족합니다.

// [출력 형식]
// - i번 index에 i번 사람이 추천 받는 사람 수를 담은 1차원 배열을 출력합니다.

function solution(n, graph) {
  return new Array(n).fill(0).map((_, idx) => bfs(n, idx, graph));
}

function bfs(n, start, graph) {
  let que = [];
  let que_front = 0;

  let dist = new Array(n).fill(-1);

  que.push(start);
  dist[start] = 0;

  while (que_front < que.length) {
    let here = que[que_front];
    que_front += 1;

    for (let i = 0; i < n; i++) {
      if (graph[here][i] === 0 || dist[i] !== -1) {
        continue;
      }

      dist[i] = dist[here] + 1;

      if (dist[i] < 2) {
        que.push(i);
      }
    }
  }

  return dist.filter((it) => it === 2).length;
}

console.log(
  solution(10, [
    [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  ])
);

//그래프까지 봐야 이해 가능
