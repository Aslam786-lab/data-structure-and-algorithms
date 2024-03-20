/*
In merge sort alogrithm we use divide conqurer rule
so first it divide the array into 2 parts then it will apply recursive
approach on left and right side array, then left side array will divide the
array until it reach single element then it will return then it will call the 
right side recursion then right side also divide the array until it reaches
single element then it will return then it will call merge then it will compare
right side element and left side element and sort it and add it to the original array
and this process continue until the array is sorted.
*/



function merge(arr, low, mid, high) {
    let temp = [];
    //this will be pointing to the left side array
    let left = low;

    //this will be pointing to the right side array
    let right = mid+1;

    //this while loop will sort element from left and right and push it to temp
    while(left <= mid && right <= high) {
        if(arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    //after pushing all the elements from right(exhusted) and 
    //if left has some elements then those remaining elements will be
    //copied to temp
    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    //similarly if the left is exhusted then remaining right eleemnts will
    //be copied to temp
    while(right <= high) {
        temp.push(arr[right]);
        right++;
    }

    //modifing the original array with temp sorted array
    for(let i=low; i<= high; i++) {

        //here i-low is used because suppose low is 3 and temp has 2 elements temp[3] will be undefined
        //so to avoid this and get the index from 0 , 1, 2 etc like this we using i-low
        arr[i] = temp[i-low];
    }
}

function mergeSort(arr, low, high) {

    //this is the base condition when the left and right array has single element then low and high will be same 
    if(low >= high) return;

    const mid = Math.floor((low+high)/2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);

    merge(arr, low, mid, high);
}




const arr =[9,3,4,1,7,2];
const low = 0;
const high = arr.length-1;
console.log(arr)

//we need to pass low and high so the array can be divided into 2 parts
mergeSort(arr, low, high)
console.log(arr)


/*
Time complexity: O(nlogn) 

Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get sorted array, so overall time complexity will be nlogn

Space complexity: O(n)  

Reason: We are using a temporary array to store elements in sorted order
*/