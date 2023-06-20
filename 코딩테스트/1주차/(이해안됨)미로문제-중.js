// [문제 설명]
// 제로와 베이스는 코로나가 끝나 오랜만에 해외로 놀러가서, 그 지역 유명 관광명소인 미로에 갔습니다. 미로는 N개의 방이 존재했고, M개의 일방통행 할 수 있는 길이 존재했습니다.
// 방은 1번부터 시작하여 N번까지 번호가 붙여져 있고, 저희는 주어진 S위치에서 경로를 찾기 시작합니다. M개의 길은 각각의 방을 일방통행으로만 연결하고 있습니다.
// 다만, 제로와 베이스는 같은 출발지에서 시작하지만 서로 다른 경로로 미로를 탈출하고 싶었습니다.
// 도착지는 출발지를 제외한 1번부터 N번 사이의 임의의 지점이고, 저희가 아무 곳이나 선택해도 상관없습니다. 각각의 루트에서는 한번 지나온 지점을 다시 지나갈 수는 없고, 가장 짧은 경로를 찾지 않아도 됩니다. 또한, 출발지와 도착지를 제외하고서 제로가 지나갔던 방을 베이스가 지나갈 수 없고, 베이스가 지나갔던 방을 제로가 지날 수 없습니다.
// 이 때, 저희는 제로와 베이스가 갈 수 있는 서로 다른 두 경로를 찾아주어야 합니다. 찾을 수 있다면 “YES”를 찾을 수 없다면 “NO”를 반환해주세요.

// [제한 사항]
// - N은 2 이상 10000이하입니다.
// - M은 0 이상 10000 이하입니다.
// - S는 1이상 N이하입니다.

// [입력 형식]
// - 방의 개수 N과 방과 방 사이를 연결하는 일방통행로 M의 개수 그리고 출발지 S가 주어지고, 방을 연결하는 정보인 maps 배열이 주어집니다.
// [출력 형식]
// - 조건을 만족하는 서로 다른 두 경로를 찾을 수 있다면 “YES” 찾을 수 없다면 “NO”를 반환해주세요.
// 제한 시간: 30분
// 문제 유형: 그래프
// 난이도: 중

/**
 * @param {int} n
 * @param {int} m
 * @param {int} s
 * @param {array} maps
 * @return {string}
 */

let n = 5;
let m = 5;
let s = 1;
let maps = [
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 3],
  [3, 5],
];

function solution(n, m, s, maps) {
  s = s - 1;
  const edges = [];

  for (let idx = 0; idx < m; idx++) {
    const [u, v] = maps[idx];

    edges.push([u - 1, v - 1]);
  }

  console.log(edges);

  let map = new Map();
  const g = Array.from(
    {
      length: n,
    },
    () => []
  );

  console.log(g);

  for (let [u, v] of edges) {
    g[u].push(v);
  }
  console.log(g);

  for (let child of g[s]) {
    let tmp = new Map([[child, s]]);
    const queue = [child];

    for (let node of queue) {
      if (map.has(node)) {
        return "YES";
      }

      for (let c of g[node]) {
        if (c === s) continue;
        if (tmp.has(c)) continue;
        tmp.set(c, node);
        queue.push(c);
      }
    }

    for (let [child, node] of tmp) {
      map.set(child, node);
    }
  }

  return "NO";
}

console.log(solution(n, m, s, maps));

//그래프까지 봐야 이해 가능
