const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length <= 1) {
    return 0;
  }
  let sum = [];
  let result = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] !== 0) {
      sum.push(matrix[0][i])
      sum.push(matrix[1][i])
    }
    if (matrix[1][i] !== 0) {
      sum.push(matrix[2][i])
    }
  }
  sum.forEach((elem) => {
    result += elem
  });
  return result;
}

module.exports = {
  getMatrixElementsSum
};
