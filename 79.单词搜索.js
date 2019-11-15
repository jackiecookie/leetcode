/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let len = board.length;
  let lenr = board[0].length;
  let hash = {}
  let goGetIt = function (row, column, i) {
    if (i === word.length) {
      return true;
    }
    if (row >= 0 && row < len && column >= 0 && column < lenr) {
      if (hash[`${row}+${column}`]) {
        return false;
      }

      let str = board[row][column];
      let s = word[i]
      hash[`${row}+${column}`] = true;
      if (str === s) {
        let result = goGetIt(row + 1, column, i + 1)
          || goGetIt(row, column + 1, i + 1)
          || goGetIt(row - 1, column, i + 1)
          || goGetIt(row, column - 1, i + 1)
        hash[`${row}+${column}`] = false;
        return result
      }
      hash[`${row}+${column}`] = false;
    }
    return false;
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < lenr; j++) {
      if (goGetIt(i, j, 0)) {
        return true
      }

    }

  }
  return false
};

// exist([["a", "a"]], "aaa")

// exist([
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ], "ABCCED"
// )
// @lc code=end

