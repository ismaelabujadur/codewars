const calculateFirstDivisor = (n, arr) => {
    let rest = n;
    for (let i = 2; i < n; i++) {
        if (rest % i == 0) {
            rest = rest / i;
            arr[i] = (arr[i] || 0) + 1;
            calculateFirstDivisor(rest, arr);
            return;
        };
    }
    arr[rest] = (arr[rest] || 0) + 1;
}

function primeFactors(n) {
    let arr = {};
    calculateFirstDivisor(n, arr);
    let stringFactors = '';
    for (const prop in arr) {
        if (arr[prop] != 1) {
            stringFactors = stringFactors + `(${prop}**${arr[prop]})`
        } else {
            stringFactors = stringFactors + `(${prop})`
        }
    }
    return stringFactors;
}