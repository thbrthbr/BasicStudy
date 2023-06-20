let cards = [14, 11, 2, 5];

function solution(cards) {
  let temp = [];
  sorted = cards.sort((x, y) => x - y);
  for (let i = sorted.length - 1; i > 0; i--) {
    temp.push(sorted[i] - sorted[i - 1]);
  }
  let min = Math.min.apply(null, temp);
  let count = sorted[0];
  for (let i = 0; i < sorted.length; i++) {
    if (count != sorted[i]) {
      return count;
    } else {
      count += min;
    }
  }
}

console.log(solution(cards));
