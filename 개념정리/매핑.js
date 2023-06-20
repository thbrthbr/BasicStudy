let map = new Map();

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");

console.log(map);
console.log(map.get(123));
console.log(map.get("name"));
console.log(map.size);

map.clear();

console.log(map);

map.set("yonkou", "buggy").set("kaizokuou", "luffy");
console.log(map);
map.set("yonkou", "buggy").set("kaizokuou", "luffy").set(123, 567);
console.log(map);
map.set("yonkou", "shanks");
console.log(map);
map.delete(123);
console.log(map);

let hihi = new Map([
  ["apple", 50],
  ["grape", 100],
  ["banana", 120],
]);

for (let i of hihi.keys()) {
  console.log(i);
}
for (let v of hihi.values()) {
  console.log(v);
}
for (let i of hihi) {
  console.log(i);
}
console.log(hihi);
console.log(hihi.entries());

console.log(map.size);
console.log(map.length); // map은 size임 length 못씀

let array = [1, 2, 3];
console.log(array.size);
console.log(array.length); // 배열은 length를 쓴다
