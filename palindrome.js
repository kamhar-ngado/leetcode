const isPalindrome = (x) => {
  let nums = x;

  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10); //1
    x = Math.floor(x / 10); //122
  }
  return reversed == nums;
};
console.log(isPalindrome(1221));
