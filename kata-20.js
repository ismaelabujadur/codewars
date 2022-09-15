/*

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216

*/
function perimeter(n) {
    let f1 = 0;
    let f2 = 1;
    let current = 0;
    let sum = 0;
    for (let i = 0; i < (n + 1); i++) {
        current = f1 + f2;
        f1 = f2;
        f2 = current;
        sum += f1;
    }
    return sum * 4;
}