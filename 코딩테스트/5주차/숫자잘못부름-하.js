// [문제 설명]
// 선생님이 조회 시간에 출석부를 부르고 있습니다.
// 학생들의 번호를 다 호명하고 결석한 학생들을 알아내고 있습니다.
// 선생님은 헷갈려서 몇 명의 번호를 다른 번호로 호명했습니다.
// 이때, 선생님이 잘못 호명한 학생들의 원래 번호를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, 선생님이 호명한 학생들의 번호 배열 nums가 [1, 2, 3, 4, 6, 6, 6] 있을 때 잘못 호명한 학생들의 원래 번호는 [5, 7]입니다.

// [제한 사항]

// 한 반의 학생들은 최대 100명입니다.
// 선생님이 잘못 호명한 학생들의 원래 번호를 출력하므로, 출력되는 학생들의 번호는 배열의 길이를 넘을 수 없습니다.
// [입력 형식]

// nums는 선생님이 호명한 학생들의 번호 배열입니다.
// [출력 형식]

// 선생님이 잘못 호명한 학생들의 원래 번호 배열을 출력합니다.

let arr = [1, 2, 3, 4, 5, 6, 6, 6];

function solution(arr) {
  let temp = [];
  for (let i = 1; i < arr.length + 1; i++) {
    temp.push(i);
  }

  let num2 = new Set(arr);
  const arr2 = Array.from(num2);

  let temp3 = [];

  for (let i = 1; i < temp.length + 1; i++) {
    if (!arr2.includes(i)) {
      temp3.push(i);
    }
  }

  return temp3;
}

console.log(solution(arr));
