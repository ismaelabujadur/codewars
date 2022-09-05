/*

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

*/

function getPosition(character) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const index = alphabet.findIndex((element) => element == character.toLowerCase());
    return index;
}

function alphabetPosition(text) {
    let stringPositions = '';
    for (let i = 0; i < text.length; i++) {
        let position = getPosition(text[i]);
        if (position >= 0) {
            stringPositions = stringPositions + ' ' + (position + 1);
        };
    };
    return stringPositions.trim();
}