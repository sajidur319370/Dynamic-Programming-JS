const allConstruct = (targetWord, wordBank, memo = {}) => {
  if (targetWord === "") return [[]];

  if (targetWord in memo) {
    return memo[targetWord];
  }
  let allCombination = [];
  for (const word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.slice(word.length);
      const suffixCombanation = allConstruct(suffix, wordBank, memo);
      const targetCombination = suffixCombanation.map((ways) => [
        word,
        ...ways,
      ]);
      allCombination.push(...targetCombination);
    }
  }

  memo[targetWord] = allCombination;
  return allCombination;
};
// memoization
// m = targetWord.length
// n = wordBank.length
// Time Complexity = O(n^m)
// Space Copmplexity = O(m)
console.log(allConstruct("potato", ["ato", "ta", "po", "pot", "to"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstruct("skatboard", [
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
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeee",
    "eeeeeee",
  ])
);
