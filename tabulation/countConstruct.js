const countConstruct = (targetWord, wordBank) => {
  const table = Array(targetWord.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= targetWord.length; i++) {
    if (table[i] !== 0) {
      for (const word of wordBank) {
        // if the word matches the character string at position i
        if (targetWord.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i];
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

console.log(countConstruct("abcdef", ["ab", "def", "abcd", "ef", "c"]));
console.log(countConstruct("potato", ["po", "ato", "t", "a", "pot", "to"]));
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeee",
    "eeeeeee",
  ])
);
