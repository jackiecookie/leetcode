/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str === "(") {
      left++;
    }
    else if (str === ")") {
      if (left > 0) {
        left--;
      } else {
        right++;
      }

    }
  }
  let res = [];

  let check = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === '(') {
        count++;
      }
      else if (char === ")") {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }
    return count === 0;
  }

  let dfs = function (s,start, l, r) {
    if (l === 0 && r === 0) {
      if (check(s)) {
        res.push(s);
      }
      return
    }

    for (let i = start; i < s.length; i++) {
      if(i-1>=start&&s[i]==s[i-1])continue;
      const char = s[i];

      if (r > 0 && char === ")") {
        let arr = s.split('')
        arr.splice(i, 1)
        dfs(arr.join(''),i, l, r - 1)
      }

      if (l > 0 && char === "(") {
        let arr = s.split('')
        arr.splice(i, 1)
        dfs(arr.join(''),i, l - 1, r)
      }
    }
  }

  dfs(s,0, left, right)
  if(res.length===0){
    return [""]
  }
  return res;

};


// removeInvalidParentheses("))(((((()())(()")
// @lc code=end

