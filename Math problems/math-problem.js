//1. Count digits in the number

function countDigit(number) {
    let num = number;
    let count = 0;
    while (num > 0) {
        //by dividing 10 every time remove the last digit
       num = Math.floor(num/10); 
       count++;
    }
    return count;
}

// console.log(countDigit(12345));

//2. reverse numbers
function reverseNum(number) {
    let reverse = 0;
    let num = number;
    while (num > 0 ) {
        //this will return the last digit
        let digit = num % 10;
        //this logic is to increase the number in 10 times and adding the last digit to it.
        reverse = reverse * 10 + digit;
        //this is to maintain the loop 
        num = Math.floor(num/10);
    }
    return reverse;
}

// console.log(reverseNum(123))

//3. palindrome -> in the above solution compare number with reverse number if same then true else false


//4. find GCD
function findMin(num1, num2) {
    let min = 0;
    if(num1 > num2) {
        min = num2;
    } else {
        min = num1;
    }
    return min 
}
function findGcd(num1, num2) {
    let minNum = findMin(num1, num2);
    if(num1 % minNum === 0 && num2 % minNum === 0) {
        return `${minNum} is GCD`
    } 
    return '1'
}

// console.log(findGcd(4, 8))


//5. armstrong number --> a number that is equal to the sum of cubes of its digits
function isArmstrongNum(number) {
    let num = number; //this is for counting the digit
    let originalValue = number; // this is to comparison
    let sum = 0;
    let count = 0;

//this is for counting the digits
    while(num > 0) {
        count++
        num = Math.floor(num/10);
    }

    //this is for getting final number
    while(number > 0) {
        let digit = number % 10;
        sum = sum+(Math.pow(digit, count));
        number = Math.floor(number/10);
    }
    
    if(originalValue === sum) {
        return 'Yes, armstrong number'
    } 
    return 'No';
}


// console.log(isArmstrongNum(153))



//6. print all divisors of given number
function divisors(number) {
    //idea is if we find one divisor using this we can find another thats why sqrt
    for (let index = 1; index <= Math.sqrt(number); index++) {
        if(number % index === 0) {
            console.log(index);
            //this is to remove the duplicate number
            if(index !== (number/index)){
                console.log(number/index)
            }
        }
    }
}

// console.log(divisors(36))


//7. is number prime or not --> a number which is divisible by 1 and by itself
function isPrime(number) {
    for (let index = 2; index < Math.sqrt(number); index++) {
        if(number % index === 0) {
            return 'not a prime';
        } 
    }
    return 'its prime';
}

// console.log(isPrime(17))


//8. find nth fibonacci series --> number in the series is the sum of last two digits

function fibonacci(number) {
    let n1 = 0; //initial values n1 and n2 to start 
    let n2 = 1;
    let nextNum = 0;
    for (let index = 0; index < number; index++) {
        console.log(n1)
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
}

fibonacci(8)
