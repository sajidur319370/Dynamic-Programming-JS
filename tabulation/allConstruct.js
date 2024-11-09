const allConstruct = (targetWord, wordBank) => {
  const table = Array(targetWord.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i <= targetWord.length; i++) {
    for (const word of wordBank) {
      // if the word matches the character string at position i
      if (targetWord.slice(i, i + word.length) === word) {
        const newCombination = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombination);
      }
    }
  }
  return table[targetWord.length];
};
// m = targetWord.length
// n = wordBank.length
// Time Complexity = O(n^m)
// Space Copmplexity = O(n^m)

console.log(allConstruct("abcdef", ["ab", "def", "abcd", "ef", "c"]));
console.log(allConstruct("potato", ["po", "ato", "t", "a", "pot", "to"]));
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "eeeee",
    "eeeee",
    "eeeeeee",
  ])
);
