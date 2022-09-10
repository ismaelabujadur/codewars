/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder = function (iterable) {
    const iterableArray = typeof iterable == 'string' ? iterable.split('') : iterable;
    let unique = [];
    for (let i = 0; i < iterableArray.length; i++) {
        const current = iterableArray[i];
        const next = iterableArray[i + 1];
        if (current != next) {
            unique.push(current);
        }
    }
    return unique;
}