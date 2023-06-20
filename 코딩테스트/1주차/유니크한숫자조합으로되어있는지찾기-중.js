// [문제 설명]
//  숫자 배열 arr가 주어집니다. arr에서 중복된 숫자의 개수가 유니크한지를 구하는 함수, solution을 완성해주세요.

//  예를 들어, arr [1, 3, 5, 4, 3, 1, 1] 의 경우
//  > 1은 3개가 존재하며,
//  > 3은 2개가 존재하며,
//  > 4는 1개가 존재하며,
//  > 5는 1개가 존재하므로
//  숫자 4와 5의 중복된 숫자의 개수가 유니크하지 않으므로 결과는 false 입니다.

// [입력 형식]
//  - arr는 길이가 1 이상 100 이하의 배열입니다.
//  - arr의 요소는 1 이상 10 이하의 정수입니다.

// [출력 형식]
//  - 중복된 숫자의 개수가 유니크한지를 구합니다.

// /**
//  * @param arr {number[]}
//  * @return {boolean}
//  */

let arr = [1, 3, 5, 4, 3, 1];

function solution(arr) {
  const map = new Map();

  arr.forEach((num) => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
    // map.get(num)했을 때 true가 뜬다면 map.get(num)+1로 세팅 false가 뜬다면 그냥 1을 세팅
  });

  const set = new Set(map.values());
  return set.size === map.size;
}

console.log(solution(arr));

// 난 이렇게 풀었다
// function solution(arr) {
//   var answer = true;
//   let count = 0;
//   let arr2 = JSON.parse(JSON.stringify(arr));
//   let temp = [];

//   while (arr2.length > 0) {
//     let imsi = 0;
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr2[imsi] == arr2[i]) {
//         count++;
//       }
//     }

//     let arr3 = arr2.filter((a) => a != arr2[imsi]);
//     arr2 = JSON.parse(JSON.stringify(arr3));
//     temp.push(count);
//     count = 0;
//   }
//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp.length; j++) {
//       if (i != j) {
//         if (temp[i] == temp[j]) {
//           return false;
//         }
//       }
//     }
//   }
//   return answer;
// }

// export default solution;
