const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= table.length; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        if (i + num <= targetSum) {
          table[i + num] = true;
        }
      }
    }
  }
  return table[targetSum];
};

// tabulated
// Time complexity = O(m*n), m = targetSum , n = numbers of length
// Space complexity = O(m)
console.log(canSum(7, [3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(12, [3, 4, 5]));
console.log(canSum(8, [1, 3, 4]));
console.log(canSum(300, [7, 14]));
console.log(canSum(300, [7, 15]));
