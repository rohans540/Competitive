//Author: Rohan Sharma

//Problem statement: N number of friends want to go to a party, there is a constraint i.e. there are only two ways
//a person can go to the party either he can go alone or in a pair, find the number of ways in which N friends go to the party.

function findWaysForN(n) {
    if(n === 1 || n === 2) {
        return n;
    } else {
        return findWaysForN(n-1) + (n-1)*findWaysForN(n-2);
    }
}

console.log(findWaysForN(4));