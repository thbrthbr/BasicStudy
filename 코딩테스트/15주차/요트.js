// [문제 설명]
//  Yacht는 플레이어가 번갈아가면서 각자 5개의 주사위를 굴려서 족보에 해당하는 주사위 눈의 조합을 만들어 점수를 얻고, 가장 높은 점수를 얻는 플레이어가 승리하는 게임입니다.

//  Yacht의 족보는 다음과 같습니다.
//  각각 족보 이름 / 조건 / 획득 점수 / 예시를 의미합니다.

//  Yacht / 5개 모두 동일한 눈인 경우 / 50점 / 예: 3 3 3 3 3
//  Four-Of-A-Kind / 4개 이상의 동일한 눈인 경우 / 눈의 합 / 예: 5 5 5 5 1
//  Full House / 각각 동일한 눈 3개, 2개로 나눠지는 경우 / 눈의 합 / 예: 4 4 4 3 3
//  Large Straight / 눈의 숫자 5개가 이어지는 경우 / 30점 / 예: 2 3 4 5 6
//  Small Straight / 눈의 숫자 4개 이상 이어지는 경우 / 15점 / 예: 1 2 3 4 6

//  Aces / 모든 조합에서 가능 / 1이 나온 눈의 총합 / 예: 1 1 1 2 3 -> 3점
//  Deuces / 모든 조합에서 가능 / 2가 나온 눈의 총합 / 예: 1 2 2 3 4 -> 4점
//  Thress / 모든 조합에서 가능 / 3이 나온 눈의 총합 / 예: 3 3 3 3 6 -> 12점
//  Fours / 모든 조합에서 가능 / 4가 나온 눈의 총합 / 예: 1 1 2 3 4 -> 4점
//  Fives / 모든 조합에서 가능 / 5가 나온 눈의 총합 / 예: 4 5 5 5 6 -> 15점
//  Sixes / 모든 조합에서 가능 / 6이 나온 눈의 총합 / 예: 1 2 6 6 6 -> 18점

//  5개의 주사위 눈이 주어질 때 해당 조합으로 얻을 수 있는 최대 점수를 출력하는 함수, solution을 완성해 주세요.

// [입력 형식]
//  - arr은 길이가 5인 배열입니다.
//  - arr은 1 이상 6 이하의 정수로 구성됩니다.

// [출력 형식]
//  - 해당 조합으로 얻을 수 있는 최대 점수를 출력합니다.

// function solution(arr) {
//   arr.sort();
//   let set = new Set(arr);
//   let arr2 = Array.from(set);
//   if (arr2.length == 1) {
//     return 50;
//   }
//   if (arr2.length == 2) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
//   let small = 0;
//   let large = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] == arr[i] + 1) {
//       count++;
//     }
//     if (count == 3) {
//       small = 1;
//     }
//     if (count == 4) {
//       large == 1;
//     }
//   }
//   if (small == 1 && large == 1) {
//     return 30;
//   }
//   if (small == 1) {
//     return 15;
//   }
//   // 1 1 2 2 3
//   // 3 3 3 4 4
//   // 1 1 2 3 5
//   if (arr2.length == 3) {
//     let sum = arr[0];
//     let place = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] != arr[i + 1]) {
//         sum += arr[i];
//       }

//       if (arr[i] < 3 && arr[i] != arr[i + 1]) {
//         sum = arr[i];
//       }
//     }
//     return sum;
//   }
//   if (arr2.length == 4) {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!temp.includes(arr[i])) {
//         temp.push(arr[i]);
//       } else {
//         let max = Math.max.apply(null, temp);
//         if (arr[i] * 2 > max) {
//           return arr[i] * 2;
//         } else {
//           return max;
//         }
//       }
//     }
//     return max * 2;
//   }
// }

// function solution(arr) {
//   let checker = new Checker(arr);
//   return checker.getMaxScore();
// }

// class Checker {
//   constructor(arr) {
//     this.arr = arr;
//     this.sum_arr = arr.reduce((acc, it) => acc + it, 0);
//     this.sorted_arr = arr;
//     this.sorted_arr = [...arr].sort((a, b) => a - b);

//     this.diff = [];

//     for (let i = 1; i < 5; i++) {
//       this.diff.push(this.sorted_arr[i] - this.sorted_arr[i - 1]);
//     }

//     this.counts = [0, 0, 0, 0, 0, 0];
//     this.arr.forEach((it) => {
//       this.counts[it - 1]++;
//     });
//     this.sorted_counts = [...this.counts].sort((a, b) => a - b);
//   }

//   checkYacht() {
//     if (this.counts.find((it) => it === 5) != undefined) {
//       return 50;
//     }

//     return 0;
//   }

//   check4Kind() {
//     if (this.sorted_counts[this.sorted_counts.length - 1] >= 4) {
//       return this.sum_arr;
//     }

//     return 0;
//   }

//   checkFullHouse() {
//     if (
//       this.sorted_arr[0] === this.sorted_arr[1] &&
//       this.sorted_arr[2] === this.sorted_arr[4]
//     ) {
//       return this.sum_arr;
//     } else if (
//       this.sorted_arr[0] === this.sorted_arr[2] &&
//       this.sorted_arr[3] === this.sorted_arr[4]
//     ) {
//       return this.sum_arr;
//     }

//     return 0;
//   }

//   checkLStraight() {
//     if (this.diff.every((it) => it === 1)) {
//       return 30;
//     }

//     return 0;
//   }

//   checkSStraight() {
//     if (this.diff.slice(0, 3).every((it) => it === 1)) {
//       return 15;
//     } else if (this.diff.slice(1, 4).every((it) => it === 1)) {
//       return 15;
//     }

//     return 0;
//   }

//   checkOthers() {
//     let score = 0;
//     for (let i = 1; i <= 6; i++) {
//       score = Math.max(score, i * this.counts[i - 1]);
//     }

//     return score;
//   }

//   getMaxScore() {
//     return [
//       this.checkYacht(),
//       this.check4Kind(),
//       this.checkFullHouse(),
//       this.checkLStraight(),
//       this.checkSStraight(),
//       this.checkOthers(),
//     ].reduce((acc, it) => Math.max(acc, it), 0);
//   }
// }
