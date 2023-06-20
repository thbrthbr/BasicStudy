let text = "응디빵디";
let text2 = "undi pandDi";

let change = text.replace("응디", "운지");

console.log(change);
console.log(text.replace("디", "지")); //첫 디만 지로 바꿈
console.log(text.replace(/디/g, "지")); // 디를 전부 지로 바꿈
console.log(text2.replace("d", "z")); //첫 d만 z로
console.log(text2.replace(/d/g, "z")); //소문자 d만 z로
console.log(text2.replace(/d/gi, "z")); // 모든 d를 z로
