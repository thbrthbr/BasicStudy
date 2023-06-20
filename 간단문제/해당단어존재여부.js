function answer(str) {
  let spam;

  str = str.toLowerCase();
  spam = str.including("advert"); //including 주의

  return spam; // true or false로 출력
}
