/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let a = undefined;
  let b = undefined;
  let result = 0;
  let isAdd = true;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char == "" || char == " " || char == ")") {
      continue
    }
    if (char == "+" || char == "-") {
      isAdd = char == "+" ? true : false;
      continue
    }
    if (char == "(") {
      let l = findyd(i, s);
      char = calculate(s.substring(i + 1, l));
      i = l;
    } else {
      let j = i + 1;
      for (; j < s.length; j++) {
        let _item = s[j];
        if (_item == "" || _item == " " || _item == ")" || _item == "+" || _item == "-" || _item == "(") {
          break
        }
        char += _item;
      }
      i = j - 1;
    }


    if (isAdd) {
      result += parseInt(char);
    } else {
      result -= parseInt(char);
    }


  }

  return result;


};

function findyd(index, s) {
  let count = 0;
  for (let i = index; i < s.length; i++) {
    let char = s[i];
    if (char == '(') {
      count++;
      continue;
    }
    if (char == ')') {
      count--;
      if (count === 0) {
        return i;
      }
    }
  }
  return -1;
}

// calculate("2147483647")
// let re = calculate("(5-(1+(5)))")
// debugger //eslint-disable-line
// @lc code=end

