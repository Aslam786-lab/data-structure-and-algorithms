function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let pivotIndex = low;

    while(low < high) {
        if(arr[low] < pivot) {
            if(pivotIndex !== low) {
                swap(arr, low, pivotIndex);
            }
            pivotIndex++;
        }
        low++;
    }

    swap(arr, pivotIndex, high);
    return pivotIndex;
}


function quickSort(arr, low, high) {
    if(low > high) return;
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex-1);
    quickSort(arr, pivotIndex+1, high);
}

const arr = [5,2,8,2,4,1,3]
quickSort(arr, 0, arr.length-1);

console.log(arr);