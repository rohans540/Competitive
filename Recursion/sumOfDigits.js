//Author: Rohan Sharma
//Write a recursive function that, given a number n, returns the sum of the digits of the number n.

// function sumOfNumbers(n) {
//     let sum = 0;
//     let last;
//     while(n > 0) {
//         last = n%10;
//         sum += last;
//         n = parseInt(n/10);
//     };
//     return sum;
// }

function sumOfNumbers(n) {
    if(n === 0) {
        return 0;
    } else {
        return n%10 + sumOfNumbers(parseInt(n/10));
    }
}

console.log(sumOfNumbers(4444));