function answer(nums) {
  let result = [];

  result.push(1 - nums[0]);
  result.push(1 - nums[1]);
  result.push(2 - nums[2]);
  result.push(2 - nums[3]);
  result.push(2 - nums[4]);
  result.push(8 - nums[5]);

  return result;
}

let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
