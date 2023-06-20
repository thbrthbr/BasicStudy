// 우리나라의 화폐단위는 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 원으로 이루어져 있습니다.
// 거스름돈 금액 A원이 입력 되었을때 해당 거스름돈을 만족하는 최소한의 화폐 개수를 리턴하는 함수를 작성하세요.

// 입력
//  거스름돈 금액 A

// 출력
//  최소한의 화폐 개수

// 매개변수 : int A
// 리턴타입 : int

let A = 49000;

function solution(A) {
  let count = 0;
  if (A >= 50000) {
    while (A >= 50000) {
      A = A - 50000;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 10000) {
    while (A >= 10000) {
      A = A - 10000;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 5000) {
    while (A >= 5000) {
      A = A - 5000;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 1000) {
    while (A >= 1000) {
      A = A - 1000;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 500) {
    while (A >= 500) {
      A = A - 500;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 100) {
    while (A >= 100) {
      A = A - 100;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 50) {
    while (A >= 50) {
      A = A - 50;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 10) {
    while (A >= 10) {
      A = A - 10;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  if (A >= 5) {
    while (A >= 5) {
      A = A - 5;
      count++;
    }
  }

  console.log(A);
  console.log(count);

  return count + A;
}
console.log(solution(A));

//@@@@@@@@@@@@@@@@@@@@@@@@쉬운풀이
// function solution(A) {
//   var moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
//   var changes = 0;

//   for (var i = 0; i < moneys.length; i++) {
//     changes += parseInt(A / moneys[i]);
//     A %= moneys[i];
//   }

//   return changes;
// }
