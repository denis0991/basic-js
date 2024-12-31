const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i ++) {
    if(str[i] === str[i+1]) {
      count++
      console.log(count)
    } else {
      if (count === 1) {
        res = str[i];
        result += res;
      } else {
        res = String(count || '') + str[i];
        result += res;
        count = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
