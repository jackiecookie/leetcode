/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let len = board.length;
  if (len === 0) {
    return
  }
  let bLen = board[0].length;
  let hash = {};
  let dfs = function (i, j) {
    if (i >= 0 && i < len && j >= 0 && i < bLen) {
      let elm = board[i][j];
      if (elm === 'O' && !hash[`${i}+${j}`]) {
        hash[`${i}+${j}`] = true;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      } else {
        return
      }
    }

  }
  for (let j = 0; j < bLen; j++) {
    dfs(0, j)
  }
  for (let j = 0; j < bLen; j++) {
    dfs(len - 1, j)
  }
  for (let i = 0; i < len; i++) {
    dfs(i, 0)
  }
  for (let i = 0; i < len; i++) {
    dfs(i, bLen - 1)
  }

  for (let i = 1; i < len - 1; i++) {
    for (let j = 1; j < bLen - 1; j++) {
      if (board[i][j] === 'O' && !hash[`${i}+${j}`]) {
        board[i][j] = 'X';
      }
    }
  }
};


// solve(
//   [[
//     "X", "X", "X", "X"
//   ],
//   [
//     "X", "O" ,"O" ,"X"
//   ],
//   [
//     "X", "O" ,"O" ,"X"
//   ],
//   [
//     "X", "O" ,"X" ,"X"
//   ]]

// )
// @lc code=end

