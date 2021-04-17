//Author: Rohan Sharma
//HackerRank Problem: Electronics Shop

/*
    A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. 
    Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, 
    return -1.
*/

function getMoneySpent(keyboards, drives, b) {
    let max = 0;

    for(let i = 0; i < keyboards.length; ++i) {
        for(let j = 0; j < drives.length; ++j) {
            if(keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b) {
                max = keyboards[i] + drives[j];
            }
        }
    }
    return max !== 0 ? max : -1;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));