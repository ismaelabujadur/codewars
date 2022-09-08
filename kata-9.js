function arrayExists(arrayCheck) {
    if (typeof arrayCheck !== 'undefined' && arrayCheck !== null) {
        return true;
    }
    return false;
}

function comp(array1, array2) {
    if (!arrayExists(array1) || !arrayExists(array2)) {
        return false;
    }

    let array1Sorted = array1.sort();
    let array2Sorted = array2;
    array2Sorted = array2Sorted.map(function (x) {
        return Math.sqrt(x);
    });

    array2Sorted = array2Sorted.sort();

    return JSON.stringify(array1Sorted) == JSON.stringify(array2Sorted);
}