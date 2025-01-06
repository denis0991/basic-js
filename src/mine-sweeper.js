const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  function countMines(x, y, dx, dy) {
    if (dx === 0 && dy === 0) return 0;
    const newRow = x + dx;
    const newCol = y + dy;
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      return matrix[newRow][newCol] ? 1 : 0;
    }
    return 0;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          count += countMines(i, j, dx, dy);
        }
      }
      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
