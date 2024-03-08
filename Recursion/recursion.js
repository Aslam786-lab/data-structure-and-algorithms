//using count variable
let count = 0;

function recurCount() {
    if(count === 4) return;
    console.log(count)
    count++;
    recur();
}

// recurCount();


//without using count var

function recur(count, n) {
    if(count === 4) return;
    console.log(count); //this will print 1,2,3 logged during the func call
    recur(count+1, n);
    console.log(count);//this will print 3,2,1 logged once after the base condition is met
}

// recur(0, 4);

//using backtracking
function backTrack(count, n) {
    if(count < 1) return;
    backTrack(count-1, n);
    console.log(count);  //this will be executed after base condition(from nested recurcive func) till parent function is called backtracking 
}

// backTrack(4,4);


//sum of first N natural numbers

function sumN(n, sum) {
   if(n < 1) return console.log(sum);
   sumN(n-1, sum+n);
}

// sumN(5, 0);



//reverse an array
function reverseArr(arr, start, end) {
    if(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverseArr(arr, start+1, end-1);
    }
}


const arr = [5,4,3,2,1];
reverseArr(arr, 0, arr.length-1);
// console.log(arr);


//check if the string is pallindrome or not
function isPallindrome(str, i) {
    if(i > str.length) return true;
    if(str.charAt(i) !== str.charAt(str.length-i-1)) return false;
    return isPallindrome(str, i+1);
}

// console.log(isPallindrome('ABCDCBA',0))




//print fibonacci series Nth term
function fibonacci(n,i ,n1, n2) {
    if(i>n) return;
    console.log(n1)
    let nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
    fibonacci(n, i+1,n1, n2)
}


fibonacci(5,0, 0, 1)