const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= table.length; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        const oldCombination = table[i + num];
        if (i + num <= targetSum) {
          table[i + num] = [...table[i], num];
          if (oldCombination?.length < table[i + num]?.length) {
            table[i + num] = oldCombination;
          }
        }
      }
    }
  }
  return table[targetSum];
};
// tabulated
// Time Complexity = O(n^2*m), n = targetSum, m = numbers array length
// Space Complexiity = O(n^2)

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4, 7]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [15, 77, 62, 7]));
