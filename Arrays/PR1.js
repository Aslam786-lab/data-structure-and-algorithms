/* 
Problem statement
Given an array ‘arr’ of size ‘n’ find the largest element in the array.



Example:

Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]

Output: 5

Explanation: From the array {1, 2, 3, 4, 5}, the largest element is 5.
*/

function findLargest(n, arr) {
    let max = arr[0];
    for(let i=1; i< n; i++) {
        if(arr[i] > arr[i-1]){
            max = arr[i];
        }
    }

    return max;
}

const arr = [1,2,3,4,5];
console.log(findLargest(arr.length, arr))