const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return [];
  }
  let arrCopy = Array.from(arr);
  let result = [];
 
  if (arrCopy[0] == '--discard-prev' || arrCopy[0] == '--double-prev') {
    result = arrCopy.slice(1);
    return result
  }
  if (arrCopy[arrCopy.length-1] == '--discard-next' || arrCopy[arrCopy.length-1] == '--double-next') {
    result = arrCopy.slice(0, -1);
    return result
  }
    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i] == '--discard-next' && arrCopy[i + 2] == '--double-prev') {
        result = arrCopy.slice(0, i);
        result = result.concat(arrCopy.slice(i + 3));
        return result;
      }
      if (arrCopy[i] == '--double-next') {
        result.push(arrCopy[i+1]);
      } else if (arrCopy[i] == '--discard-next') {
        i += 1;
      } else if (arrCopy[i] == '--double-prev') {
        result.push(arrCopy[i - 1]);
      } else if (arrCopy[i] == '--discard-prev') {
        result.splice(i - 1, 1);
      }
      else {
        if (arrCopy[i] !== undefined) {
          result.push(arrCopy[i]);
        }
      }
  }

  return result
}

module.exports = {
  transform
};
