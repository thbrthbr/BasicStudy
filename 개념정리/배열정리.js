let arr_1 = new Array(10); // 선언방법 1
let arr_2 = []; // 선언방법 2

let array = [1, 2, 3, 4];

const [u, v, z] = array; // 선언방법 3 이렇게도 가능

console.log([u, v, z]);

console.log(arr_1);
console.log(arr_2);

let presidents = ["노무현", "김대중", "이명박"];

arr_2 = presidents;

console.log(arr_2);
console.log(arr_2[0]); // 이래도 된다

arr_2[0] = "문재인";

console.log(arr_2[0]);
console.log(presidents[0]); // 근데 시발 얘까지 바뀐다 <- 주소복사라서

arr_2 = JSON.parse(JSON.stringify(presidents)); // 이렇게 깊은복사로 해주면

arr_2[0] = "윤석열";

console.log(arr_2[0]); // 이거 바꿔도
console.log(presidents[0]); // 이건 안 바뀜

delete arr_2[1]; // delete 사용해서 두 번째꺼 삭제하면
console.log(arr_2); // <1 empty item> 이딴식으로 바뀐다 시발
// delete 쓰지않는다 그래서

console.log("-----------");

arr_2[1] = "김대중";

console.log(arr_2);
console.log(arr_2.splice(1)); // index 1번부터 쭉 출력하고 나머지껀 다 삭제함
console.log(arr_2);
arr_2 = JSON.parse(JSON.stringify(presidents));
console.log(arr_2);

//삭제@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(arr_2.splice(0, 1)); // 0번째부터 하나만 출력한다는 뜻
console.log(arr_2); // 이렇게하면 삭제할 거 삭제하고 남은거만 출력함
//splice로 해야 원래 배열에 영향을 줌

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(arr_2.splice(1, 1, "전두환", "박정희")); // 이렇게 하면 index 1번 요소 하나를 뒤에 쓴 2개로 바꿔줌
console.log(arr_2); // 확인은 이렇게

console.log(arr_2.concat(["박근혜", "김영삼"], "최규하")); // 이렇게 추가도 가능
console.log(arr_2); // 근데 바로 반영이 안된다
let arr_3 = [];
arr_3 = JSON.parse(
  JSON.stringify(arr_2.concat(["박근혜", "김영삼"], "최규하"))
);
console.log(arr_3); // 이렇게 해줌
console.log(arr_3.sort()); // 정렬시키기

console.log(arr_3.reverse()); // 역정렬
console.log(arr_3); // 바로 반영된다

// 근데 1 10 4 이렇게 있으면 1 10 4 순으로 정렬된다
// 이걸 해결시켜야함
// Orange apple 이렇게 있어도 대문자인 단어부터 출력된다
// 이걸 해결시켜야함

let num = [1, -1, 4, 0, 10, 20, 12];
let asc = function (x, y) {
  return x - y;
}; // 이런 함수를 만들어주고
let dsc = function (x, y) {
  return y - x;
}; // 동일하게 이런 함수를 만들어주고

console.log(num.sort(asc)); // 이렇게 해주면 제대로 정렬된다
console.log(num.sort(dsc)); // 역정렬도 동일

function asc2(x, y) {
  return x - y;
} // 함수는 이런식으로 만들어줘도됨
function dsc2(x, y) {
  return y - x;
} // 얘도 동일

console.log(num.sort(asc2)); // 이렇게 해줘도 됨
console.log(num.sort(dsc2)); // ㅇㅇ

let sites = ["DCinside", "naver", "kakao", "google", "daum"];

function AlphabetAsc(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();
  if (x > y) {
    return 1;
  } else if (y > x) {
    return -1;
  } else {
    return 0;
  }
} // 이런 함수를 만들어주면 된다

function AlphabetDsc(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();
  if (x < y) {
    return 1;
  } else if (y < x) {
    return -1;
  } else {
    return 0;
  }
} // 역정렬은 부호만 바꾸면 됨

console.log(sites.sort(AlphabetAsc)); // 이렇게 하면 대소문자 구분 없이 깔끔하게 정렬된다
console.log(sites.sort(AlphabetDsc)); // 역정렬도 잘됨

//근데 그냥 이 두 가지 경우들을 다 합쳐서 공용화 할 수도 있음

function ASC(x, y) {
  if (typeof x == "string") {
    x = x.toUpperCase();
  }
  if (typeof y == "string") {
    y = y.toUpperCase();
  }

  return x > y ? 1 : -1;
} // 이렇게 하면 전부 됨

function DSC(x, y) {
  if (typeof x == "string") {
    x = x.toUpperCase();
  }
  if (typeof y == "string") {
    y = y.toUpperCase();
  }

  return x < y ? 1 : -1;
} // 부호만 바꾸면 역정렬도 마찬가지

console.log(num.sort(ASC)); // 잘된다
console.log(num.sort(DSC)); // ㅇㅇ

console.log(sites.sort(ASC)); // 얘도 잘됨
console.log(sites.sort(DSC));

console.log(arr_3.join()); // 이러면 문자열로 변함 (바로 반영은 안된다)
console.log(arr_3.join(" ")); // 공백 가지면서 문자열로
console.log(arr_3.join(", ")); // 이런식으로 응용가능

let arr_4;
arr_4 = JSON.parse(JSON.stringify(arr_3.join(", ")));
console.log(arr_4); // 문자열임

let revive = arr_4.split(", "); // 이렇게 split해주면
console.log(revive); // 다시 배열로 부활한다

let array10 = [
  [1, 2, 3],
  [4, 5, 6],
];

array10[0].pop();
console.log(array10);
array10[0].push(9);
console.log(array10);
array10[0].shift();
console.log(array10);

let arr9 = ["ㄹㅇ", "ㅍㅌ"];
[arr9[0], arr9[1]] = [arr9[1], arr9[0]]; //swap하는 거임 자바스크립트에선 이런 식으로 swap이 가능함
console.log(arr9);

let people = [{ name: "bob", age: 17 }, { name: "joe", age: 23 }, { age: 20 }];

let somePeople = people.some(function (people) {
  return people.name == "bob"; // 한명이라도 이름이 bob인가
});

console.log(somePeople);

let somePeople2 = people.every(function (people) {
  return people.name == "bob"; // 모두 이름이 bob인가
});

console.log(somePeople2);

// Array()를 통한 배열 채우기 개념 몇가지

let temp3 = Array(10); // undefined가 10개 들어있는 배열

let temp2 = Array(10).fill(0); // 0이 10개 들어있는 배열

let temp = Array.from([1, 2, 3], () => Array(10).fill(0));
// Array.from(@@@@@@@, () => Array(10).fill(0));
// @@@@@@@ 자리에 배열이 들어가고 배열의 길이의 수 만큼 화살표 뒤의 배열을 만든다
// 즉 @@@@@@@이 길이 5의 배열이라면 화살표 뒤의 배열읠 5개 만큼 만든다

let temp4 = Array.from(city, () => Array(city[0].length).fill(0));
console.log(temp4);
