// [문제 설명]
//  도시의 아파트에서 버스 정류장까지 거리를 구하려고 합니다. 도시는 격자 모양의 지역으로 구분되어 있으며 아파트는 1로, 버스 정류장은 0으로 표시되어 있습니다. 아파트에서 버스 정류장으로 이동은 상하좌우로만 이동할 수 있으며, 대각선으로는 이동이 불가합니다.
//  h x w 크기의 도시가 주어질 때, 각 아파트에서 가장 가까운 버스 정류장까지의 거리를 구하는 함수, solution을 완성해주세요.

//  예를 들어, 3 x 3 크기의 도시[[1, 0, 1], [1, 1, 1], [1, 1, 1]]가 주어질 때, 각 아파트에서 가까운 버스 정류장까지의 거리를 나타내는 결과는 [[ 1, 0, 1 ], [ 2, 1, 2 ], [ 3, 2, 3 ]] 입니다.

// [제한 사항]
//  - 도시에서 이동은 상하좌우로만 이동할 수 있으며, 대각선으로는 이동할 수 없습니다.
//  - 도시에서 버스 정류장은 적어도 하나 이상 존재합니다.
//  - 도시에는 아파트와 버스 정류장만 존재합니다.

// [입력 형식]
//  - 도시의 정보 city가 주어집니다.
//  - city는 0과 1로 이루어진 h x w 크기의 2차원 배열입니다.
//  - 도시의 크기 h와 w는 1 이상 50 이하의 정수입니다.

// [출력 형식]
//  - 아파트에서 버스 정류장까지의 최단 거리를 출력합니다.
//  - 결과는 h x w 크기의 2차원 배열입니다.

let city = [
  [1, 1],
  [1, 1],
  [1, 0],
];

function solution(city) {
  const result = Array.from(Array(city.length), () =>
    Array(city[0].length).fill(0)
  );
  const busstop = [];

  //버스 정류장의 위치를 받아줌
  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city[0].length; j++) {
      if (city[i][j] === 0) {
        busstop.push([i, j]);
      }
    }
  }

  //정류장과 아파트 사이의 거리를 구해줌
  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city[0].length; j++) {
      if (city[i][j] === 1) {
        let distance = 10000;
        for (let k = 0; k < busstop.length; k++) {
          let tmp_distance =
            Math.abs(busstop[k][0] - i) + Math.abs(busstop[k][1] - j);
          distance = Math.min(tmp_distance, distance);
        }
        result[i][j] = distance;
      }
    }
  }

  return result;
}

// function solution(city) {
//   let temp = JSON.parse(JSON.stringify(city));
//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp[i].length; j++) {
//       let count = 1;
//       if (temp[i][j] == 1) {

//         // for (let a = 1; a < temp.length; a++) {
//         //   if (temp[i + a] != undefined) {
//         //     if (temp[i + a][j] == 0) {
//         //       temp[i][j] = count;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i][j + a] != undefined) {
//         //     if (temp[i][j + a] == 0) {
//         //       temp[i][j] = count;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i - a] != undefined) {
//         //     if (temp[i - a][j] == 0) {
//         //       temp[i][j] = count;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i][j - a] != undefined) {
//         //     if (temp[i][j - a] == 0) {
//         //       temp[i][j] = count;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i + a] != undefined) {
//         //     if (temp[i + a][j + a] == 0) {
//         //       temp[i][j] = count + 1;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i + a] != undefined) {
//         //     if (temp[i + a][j - a] == 0) {
//         //       temp[i][j] = count + 1;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i - a] != undefined) {
//         //     if (temp[i - a][j + a] == 0) {
//         //       temp[i][j] = count + 1;
//         //       break;
//         //     }
//         //   }
//         //   if (temp[i - a] != undefined) {
//         //     if (temp[i - a][j - a] == 0) {
//         //       temp[i][j] = count + 1;
//         //       break;
//         //     }
//         //   }
//         //   count++;
//         // }
//       }
//     }
//   }
//   return temp;
// }

// // function solution(city) {
// //   let temp = JSON.parse(JSON.stringify(city));
// //   for (let i = 0; i < temp.length; i++) {
// //     for (let j = 0; j < temp[i].length; j++) {
// //       if (temp[i][j] == 0) {
// //         if (temp[i + 1] != undefined) {
// //           temp[i + 1][j] = -1;
// //         }
// //         if (temp[i][j + 1] != undefined) {
// //           temp[i][j + 1] = -1;
// //         }
// //         if (temp[i - 1] != undefined) {
// //           temp[i - 1][j] = -1;
// //         }
// //         if (temp[i][j - 1] != undefined) {
// //           temp[i][j - 1] = -1;
// //         }
// //       }
// //     }
// //   }
// //   return temp;
// // }

console.log(solution(city));
