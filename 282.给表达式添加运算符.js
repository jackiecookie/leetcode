/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  let len = num.length;
  let result = []
  let dfs = function (exp, i, pos, prve, curr) {
    if (pos === len) {
      if (curr === target) {
        result.push(exp.toString());
      }
      return;
    }

    for (let l = 1; l <= len - pos; l++) {
      let t = num.substr(pos, l);
      if(t[0]=='0'&&t.length>1)break;
      let item = parseInt(t);
      if (pos === 0) {
        dfs(item, i, l, item, curr + item);
        continue
      }

      dfs(exp + "+" + t, i, pos + l, item, curr + item);
      dfs(exp + "-" + t, i, pos + l, -item, curr - item)
      dfs(exp + "*" + t, i, pos + l, prve * item, curr - prve + item * prve)

    }

    // if (i === 0) {
    //   dfs(item, i + 1, item, curr + item);
    //   return
    // }


  }

  dfs("", 0,0, 0, 0)

  return result;

};


// addOperators("2147483647", 2147483647)
// @lc code=end

