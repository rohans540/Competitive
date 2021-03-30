//Author: Rohan Sharma
//HackerRank Problem: Divisible sum pairs

/*
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i<j and ar[i] + ar[j] is divisible by k.
*/

function divisibleSumPairs(n, k, ar) {
    let count = 0;

    for(let i = 0; i < ar.length; ++i) {
        for(let j = i+1; j < ar.length; ++j) {
            if((ar[i]+ar[j])%k === 0) {
                count += 1;
            }
        }
    }
    return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));