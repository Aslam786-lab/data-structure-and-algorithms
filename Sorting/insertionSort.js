/*
In insertion sort we select an element moving forward and compare it 
with previous elements move it to is proper position by swapping
*/

function insertionSort(arr) {
    // this is for selecting an element
    for(let i=0; i<arr.length; i++) {
        //taking the reference of current element
        let j=i;

        /*here j>0 becauase we will compare the element till index 1
        because even thogh element is need to place it in 0th index it can
        be done from the index 1 thats why j>0 
        */
        while(j>0 && arr[j-1] > arr[j]) {
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            //decrementing from i till 1
            j--;
        }
    }
}

const arr =[9,3,4,1,7,2];
console.log(arr)
insertionSort(arr)
console.log(arr)


/*
time complexity worst case and avergage case is O(n^2)
for best case O(N)
space complexity is O(1)
*/