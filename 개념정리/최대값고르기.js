function answer(arr) {
  //arr은 배열
  let max;
  max = Math.max.apply(null, arr);

  return max;
}
