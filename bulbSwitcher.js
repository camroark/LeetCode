/*
Link:https://leetcode.com/problems/bulb-switcher/

There are n bulbs that are initially off. You first turn on all the bulbs.
Then, you turn off every second bulb. On the third round, you toggle every
third bulb (turning on if it's off or turning off if it's on). For the ith
round, you toggle every i bulb. For the nth round, you only toggle the last
bulb. Find how many bulbs are on after n rounds.

Difficulty: Medium
Tests to pass: 35/35
Results: Faster than 82.1% of submissions
*/

var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};
