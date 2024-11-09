const canConstruct = (targetWord, wordBank) => {
  const table = Array(targetWord.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetWord.length; i++) {
    if (table[i] === true) {
      for (const word of wordBank) {
        // if the word matches the character string at position i
        if (targetWord.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[targetWord.length];
};
// m = targetWord.length
// n = wordBank.length
// Time Complexity = O(n*m^2)
// Space Copmplexity = O(m)
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
