//매쓰는 생성자가 아님

console.log(Math.max(1, -1)); // 둘 중 큰 거
console.log(Math.min(1, -1)); // 둘 중 작은 거

console.log(Math.max(1, -1, 2, 6, 54)); // 젤 큰 거
console.log(Math.min(0, 1, -1)); // 젤 작은 거

console.log("Max: " + Math.max(1, -1));

console.log(Math.abs(-92191)); // 절댓값

let array = [1, 2, 3, 4, 6];
console.log(Math.max(array)); // 이러면 NaN뜸
console.log(Math.max.apply(null, array)); // 이래야 배열의 최댓값 뜸
console.log(Math.max(...array)); // 이래도 됨 이게 더 쉽다

console.log(Math.E); // 자연로그의 밑 값 오일러 상수
console.log(Math.PI); // 파이 값

for (let i = 0; i < 10; i++) {
  // 0에서 1사이의 난수 출력
  console.log(Math.random());
}

for (let i = 0; i < 10; i++) {
  // 이런식으로 응용 가능 -> 0 에서 9 사이의 자연수
  console.log(Number.parseInt(Math.random() * 10));
}

console.log(Math.pow(2, 3)); // 제곱
console.log(2 ** 3); // 제곱

console.log(Math.sqrt(9)); // 제곱근

console.log(Math.round(4.5)); //반올림
console.log(Math.ceil(9.1)); // 올림
console.log(Math.floor(20.6)); // 내림
