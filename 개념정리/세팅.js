let set = new Set();
let num = new Set([1, 2, 3, 4, 5]); // 대괄호 없이 저장됨
let str = new Set("우흥"); // "우" "흥" 으로 저장됨
let str2 = new Set("우흥흥"); // 중복된 거 저장이 안됨 우랑 흥 하나만 저장됨
console.log(set);
console.log(num);
console.log(str);
console.log(str2);

set.add(1).add(2).add(221);
console.log(set);
console.log(set.has(12));
console.log(set.has(1));
set.delete(1);
console.log(set);
console.log(set.delete(221)); // 이렇게 하면 true가 출력
console.log(set);
console.log(set.clear()); // 이렇게 하면 undefined가 출력
console.log(set);

for (let item of str) {
  console.log(item);
}
for (let item of str.keys()) {
  console.log(item);
}
for (let item of str.values()) {
  console.log(item);
}
for (let item of str.entries()) {
  // 얘만 결과가 다름
  console.log(item);
}

let num2 = new Set([1, 2, 3, 4, 5]);
const arr = Array.from(num2); //배열변환됨

let setting = new Set();

setting.add(1).add(2);

for (let item of setting) {
  console.log(item);
}
