// let user = { name: "john", age: 27 };
// let admin = { ...user };

// const day = 3;
// let weekend = "";

// switch (day) {
//   case 1:
//     weekend = "월요일";
//     break;
//   case 2:
//     weekend = "화요일";
//     break;
//   case 3:
//     weekend = "수요일";
//     break;
//   case 4:
//     weekend = "목요일";
//     break;
//   case 5:
//     weekend = "금요일";
//     break;
//   case 6:
//     weekend = "토요일";
//     break;
//   case 7:
//     weekend = "일요일";
//     break;
// }

// console.log(weekend);

// let language = "Hello";
// let text = "";

// for (let x of language) {
//   text += x;
// }

// console.log(text);

//

// function recursive(num) {
//   if (num == 0) {
//     return 0;
//   }
//   return num + recursive(num - 1);
// }

// console.log(recursive(2)); // 2 + 1

// function factorial(x) {
//   if (x == 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }

// const num = 9;
// console.log("The factorial of " + num + " is " + factorial(num));

// let a = 1;
// function add(key) {
//   key = key + 1;
// }
// add(a);
// console.log(a);

// let b = { v: 1 };
// function add(key) {
//   key.v = key.v + 1;
// }
// add(b);
// console.log(b.v);

// let user = { name: "john" };
// let admin = { name: "admin" };

// function hello_func() {
//   console.log("hello" + this.name);
// }

// function hello_func2() {
//   console.log("hello2 " + this.name);
// }

// user.func = hello_func; // 이렇게 설정해주면 아래부터 user.func() 혹은 user["func"]() 식으로 사용가능
// admin.func2 = hello_func2;

// user.func();
// admin["func2"]();

// let us = 9123e-6;
// console.log(us);

// let num = 213.2323;
// console.log(num.toPrecision(4));
// console.log(num.toFixed(4));

// let gt = "hi\ngg";
// console.log(gt);

// let str = "hi my friend";
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));
// console.log(str.charCodeAt(3));
