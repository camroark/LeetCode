/*
Link: https://leetcode.com/problems/reverse-vowels-of-a-string/

Write a function that takes a string as input and reverse only the vowels of a string.
Example 1:
Given s = "hello", return "holle".
Example 2:
Given s = "leetcode", return "leotcede".

Difficulty: Easy
Tests to pass: 481/481
Result: Not enough accepted solutions for comparison.
*/

var reverseVowels = function(s) {
  var result = '';
  var revVowels = s.match(/([aeiou])/gi);
  for(var i = 0; i < s.length; i++) {
    result+=(/([aeiou])/i).test(s[i]) ? revVowels.pop() : s[i];
  }
  return result;
};
