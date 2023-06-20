// 좀비게임은 1명의 좀비와 N명의 사람이 진행하는 게임입니다.
// 게임 플레이 시간동안 각 참여자는 다른 참여자와 악수를 할 수 있습니다.

// 이때 좀비와 악수를한 플레이어는 좀비로 변하게 됩니다.

// 정해진 시간동안 악수를 다수의 참여자와 진행하며 시간이 끝난후 좀비가 아닌 플레이어 중에 악수를 가장 많이한 플레이어가 우승합니다.
// 만약 모든 플레이어가 좀비가 되었다면 좀비 플레이어가 우승합니다.

// 배열 A에는 참여자의 악수 정보가 들어있고 문자열 S에는 좀비 플레이어 정보가 제공되었을때 해당 라운드의 우승자를 찾는 함수를 작성하세요.
// 또한 악수 횟수가 동일한 경우 공동 우승으로 처리되며 오름차순으로 정렬하여 리턴하세요.
// 배열 A에 존재하는 순서는 터치 시간순서 이며 모든 플레이어는 1회 이상 악수를 진행합니다.

// [입력]
// 참여자끼리의 악수 정보가 들어있는 2차원 배열 A
// 좀비 유저 문자열 S

// [출력]
// 우승자 목록 배열

let A = [
  ["A", "B"],
  ["B", "C"],
];
let S = "B";

function solution(A, S) {
  let temp = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      temp.push(A[i][j]);
    }
  }
  let set = new Set(temp);
  set = Array.from(set);
  //   console.log(set.sort());
  set = set.sort();
  let pack = {};
  for (let i = 0; i < set.length; i++) {
    pack[set[i]] = 0;
  }
  let infected = [];
  for (let i = 0; i < A.length; i++) {
    if (!A[i].includes(S)) {
      //1차 좀비와 악수를 하지 않은 경우
      if (infected.includes(A[i][0]) || infected.includes(A[i][1])) {
        //2차 좀비와 악수를 한 경우
        pack[S] += 1;
        for (let a in pack) {
          if (a != S && (a == A[i][0] || a == A[i][1])) {
            {
              if (pack[a] != 0) {
                pack[a] = 0;
              }
            }
          }
        }
      } else {
        //좀비와 악수를 하지 않은 경우
        for (let a in pack) {
          if (A[i][0] == a) {
            pack[a] += 1;
          }
          if (A[i][1] == a) {
            pack[a] += 1;
          }
        }
      }
    } else {
      //1차 좀비와 악수를 한 경우
      if (A[i][0] != S) {
        infected.push(A[i][0]);
      }
      if (A[i][1] != S) {
        infected.push(A[i][1]);
      }
      for (let a in pack) {
        if (a != S && (a == A[i][0] || a == A[i][1])) {
          {
            if (pack[a] != 0) {
              pack[a] = 0;
            }
          }
        }
      }
      pack[S] += 1;
    }
  }

  //   console.log(pack);

  for (let i in pack) {
    if (i != S) {
      if (pack[i] > 0) {
        let count = -1;
        let winner = [];
        winner.push(-1);
        for (let i in pack) {
          if (i != S) {
            if (count < pack[i]) {
              winner = [];
              winner.push(i);
              count = pack[i];
            } else if (count == pack[i]) {
              winner.push(i);
            }
          }
        }

        return winner.sort();
      }
    }
  }

  return [S];
}

console.log(solution(A, S));
