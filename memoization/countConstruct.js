const countConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord === "") return 1;

  if (targetWord in memo) {
    return memo[targetWord];
  }
  let totalCount = 0;
  for (const word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[targetWord] = totalCount;
  return totalCount;
};
// memoization
// m = targetWord.length
// n = wordBank.length
// Time Complexity = O(n*m^2)
// Space Copmplexity = O(m^2)
console.log(countConstruct("potato", ["ato", "ta", "po", "pot", "to"]));
console.log(
  countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  countConstruct("skatboard", [
    "bo",
    "rd",
    "ate",
    "sk",
    "ska",
    "a",
    "boar",
    "d",
    "t",
  ])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeee",
    "eeeeeee",
  ])
);
