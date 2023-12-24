const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Chars = {}; const s2Chars = {}; let count = 0;

for (let char of s1) { 
  if (s1Chars[char]) { s1Chars[char]++; } else { s1Chars[char] = 1; } 
}

for (let char of s2) { 
  if (s2Chars[char]) { s2Chars[char]++; } else { s2Chars[char] = 1; } 
}

for (let char in s1Chars) { 
  if (s2Chars[char]) { count += Math.min(s1Chars[char], s2Chars[char]); 
  } 
}

return count;;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
