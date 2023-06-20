// function solution(v) {
//   var answer = [[]];

//   let temp = [];
//   let temp2 = [];

//   let x = 0;
//   let y = 0;

//   let finalx = 0;
//   let finaly = 0;

//   for (let i = 0; i < v.length; i++) {
//     temp.push(v[i][0]);
//   }

//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp.length; j++) {
//       if (i != j) {
//         if (temp[i] == temp[j]) {
//           x = temp[i];
//           break;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < v.length; i++) {
//     temp2.push(v[i][1]);
//   }

//   for (let i = 0; i < temp2.length; i++) {
//     for (let j = 0; j < temp2.length; j++) {
//       if (i != j) {
//         if (temp2[i] == temp2[j]) {
//           y = temp2[i];
//           break;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] != x) {
//       finalx = temp[i];
//     }
//   }

//   for (let i = 0; i < temp2.length; i++) {
//     if (temp2[i] != y) {
//       finaly = temp2[i];
//     }
//   }

//   answer.push(finalx);
//   answer.push(finaly);

//   return answer;
// }

n = 9;

function makeStar(n) {
  let save = n;
  let temp = [];
  while (n > 0) {
    let sum = "";
    for (let i = 0; i < n; i++) {
      sum += "*";
    }
    temp.push(sum);
    n--;
  }
  let reverse = temp.reverse();
  for (let i = 0; i < save; i++) {
    console.log(reverse[i]);
  }
  return reverse;
}

makeStar(n);
