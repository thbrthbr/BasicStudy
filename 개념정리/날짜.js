//생성자임

let date = new Date();
let date2 = Date(); // 이건 string으로 취급

console.log(date);
console.log(date2);

console.log(date2[0]);
console.log(date2[1]);

console.log(date2[35]);

let date3 = new Date(0); //1970년 기본 시간으로 뜸
console.log(date3);
let date4 = new Date(24 * 3600 * 1000); // 이렇게 하면 하루 지남
console.log(date4);

let date5 = new Date("2020-01-01"); //이런식으로 날짜설정 가능
console.log(date5);

let date6 = new Date(2021, 0, 1); // UTC 보정 안한 상태로 나옴
console.log(date6);

let date7 = new Date(Date.UTC(2021, 0, 1)); // 이러면 UTC 보정됨
console.log(date7); // 0월 ~ 11월로 봐야한다

let date8 = new Date(Date.UTC(2022, 6, 20));

console.log(date8.getFullYear());
console.log(date8.getMonth());
console.log(date8.getDay()); // 요일임 일요일 = 0 / 토요일 = 6
console.log(date8.getHours());
console.log(date8.getUTCHours());
console.log(date8.getTime());
console.log(date8.getTimezoneOffset()); // UTC 기준으로 얼마나 차이가 있는지 분 단위로 알려줌

//벤치마킹할 때도 쓴다

function dateSub(oldDate, newDate) {
  return newDate - oldDate;
}
function getTimes(oldDate, newDate) {
  return newDate.getTime() - oldDate.getTime();
}

// 두 함수의 성능을 비교

function benchmark(callback) {
  let date10 = new Date("2020-01-01");
  let date20 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback(date10, date20);
  }
  return Date.now() - start;
}

console.log(benchmark(dateSub));
console.log(benchmark(getTimes));
