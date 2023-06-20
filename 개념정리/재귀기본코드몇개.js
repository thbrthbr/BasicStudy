//순열 예제 - 재귀사용
let input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) {
  if (s == r) {
    //재귀함수를 멈춰야할 조건 (맨처음에 써둔다)
    count++;
    console.log(arr.join(" "));
    return;
  }
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap하는 거임 자바스크립트에선 이런 식으로 swap이 가능함

    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복구
  }
}

permutation(input, 0, 2);
console.log(count);

//조합예제 - 재귀사용

let input2 = [1, 2, 3, 4];
let output2 = [];
let count2 = 0;

function combination(arr, data, s, idx, r) {
  if (r == s) {
    count2++;
    console.log(data);
    return;
  }
  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(input2, output2, 0, 0, 2);
console.log(count2);

//등차수열 재귀
let result;
function recursive(s, t, number) {
  if (number == 1) {
    return s; //결국 s를 리턴해주는 건데 맨 안 쪽 재귀에서부터 s 값이 t와 더해져 점차 커지고 마지막까지 더해진 값이 리턴이 된다
  }
  return recursive(s, t, number - 1) + t;
}

result = recursive(3, 2, 5);
console.log(result);

//등비수열 재귀
let result4;
function recursive2(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive2(s, t, number - 1) * t;
}

result4 = recursive2(3, 2, 5);
console.log(result4);

//피보나치 재귀 (이전값과 이전전값을 더한 것이 현재값)
let result99;
function recursive3(number) {
  if (number == 1 || number == 0) {
    return number;
  }
  return recursive3(number - 1) + recursive3(number - 2);
}
result99 = recursive3(40);
console.log(result99);

//기본적으로 재귀는 깊숙히 쫙 값 없이 들어갔다가 나올 때 쫘자작 연쇄적으로 값들이 구해지고 구해지다가 최종적인 답 하나를 배출해내는 개념
