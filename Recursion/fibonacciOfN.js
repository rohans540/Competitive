//Author: Rohan Sharma
//Problem statement: Given a number n return the nth number of the fibonacci series
//Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacciOfN(n) {
    if(n === 1)
        return 0;
    else if(n === 2)
        return 1;
    else 
        return fibonacciOfN(n-1) + fibonacciOfN(n-2);
}

console.log(fibonacciOfN(10));