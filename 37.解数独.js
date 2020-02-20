/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var solveSudoku = function (board) {
  let isOk = function (row, col, num) { //row 
    let rows = board[row]
    if (rows.indexOf(num.toString()) === -1) {  //check cols ok
      //then check rows is ok
      for (let index = 0; index < board.length; index++) {
        const colNums = board[index];
        if (colNums[col] == num) {
          return false;
        }
      }
      //finally check 3x3
      for (let i = (parseInt(row / 3)) * 3, ii = (i + 3); i < ii; i++) {
        const colNums = board[i];
        for (let j = (parseInt(col / 3)) * 3, kk = (j + 3); j < kk; j++) {
          if (colNums[j] == num) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  let fillNum = function (rowNum, colNum) {
    if(colNum===9){
      colNum = 0;
      rowNum++;
      if(rowNum===9){
        return true
      }
    }
    if (board[rowNum][colNum] === '.') {
      for (let i = 1; i < 10; i++) {
        if (isOk(rowNum, colNum, i)) {
          board[rowNum][colNum] = i.toString();
          if (fillNum(rowNum, colNum+1)) {
            return true
          }
          board[rowNum][colNum] = '.'
        }
      }
       board[rowNum][colNum] === '.';
       return false
    } else {
      return fillNum(rowNum, colNum+1);
    }
  }
  fillNum(0, 0)
};

// solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
// @lc code=end

