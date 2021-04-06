//Author: Rohan Sharma
//Leetcode problem: Running sum of array

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

var runningSum = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        nums[i] = sum;
    }

    return nums;
}

console.log(runningSum([1, 2, 3, 4]));