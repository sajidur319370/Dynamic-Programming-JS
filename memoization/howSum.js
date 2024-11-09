const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  if (targetSum in memo) {
    return memo[targetSum];
  }

  for (const num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, numbers, memo);
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};
// Memoized
// Time Complexity = O(n*m^2), n = targetSum
// Space Complexiity = O(m^2) , m = numbers array length

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(22, [15, 7]));
console.log(howSum(300, [15, 7]));
