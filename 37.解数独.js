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
  let len = 9;
  let isOk = function (row, col, num) { //row 
    let cols = board[col]
    if (cols.indexOf(num.toString()) === -1) {  //check cols ok
      //then check rows is ok
      for (let index = 0; index < board.length; index++) {
        const rows = board[index];
        if (rows[row] == num) {
          return false;
        }
      }
      //finally check 3x3
      for (let i = (parseInt(col / 3)) * 3, ii = (i + 3); i < ii; i++) {
        const rows = board[i];
        for (let j = (parseInt(row / 3)) * 3, kk = (j + 3); j < kk; j++) {
          if (rows[j] == num) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  let fillNum = function (rowNum, colNum) {
    if (board[colNum][rowNum] === '.') {
      for (let i = 1; i < 10; i++) {
        if (isOk(rowNum, colNum, i)) {
          board[colNum][rowNum] = i.toString();
          let reset = false;
          if (rowNum < 8) {
            reset = fillNum(rowNum + 1, colNum);
          }
          if (reset) {
            board[colNum][rowNum] = '.'
          } else {
            if (colNum < 8) {
              fillNum(rowNum, colNum + 1);
            }
          }
          // if (colNum < 8) {
          //   fillNum(rowNum, colNum + 1);
          // }
        }
      }
      return board[colNum][rowNum] === '.';
    } else {
      if (rowNum < 8) {
        return fillNum(rowNum + 1, colNum);
      } else if (colNum < 8) {
        return fillNum(rowNum, colNum + 1);
      } else {
        return true;
      }
    }
  }
  fillNum(0, 0)
};

solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
// @lc code=end

