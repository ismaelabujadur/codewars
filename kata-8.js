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