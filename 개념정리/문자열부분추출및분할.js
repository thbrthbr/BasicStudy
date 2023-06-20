let text = "undi panddi";

console.log(text.slice(0, 5)); //0~5"전"까지 즉 4까지
console.log(text);
console.log(text.slice(3, 5)); //3~5 전까지
console.log(text.slice(4)); //4"전"까지는 다 날림
console.log(text.slice(-4)); //뒤에서 4번째 "전"까지만 살림

console.log(text.slice(5, 0)); // 암것도 안나옴
console.log(text.substring(0, 5)); // 이거랑
console.log(text.substring(5, 0)); // 이거는 똑같이 나옴

console.log(text.substr(2, 6)); // 2번째부터 6글자만큼 출력(6번째 글자까지가 아니라 6글자만큼임)

result = text.split(" "); // " " 기준으로 나눠서 배열로 저장됨
console.log(result); // 배열채로 출력됨
console.log(result[0]); // 배열 첫번째 요소

result2 = text.split(""); // 한글자씩 나눠서 배열로 저장
console.log(result2);

result4 = text.split("", 3); // 3번째 전까지만 배열로 저장
console.log(result4);

let result5 = "  gg  ";
console.log(result5.trim()); // 문자열 양옆 공백을 없애준다
