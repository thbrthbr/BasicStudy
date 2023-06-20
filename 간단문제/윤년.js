function answer(year) {
  let result;
  if (year % 4 == 0 && year % 100 != 0) {
    result = true;
  } else if (year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
