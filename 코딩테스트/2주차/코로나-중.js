// [문제 설명]
//  코로나로 인해 건물에 출입하는 인원의 시간을 체크하고 있습니다. 출입 기록인 history에는 출입한 사람의 번호 배열이 저장되어 있습니다.
//  history에는 건물에 들어올 때에는 양수가, 나갈 때에는 음수가 기록됩니다.
//  이때, 확진자 번호 infected가 주어질 때, 확진자와 동선이 겹치는 사람의 번호를 오름차순으로 출력하는 함수, solution을 완성해주세요.

//  예를 들어, history가 [3, 2, -3, 1, -1, -2, 4, -4, 1, -1]이고, infected가 2로 주어질 때, 확진자와 동선이 겹치는 사람은 [1, 3]입니다.

// [제한 사항]
//  - 사람은 건물을 여러 번 출입할 수 있습니다.
//  - 주어지는 history에는 건물에 남아있는 사람이 없습니다.

// [입력 형식]
//  - 출입 기록인 history가 주어집니다.
//  - history는 1 이상 100 이하의 정수로 이루어진 길이가 1000 이하의 배열입니다.
//  - 확진자 번호인 infected가 주어집니다.
//  - infected는 1 이상 100 이하의 정수입니다.

// [출력 형식]
//  - 확진자와 동선이 겹치는 사람의 번호를 오름차순 배열로 출력합니다.

let history = [
  18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16, -17,
  -16, 3, 9, 19, -7, -15, 20, 10, -14, -10, -18, -2, -19, 8, -9, -8, 4, -20, -4,
  -12, -3, 1, -1,
];

let infected = 16;

function solution(history, infected) {
  let temp3 = [];
  let temp2 = [];
  let visit = 0;
  for (let i = 0; i < history.length; i++) {
    if (history[i] == infected) {
      let j = visit;
      let temp = [];
      while (history[j] != infected * -1) {
        if (j < i) {
          if (temp.includes(-1 * history[j]) && history[j] < 0) {
            temp = temp.filter((element) => element !== -1 * history[j]);
          } else {
            temp.push(history[j]);
          }
        } else {
          temp.push(history[j]);
        }
        j++;
      }
      for (let b = 0; b < temp.length; b++) {
        if (temp[b] != infected) {
          temp3.push(temp[b]);
        }
      }
      visit = j + 1;
    }
  }
  //   console.log(temp3);
  for (let i = 0; i < temp3.length; i++) {
    if (temp3[i] < 0) {
      temp2.push(temp3[i] * -1);
    } else {
      temp2.push(temp3[i]);
    }
  }
  let num = new Set(temp2);

  let arr = Array.from(num);

  let asc = function (x, y) {
    return x - y;
  };
  let final = arr.sort(asc);
  //   console.log(final);
  return final;
}

console.log(solution(history, infected));
