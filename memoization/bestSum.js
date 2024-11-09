const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) {
    return memo[targetSum];
  }
  let shortestCombination = null;
  for (const num of numbers) {
    const reminder = targetSum - num;
    const reminderCombination = bestSum(reminder, numbers, memo);
    if (reminderCombination != null) {
      const combination = [...reminderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
// Memoized
// Time Complexity = O(n*m^2), n = targetSum
// Space Complexiity = O(m*n) , m = numbers array length

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(22, [15, 7]));
console.log(bestSum(300, [5, 7, 9, 15, 18]));
