function answer(nums) {
  let result = [];
  let max;
  max = Math.max.apply(null, nums);
  result.push(max);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == max) {
      nums.splice(i, 1);
    }
  }
  let max2;
  max2 = Math.max.apply(null, nums);
  result.push(max2);
  return result;
}

let input = [
  [-11, 5, 18, -2, -3, 6, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
