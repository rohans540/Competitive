//Author: Rohan Sharma
//HackerRank Problem: Between two sets
/*
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
   1. The elements of the first array are all factors of the integer being considered
   2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 */

function getTotalX(a, b) {
    let factor = a[a.length - 1];
    let flag, result = 0;

    while(factor <= b[0]) {
        flag = true;
        for(let i = 0; i < a.length; ++i) {
            if(factor%a[i] !== 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            for(let i = 0; i < b.length; ++i) {
                if(b[i]%factor !== 0) {
                    flag = false;
                    break;
                }
            }
        };
        if(flag) {
            result += 1;
        }
        factor += 1;
    }
    return result;
}

console.log(getTotalX([2, 4],[16, 32, 96]));