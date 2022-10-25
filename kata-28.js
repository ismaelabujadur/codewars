/**

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

 */
function topThreeWords(text) {
    //   Split by spaces
    let textArray = text.split(" ");
    let wordCounter = new Map();

    textArray.forEach((word) => {
        //    Clean the word of undesired characters
        let cleanWord = word.replace(/^[^a-zA-z']*|([^a-zA-z']*)$/g, '').toLowerCase();
        //       We need to control the only case that might slip from the regex
        if (cleanWord.length > 0 && cleanWord != "\'") {
            if (wordCounter.has(cleanWord)) {
                wordCounter.set(cleanWord, wordCounter.get(cleanWord) + 1)
            } else {
                wordCounter.set(cleanWord, 1);
            }
        };
    });

    if (wordCounter.size == 0) {
        return [];
    } else {
        let topThree = [];
        wordCounter.forEach((newScore, newWord) => {
            topThree.push([newScore, newWord]);
        });
        //      Sort it to have the 3 most reapeated items at the beginning
        topThree.sort((a, b) => {
            return b[0] - a[0]
        })
        //      Return the 3 first items
        return topThree.slice(0, 3).map(item => item[1]);
    }
}