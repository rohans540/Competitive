//Author: Rohan Sharma
//HackerRank Problem: SubArray Division

/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:
    1. The length of the segment matches Ron's birth month, and,
    2. The sum of the integers on the squares is equal to his birthday.
    
Determine how many ways she can divide the chocolate.
*/

function birthDay(s, d, m) {
    let count = 0;
    let sum;
    for(let i = 0; i < s.length; ++i) {
        sum = 0;
        for(let j = 0; j < m; ++j) {
            sum += s[i+j];
        }
        if(sum === d) {
            count += 1;
        }
    }
    return count;
}

console.log(birthDay([1, 1, 1, 1, 1, 1], 3, 2))