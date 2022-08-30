let nums = [2, 3, 5, 7, 11, 13, 17];
let target = 7;

const twoSum = (nums, target) => {
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};
console.log(twoSum(nums, target));
