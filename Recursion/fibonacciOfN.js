//Author: Rohan Sharma
//Problem statement: Given a number n return the nth number of the fibonacci series
//Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacciOfN(n, memos = []) {
    if(memos[n]) {
        return memos[n];
    }
    let result;
    if(n === 1)
        result = 0;
    else if(n === 2)
        result = 1;
    else 
        result = fibonacciOfN(n-1, memos) + fibonacciOfN(n-2, memos);
    memos[n] = result;
    return result;
}

console.log(fibonacciOfN(100));