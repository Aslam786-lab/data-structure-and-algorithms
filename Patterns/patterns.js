
//1. square pattern
// * * * *
// * * * *
// * * * *
// * * * *
// time complexity O(N^2)
/* function squarePattern(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';
        for (let column = 0; column < n; column++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
} */

//time complexity of O(N)
function squarePattern(n) {
    let pattern = '';

    //this loop is to get first row with pattern '* * * * '
    for(let row = 0; row < n; row++) {
        pattern += '* ';
    }

    //this loop will execute the pattern for n times
    for (let column = 0; column < n; column++) {
        console.log(pattern);  
    }
}

// squarePattern(4);


//2. Right angle triangle
// *
// * *
// * * *
// * * * *
function rightAngleTriangle(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';
        //will run the inner loop based on row value in incresing order
       for (let column = 0; column <= row; column++) {
        pattern += '* ';
       }
       console.log(pattern);
    }
}

// rightAngleTriangle(4);


//3. numbers RightAngleTringle
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4
function numbersRightAngleTriangle(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';
       for (let column = 0; column <= row ; column++) {
         pattern += `${column +1} `
       }
       console.log(pattern);
    }
}

// numbersRightAngleTriangle(4);


//4. triangle pattern
//    * 
//   * * 
//  * * *
// * * * *
function trianglePattern(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';

        //space in decreaseing order
        for (let column = 0; column < n-row-1; column++) {
            pattern += ' '
        }
        //star in increasing order
        for (let column = 0; column <= row; column++) {
            pattern += '* '
        }

        console.log(pattern)
    }
}

// trianglePattern(4);

//5. inverse triangle 
// * * * * 
//  * * * 
//   * *
//    *
function invertedTriangle(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';
        //space in increasing order
        for (let column = 0; column < row; column++) {
            pattern += ' ';
        }
        //star in decreaseing order
        for (let column = 0; column < n-row; column++) {
            pattern += '* ' 
        }
        console.log(pattern)
    }
}

// invertedTriangle(4)


// 6. diamond 
//    * 
//   * * 
//  * * *
// * * * *
// * * * *
//  * * *
//   * *
//    *
function diamond(n) {
    for (let row = 0; row < n; row++) {
        let upperTriangle = '';
        for (let column = 0; column < n-row-1; column++) {
            upperTriangle += ' '
        }
        for (let column = 0; column <= row; column++) {
            upperTriangle += '* '
        }
        console.log(upperTriangle)
    }

    for (let row = 0; row < n; row++) {
        let lowerTriangle = '';
        for (let column = 0; column < row; column++) {
            lowerTriangle += ' '
        }
        for (let column = 0; column < n-row; column++) {
            lowerTriangle += '* '
        }
        console.log(lowerTriangle)
    }
}

// diamond(4);


//7. binary triangle
//  1 
//  0 1 
//  1 0 1
//  0 1 0 1

//here the logic is to get alternate binary using row and column by odd/even logic
function binaryTriangle(n) {
    for (let row = 0; row < n; row++) {
        let pattern = ' ';
        for (let column = 0; column <= row; column++) {
            pattern += `${(column + row+1) %2} `
        }
        console.log(pattern)
    }
}

// binaryTriangle(4)


//8. alphabet pattern
// A 
// A B 
// A B C
// A B C D
function alphabetPattern(n) {
    for (let row = 0; row < n; row++) {
        let pattern = ''
        for (let column = 0; column <= row; column++) {
            pattern += String.fromCharCode('A'.charCodeAt()+ column) + ' '
        }
        console.log(pattern);
    }
}

// alphabetPattern(4)


//9. alphabet pattern with inverted letters
// D 
// C D 
// B C D
// A B C D
function alphabetInvPattern(n) {
    for (let row = 0; row < n; row++) {
        let pattern = ''
        for (let column = 0; column <= row; column++) {
            // here the logic is decrease the letter on each row and increase it on each calumn
            pattern += String.fromCharCode('A'.charCodeAt()+ n-row+column-1) + ' '
        }
        console.log(pattern);
    }
}

// alphabetInvPattern(4)


//10. diamond space
// * * * * * * * * 
// * * *     * * * 
// * *         * *
// *             *
// *             *
// * *         * *
// * * *     * * *
// * * * * * * * *
function diamondSpace(n) {
    for (let row = 0; row < n; row++) {
        let upperTriangle = '';
        for (let column = 0; column <= n-row-1; column++) {
            upperTriangle += '* '
        }
        for (let column = 0; column < 4*row; column++) {
            upperTriangle += ' '
        }
        for (let column = 0; column < n-row; column++) {
            upperTriangle += '* '
        }
        console.log(upperTriangle)
    }

    for (let row = n-1; row >=0; row--) {
        let upperTriangle = '';
        for (let column = 0; column <= n-row-1; column++) {
            upperTriangle += '* '
        }
        for (let column = 0; column < 4*row; column++) {
            upperTriangle += ' '
        }
        for (let column = 0; column < n-row; column++) {
            upperTriangle += '* '
        }
        console.log(upperTriangle)
    }
   
}

// diamondSpace(4);


// 11. frame
// ****
// *  *
// *  *
// ****
function frame(n) {
    for (let row = 0; row < n; row++) {
        let pattern = '';
        for (let column = 0; column < n; column++) {
            if(row === 0 || column === 0 || row === n-1 || column === n-1 ){
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}

frame(4)