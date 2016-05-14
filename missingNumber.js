/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Difficulty: Medium
Tests to pass: 121/121
Result: Faster than 89.9% of submissions
*/

var missingNumber = function(nums) {
    var count=0, min=Infinity, max=-Infinity;
    if(nums.length === 1) {
        if(nums[0]) {
            return 0;
        }
        return 1;
    }

    for (var i=nums.length; i--;) {
        var num = nums[i];
        count+=num;
        if(num< min) {
            min = num;
        }
        if(num > max) {
            max = num;
        }
    }

    var sum = max*(max + 1)/2;
    if(sum <= count){
        if(min === 0) {
            return nums.length;
           }
        return 0;
    } else {
           return sum-count
    }
};
