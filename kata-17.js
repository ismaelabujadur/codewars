/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
function pigIt(str) {
    const split = str.split(" ");
    const newStr = split.map((word) => {
        if (word.search(/[A-Z]|[a-z]/g) == 0) {
            const newWord = word.substring(1, word.length) + word.substring(0, 1) + 'ay';
            return newWord;
        }
        return word;
    }).join(' ');
    return newStr;
}