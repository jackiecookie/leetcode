/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  // let left = 0;
  // let insert = 0
  // let right = s.length - 1;
  // while (right >= left) {
  //   let leftChar = s[left];
  //   let rightChar = s[right];
  //   if (leftChar === rightChar) {
  //     left++;
  //     right--;
  //   } else {
  //     s = s.substr(0, left) + rightChar + s.substr(left);
  //     left++;
  //   }
  // }

  // return s;

  var prefix = "";
  var pos, head, tail;

  for (pos = head = tail = parseInt(s.length / 2); pos > 0; head = tail = --pos) {
    while (head !== 0 && s[head - 1] === s[head]) {
      head--; pos--;
    }
    while (tail != s.length - 1 && s[tail + 1] === s[tail]) {
      tail++;
    }
    var isSame = true;
    while (head >= 0) {
      if (s[head] !== s[tail]) {
        isSame = false;
        break;
      }
      head--; tail++;
    }
    if (isSame) {
      break;
    }
  }

  for (var k = s.length - 1; k >= tail && k !== 0; k--) {
    prefix += s[k];
  }
  return prefix + s;
};

// shortestPalindrome("aacecaaa")
// shortestPalindrome("abcd")

// shortestPalindrome("aabba")
// @lc code=end

