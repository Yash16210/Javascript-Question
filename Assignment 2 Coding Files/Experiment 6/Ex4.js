function findLongestWord(input) {
    const words = input.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const result = findLongestWord("The quick brown fox jumps over the lazy dog");
console.log("Longest word:", result);