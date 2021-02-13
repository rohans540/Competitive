//Author: Rohan Sharma
//Problem statement: Given a number with odd number of digits find whether the sum of left side of digits are equal to the sum of the right
//side of digits


//function to calculate whether the sum of LHS digits are equal to the RHS digits
//input: number of String format
//output: Boolean value
function balancedNumbers(num) {
    let leftNum = 0;
    let rightNum = 0;
    const mid = parseInt(num.length/2);

    for(let i = 0; i < num.length; ++i) {
        if(i < mid){
            leftNum += parseInt(num[i]);
        }
        else if(i > mid) {
            rightNum += parseInt(num[i])
        }
    }
    console.log(leftNum, rightNum);
    return leftNum === rightNum;
};

console.log(balancedNumbers("1929633"));