/*
Problem statement
You have been given an array ‘a’ of ‘n’ unique non-negative integers.



Find the second largest and second smallest element from the array.



Return the two elements (second largest and second smallest) as another array of size 2.



Example :
Input: ‘n’ = 5, ‘a’ = [1, 2, 3, 4, 5]
Output: [4, 2]

The second largest element after 5 is 4, and the second smallest element after 1 is 2.
*/

function findSecSL(arr) {
    let min = arr[0];
    let max = arr[0];
    let sec_min = Infinity;
    let sec_max = arr[0];

    for(let i=0; i< arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } 
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    for(let j = 0; j< arr.length; j++) {
        if(arr[j] > sec_max && arr[j] !== max) {
            sec_max = arr[j]
        }
        if(arr[j] < sec_min && arr[j] !== min) {
            sec_min = arr[j]
        }
    }

    console.log('sec_largest: ', sec_max);
    console.log('sec_smallest: ', sec_min);
}

const arr = [1, 2, 3, 4, 5];
findSecSL(arr)