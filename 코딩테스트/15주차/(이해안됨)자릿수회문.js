// [문제 설명]
// 팰린드롬은 거꾸로 읽어도 똑바로 읽은 것과 동일한 단어나 문장을 말합니다.
// 이 개념을 숫자에 적용하면 4, 2002, 1234321 등이 팰린드롬에 속합니다.

// 숫자의 자릿수 n이 주어질 때, 팰린드롬인 n자리 숫자의 개수를 출력하는 함수, solution을 완성해주세요.
// 결과값이 매우 클 수 있으니 1,000,000,007로 나눈 나머지 값을 출력해주세요.

// [제한사항]
// - 무의미한 leading zero는 허용하지 않는 것으로 생각합니다.
//   - 예를 들어 121은 3자리 팰린드롬 수지만, 01210은 5자리 팰린드롬 수가 아닙니다.

// [입력 형식]
// - n은 1 이상 10,000 이하의 정수입니다.

// [출력 형식]
// - 팰린드롬인 n자리 숫자의 개수를 1,000,00,007로 나눈 나머지 값을 출력합니다.

let n = 1;

// function solution(n) {
//   // let count = 0;
//   // for (let i = 10 ** n - (10 ** n - 10 ** (n - 1)); i < 10 ** n; i++) {
//   //   let string = i.toString();
//   //   let temp = string + string;
//   //   let temp2 = string.split("");
//   //   temp2 = temp2.reverse();
//   //   temp2 = temp2.join("");

//   //   if (temp2 != string) {
//   //     continue;
//   //   }
//   //   if (temp.includes(temp2)) {
//   //     count++;
//   //     count = count % 1000000007;
//   //   }
//   // }
//   // return count;
//   let count = 0;
//   for (let i = 0; i < 9 * 10 ** (Math.ceil(n / 2) - 1); i++) {
//     count++;
//     count = count % 1000000007;
//   }
//   return count;
// }

function solution(n) {
  if (n == 1) {
    return 10;
  }

  let ans = 1;

  for (let i = 0; i < n; i += 2) {
    ans = ans * (i == 0 ? 9 : 10);
    ans %= 1_000_000_007;
  }

  return ans;
}

console.log(solution(n));
