/*

In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

*/
/*
    Function that given an string and two positions
    swaps the characters on the give positions
*/
function swapCharacters(str, a, b) {
    let aux = '';
    let strArray = str.split('');
    aux = strArray[a];
    strArray[a] = strArray[b];
    strArray[b] = aux;
    return strArray.join("");
}
/* 
    Recursive function that creates different permutations
    by swapping characters of the string. Uses backtracking method to build
    a tree with all the possibilities.
*/
function createPermutation(str, position, length, answers) {
    if (position == length && !answers.includes(str)) {
        answers.push(str);
    } else {
        for (let i = position; i < length + 1; i++) {
            str = swapCharacters(str, position, i);
            createPermutation(str, position + 1, length, answers);
        }
    }
}

function permutations(string) {
    let answers = [];
    createPermutation(string, 0, string.length, answers);
    return answers;
}