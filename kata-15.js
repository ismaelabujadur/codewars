/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
function moveZeros(arr) {
    const items = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number' || arr[i] != 0) {
            items.push(arr[i]);
        }
    }
    const zeros = arr.filter((item) => item === 0);
    const resultArr = items.concat(zeros);
    return resultArr;
}