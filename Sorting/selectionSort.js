/*
Selection is sort is about selecting the minimum element 
in the array swap witht the initail index
*/


function selectionSort(arr) {
    //this for loop is  selecting an element and swaping 
    for(let i=0; i< arr.length-1; i++) {
        //on each iteration minIndex will start with ith value
        let minIndex = i;
        //this for loop is required for finding the minimum element
        //here j=i+1 because we dont require to compare an element to itself
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}


const arr =[9,3,4,1,7,2];
console.log(arr)
selectionSort(arr)
console.log(arr)

/*
time complexity of this is in all three senario is O(N^2)
Space complexity is O(1);
*/