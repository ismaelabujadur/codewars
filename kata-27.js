/*

Count distinct elements in every window of size k
Given an array of size n and an integer k, return the count of distinct contiguous numbers for all windows of size k. Consider that k is always lower or equals to n.

Example:
    Input: arr = {1, 2, 1, 3, 4, 2, 3} k = 4 Since we have n = 7 and k = 4, we have 4 windows with 4 contiguous elements.
    Answer: [3,4,4,3]

*/

function countContiguousDistinct(k, arr) {
    let result = [];
    let window;
    for (let i = 0; i < (arr.length + 1 - k); i++) {
        if (i == 0) {
            let tempWindow = arr.slice(0, k);
            window = new Map();
            for (let j = 0; j < tempWindow.length; j++) {
                if (window.has(tempWindow[j])) {
                    window.set(tempWindow[j], window.get(tempWindow[j]) + 1);
                } else {
                    window.set(tempWindow[j], 1);
                }
            }
        } else {
            const nextItem = arr[i + k - 1];
            const prevItem = arr[i - 1];
            if (window.has(nextItem)) {
                window.set(nextItem, window.get(nextItem) + 1);
            } else {
                window.set(nextItem, 1);
            }

            if (window.has(prevItem)) {
                if (window.get(prevItem) == 1) {
                    window.delete(prevItem);
                } else {
                    window.set(prevItem, window.get(prevItem) - 1);
                }
            }
        }
        result.push(window.size);
    }
    return result;
}