//Author: Rohan Sharma
//HackerRank Problem: Bill Division

/* */

function bonAppetit(bill, k, b) {
    let totalBill = parseInt((bill.reduce((a,b) => a+b) - bill[k])/2);
    console.log(totalBill);

    return b === totalBill ? "Bon Appetit" : b-totalBill;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));