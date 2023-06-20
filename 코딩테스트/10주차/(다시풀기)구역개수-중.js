// [문제 설명]

// 1과 0으로 이루어진 2차원 배열이 주어지면, 1으로 연결되어 있는 부분을 찾아야 합니다.

// 상하좌우가 모두 0으로 이루어져 있다면, 분리되어 있는 곳으로 판단할 수 있습니다.

// 1으로 이루어진 구역의 개수를 측정해서 반환해주세요.

// 예를 들어,

// grid = [
//   ["1", "1" ,"0" ,"0" ,"0" ],
//   [ "1", "1","0", "0", "0" ],
//   [ "0", "0", "1", "0", "0" ],
//   [ "0", "0", "0", "1", "1" ]
// ]

// 와 같은 배열이 주어진다면, 1로 구분되는 3개의 구역이 존재하는 것입니다.

// 고로 3을 결과값으로 반환해주시면 됩니다.

// [제한 사항]

// - array의 크기는 1 * 1 이상 300 * 300 이하입니다.

// - array 안에는 항상 0 또는 1이 포함되어 있습니다.

// [입력 형식]

// - 2차원 배열 grid가 주어집니다.

// [출력 형식]

// - 1으로 구분되는 구역의 개수를 세서 반환해주세요.

//

// function solution(grid) {
//   let map_re = grid;
//   var visited = [];
//   for (var i = 0; i < map_re.length; i++) {
//     visited[i] = new Array();
//     for (var j = 0; j < map_re[0].length; j++) {
//       visited[i].push(0);
//     }
//   }
//   var X = 0;
//   var Y = 0;
//   var cnt1 = 0;
//   function DFS(X, Y) {
//     visited[Y][X] = 1;
//     var dx = [0, 0, 1, -1];
//     var dy = [1, -1, 0, 0];
//     for (var i = 0; i < 4; i++) {
//       var nx = X + dx[i];
//       var ny = Y + dy[i];
//       if (nx >= 0 && nx < map_re[0].length && ny >= 0 && ny < map_re.length) {
//         if (map_re[ny][nx] === "1" && visited[ny][nx] === 0) DFS(nx, ny);
//       }
//     }
//   }
//   for (var i = 0; i < map_re.length; i++) {
//     for (var j = 0; j < map_re[0].length; j++) {
//       if (visited[i][j] === 0 && map_re[i][j] === "1") {
//         DFS(j, i);
//         cnt1++;
//       }
//     }
//   }
//   return cnt1;
// }
