const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) {
    return memo[key];
  }
  if (m == 1 && n == 1) {
    return 1;
  } else if (m == 0 || n == 0) {
    return 0;
  } else {
    r = gridTraveler(m, n - 1, memo) + gridTraveler(m - 1, n, memo);
    memo[key] = r;
  }
  return memo[key];
};
// Memoized
// Time Complexity:O(n) , n = row
// Space Complexity:O(m+n) = O(n) , m = col
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(4, 4));
console.log(gridTraveler(18, 18));
