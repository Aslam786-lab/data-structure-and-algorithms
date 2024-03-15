//buble sort is about comparing the adjcent element and which ever is 
//greater that will be pushed to the left side

function bubbleSort(arr) {
    //outer for loop is for moving forward
    for(let i=0; i<arr.length; i++) {
        let isSwap = false;
        //inner for loop is for checking the max and swaping with adjcent
        //here we are using arr.length-i-1 because here the last element
        //wil be already sorted so we dont require to check for that
        for(let j=0; j< arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = true;
            }
        }

        //if array is unsorted then swap will take place
        //if the arrya is already sorted then swap will not happen
        if(!isSwap) {
            return;
        }
    }
}

const arr =[9,3,4,1,7,2];
console.log(arr)
bubbleSort(arr)
console.log(arr)

/*
time complexity is O(N^2) for average and worst case
for the best case considering the isSwap logic it will be O(N)
space complexity is O(1)
*/