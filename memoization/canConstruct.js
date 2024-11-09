const canConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord === "") return true;

  if (targetWord in memo) {
    return memo[targetWord];
  }
  for (const word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        targetWord[memo] = true;
        return true;
      }
    }
  }
  memo[targetWord] = false;
  return false;
};
// memoization
// m = targetWord.length
// n = wordBank.length
// Time Complexity = O(n*m^2)
// Space Copmplexity = O(m^2)
console.log(canConstruct("potato", ["ato", "ta", "po", "to"]));
console.log(
  canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeee",
    "eeeeeee",
  ])
);
