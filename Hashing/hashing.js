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
In order to hash number higher than 10^9 we need to use object in js/hashmap in java

*/

function usingObj(arr, query) {
    let obj = {};
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 0;
        }
        obj[arr[i]] += 1;
    }
    return obj[query];
}


// console.log(usingObj(arr, 1))




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
    /*256 because there are total of 256 character in ascii if there is no 
    mention of small letter of capital letter in we must use 256 size array
    if it is small case 'ch'-'a'
    if it is capital case 'ch'-'A'
    */
    let hashArr = new Array(256).fill(0);
    for(let i=0; i<str.length; i++) {
        hashArr[str.charCodeAt(i)] += 1;
    }

    return hashArr[query.charCodeAt()];
}

// console.log(findStrOcurHash('abcdabefc', 'c'))


// using js obj
function usingStrObj(str, query) {
    let obj = {};
    for(let i=0; i<str.length; i++) {
        if(obj[str.charCodeAt(i)] === undefined) {
            obj[str.charCodeAt(i)] = 0;
        }
        obj[str.charCodeAt(i)] += 1;
    }

    return obj[query.charCodeAt()];
}

// console.log(usingStrObj('abcdabefc', 'c'))



//example problem 1
/*
given input arr = [10,5,10,15,10,5];
find the occerence of each element 
output 
10 3
5  2
15 1
*/

function findOcurPr1(arr) {
    let obj = {};
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 0;
        }
        obj[arr[i]] += 1;
    }
    for(let key in obj) {
        console.log(`${key}  ${obj[key]}`)
    }
}

const arrPr1 = [10,5,10,15,10,5];
// findOcurPr1(arrPr1)


//find max and min frequency elements in the array
function findMinMaxPr2(arr) {
    let obj = {};
    //we need separte varaible for one to store the max element(key) and one to store max frequency for calculation
    let maxEle = 0;
    let minEle = 0;
    let maxFreq = 0;
    
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 0;
        }
        obj[arr[i]] += 1;
    }

    //to find the min value we need some initial value from the same object
    let minFreq = Object.values(obj)[0];
    for(let key in obj) {
        if(obj[key] > maxFreq) {
            maxEle = key;
            maxFreq = obj[key];
        }
        if(obj[key] < minFreq) {
            minEle = key;
            minFreq = obj[key];
        }
    }
    return `${maxEle} ${minEle}`
}

const arrPr2 = [10,5,10,15,10,5];
console.log(findMinMaxPr2(arrPr1))

