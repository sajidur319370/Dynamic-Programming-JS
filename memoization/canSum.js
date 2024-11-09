const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum <= 0) return false;
  if (targetSum in memo) {
    return memo[targetSum];
  }
  for (const num of numbers) {
    const reminder = targetSum - num;
    if (canSum(reminder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
// Memoized
// Time Complexity:O(m*n) = O(n^2) , n = target Sum
// Space Complexity: O(m+n) = O(n), m = numbers array length
console.log(canSum(7, [3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(8, [1, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
console.log(canSum(300, [7, 15]));
