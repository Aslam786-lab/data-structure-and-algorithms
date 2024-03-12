/*
given array [1,2,1,3,2] 
given queries [1,3,4,2,10]
find out how many time each query appears in array
*/


function findOccurence(num, arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(num === arr[i]) {
            count++;
        }
    }
    return count;
}

const arr = [1,2,1,3,2];
// console.log(findOccurence(1, arr));


/*
Here the time complexity is for looping through array is O(N)
for Q number of queries it would be Q*O(N)
suppose Q = 10^5 and N= 10^5 then TC 10^10 
for 10^8 it will take 1second to execute
for 10^10 it will take 100sec 
*/



/*
The above approach is not ideal so Hashing will help in much optimal way
Hashing --> pre-storing, fetching
basically it will create an array of largest element in the array
then for each element of array it will store the occerence with the 
particular hash array index 
ex: element 1 occorence will be stored in
hash array index 1
*/

function usingHash(arr, query) {
    //max element is required for creating the hash array of that lenght
    const maxEl = Math.max(...arr);
    //here we are doing maxEl+1 because array need to start from zero
    let hashArr = new Array(maxEl+1).fill(0);

    for(let i=0; i< arr.length; i++) {
        //here we will get the arr element and increment the value in hash array at that particular index
        hashArr[arr[i]] += 1;
    }

    //here we will have the pre-stored value of hash array.
    return hashArr[query]
}

const arr1 = [1,2,1,3,2];
// console.log(usingHash(arr1, 1));

//Here the time complexity is O(N) there wont be any Q factor


/*
maximum size of array can be created in a local function is 10^6
in case of global scope 10^8
*/




/*
given array “abcdabefc” 
given query 'c' find occernce 
*/

/*
basically the idea is mapping the small alphabets to array index 0 to 26
and maping the character to the index using ascii and storing its 
occerence.
*/

function findStrOcurHash(str, query) {
    let hashArr = new Array(26).fill(0);
    for(let i=0; i<str.length; i++) {
        hashArr[str.charCodeAt(i)-'a'.charCodeAt()] += 1;
    }

    return hashArr[query.charCodeAt()-'a'.charCodeAt()];
}

console.log(findStrOcurHash('abcdabefc', 'c'))