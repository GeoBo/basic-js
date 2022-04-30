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
function minesweeper (matrix) {
  let res = [];
  let mineCount;
  
  for (let i=0; i< matrix.length; i++) {
      res[i] = [];
      for (let j=0; j< matrix[i].length; j++) {
          mineCount = 0;
        
          if(matrix[i][j-1]) mineCount++; //left
          if(matrix[i][j+1]) mineCount++; //right
        
          if(matrix[i-1]) {
              if(matrix[i-1][j-1]) mineCount++; //top left
              if(matrix[i-1][j]) mineCount++; // top center
              if(matrix[i-1][j+1]) mineCount++; //top right
          }
        
          if(matrix[i+1]) {
              if(matrix[i+1][j-1]) mineCount++; //bottob left
              if(matrix[i+1][j]) mineCount++; // bottom center
              if(matrix[i+1][j+1]) mineCount++; //bottob right
          }
          res[i][j] = mineCount;
      }
  }
   return res;
}

module.exports = {
  minesweeper
};
