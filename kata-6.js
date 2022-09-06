/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
*/

/*
Suppose "n" is a whole number, and it is not yet known if n is prime or composite. First, take the square root -- or the 1/2 power -- of n; then round this number up to the next highest whole number and call the result m. Then find all of the following quotients:

qm = n / m
q(m-1) = n / (m-1)
q(m-2) = n / (m-2)
q(m-3) = n / (m-3)
. . .
q3 = n / 3
q2 = n / 2

The number n is prime if -- and only if -- none of the q's, as derived above, are whole numbers.
*/
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    const firstPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    if (firstPrimes.includes(num)) {
        return true;
    }
    const squareRoot = Math.sqrt(num);
    for (let i = 2; i < squareRoot + 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
