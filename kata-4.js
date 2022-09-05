/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

*/

function findOutlier(integers) {
    // We are looking for even numbers unless there are more odd numbers in the 3 first positions
    let lookingFor = 'even';
    // Count how many even numbers are in the 1st 3 positions
    let countEven = 0;

    for (let i = 0; i < 3; i++) {
        if (Math.abs(integers[i]) % 2 == 0) {
            countEven++;
        } else {
            countEven--;
        }
    }
    if (countEven > 0) {
        lookingFor = 'odd';
    }
    if (lookingFor == 'even') {
        return integers.filter(integer => (Math.abs(integer) % 2 == 0))[0];
    } else {
        return integers.filter(integer => (Math.abs(integer) % 2 == 1))[0];
    }
}