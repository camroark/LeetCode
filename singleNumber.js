/*
Given an array of integers, every element appears twice except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Difficulty: Medium
Tests to pass: 15/15
Result: Faster than 88.1% of submissions

*/

var singleNumber = function(nums) {
    var result = {};
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if(result[num] || result[num] === 0) {
            delete result[num];
        } else {
            result[num] = num;
        }
    }
    // console.log(result);
    for(var key in result) {
        return result[key];
    }
};
