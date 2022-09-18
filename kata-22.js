/*

In this kata you will have to calculate fib(n) where:

fib(0) := 0
fib(1) := 1
fin(n + 2) := fib(n + 1) + fib(n)
Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

*/

let f = { 0: 0, 1: 1, 2: 1, 3: 2 };

function calc(n) {
    if (f[n] === undefined) {
        if (n % 2) {
            let f1 = calc((n - 1) / 2);
            let f2 = calc((n + 1) / 2);
            f[n] = f1 ** 2n + f2 ** 2n;
        } else {
            let f1 = calc((n / 2) - 1);
            let f2 = calc(n / 2);
            f[n] = (2n * f1 + f2) * f2;
        }
    }
    return BigInt(f[n]);
}

function fib(n) {
    let absN = Math.abs(n);
    return (absN % 2 == 0 && n < 0) ? (-1n) * calc(absN) : calc(absN);
}
