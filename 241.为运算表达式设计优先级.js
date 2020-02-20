/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  let map = new Map();
  const compute = (input, map) => {
    let keys = [...map.keys()]
    if (keys.includes(input)) return map.get(input);
    let res = [];
    for (let i = 0; i < input.length; i++) {
      let c = input.charAt(i);
      if (c === '+' || c === '-' || c === '*')
        for (let l of compute(input.substring(0, i), map))
          for (let r of compute(input.substring(i + 1, input.length), map)) {
              if (c === '+')
                res.push(l + r);
              if (c === '-')
                res.push(l - r);
              if (c === '*')
                res.push(l * r);
            }
          }
      if (res.length === 0)
        res.push(Number(input));
      map.set(input, res)
      return res;
    }
    compute(input,map);
    return map.get(input);
  };


  // diffWaysToCompute( "2-1-1")
// @lc code=end

