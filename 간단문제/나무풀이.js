let arr = [3, 7, 9];

let height = 9;

// 내가 푼 풀이

function solution(arr) {
  let string3 = "";
  for (let b = 0; b < arr.length; b++) {
    let temp = [];
    let string = "";
    let string2 = "*";
    for (let j = 0; j < arr[b]; j++) {
      if (j > 0) {
        string += " ";
      }
      temp.unshift(string);
    }
    for (let a = 0; a < arr[b]; a++) {
      if (a > 0) {
        string2 += "**";
      }
      temp.splice(a, 1, temp[a] + string2);
    }
    for (let i = 0; i < temp.length; i++) {
      string3 = string3 + temp[i] + "\n";
    }
  }
  return string3;
}

console.log(solution(arr));

// 모범풀이

// function solution2(height) {
//   let str = "\n";
//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < height - i - 1; j++) {
//       str += " ";
//     }
//     for (let j = 0; j < i * 2 + 1; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }

//   return str;
// }

// console.log(solution2(height));
