const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  } else {
    r = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = r;
  }
  return memo[n];
};
// Memoized
// Time Complexity:O(n), n th fibonacci
// Space Complexity:O(n)
console.log(fib(5));
