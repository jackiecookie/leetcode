/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];
  let q = null;
  function initQ() {
    q = new Array(n);
    for (let _i = 0; _i < n; _i++) {
      q[_i] = new Array(n).fill('.')
    }
  }
  initQ()

  let ok = function (row, col) {
    //check col ok
    for (let i = 0; i < n - 1; i++) {
      const str = q[i][row];
      if (str === 'Q') {
        return false
      }
    }

    let check = function (row, col, fn) {
      let newRow = row;
      let newCol = col;
      while (true) {
        [newRow, newCol] = fn(newRow, newCol);
        if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n ) {
          const str = q[newCol][newRow];
          if (str === 'Q') {
            return false
          }
        } else {
          return true;
        }

      }

    }

    let result = [(r, c) => {
      return [r + 1, c + 1]
    }, (r, c) => {
      return [r - 1, c - 1]
    }, (r, c) => {
      return [r + 1, c - 1]
    }, (r, c) => {
      return [r - 1, c + 1]
    }].reduce((r, f) => {
      if (r) {
        r = check(row, col, f)
      }
      return r;
    }, true)
    return result;
  }

  let goGetIt = function (col) {
    if (col >= n) {
      result.push( q.reduce((a,_q)=>{
        a.push(_q.join(''))
        return a;
      },[]));
      return true;
    } else {
      for (let i = 0; i <= n - 1; i++) {
        if (ok(i, col)) {
          q[col][i] = 'Q';
          goGetIt(col + 1)
          q[col][i] = '.';
        }
      }
    }


  }
  goGetIt(0);
  return result;
};

// solveNQueens(4)
// @lc code=end

