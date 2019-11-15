/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let paths = path.split('/');
  let stack = []
  for (let index = 0; index < paths.length; index++) {
    const element = paths[index];
    if (element === '') continue;
    if (element === '.') continue;
    if (element === '..') stack.pop();
    else {
      stack.push(element)
    }
  }
  return '/' + stack.join('/')
};

// simplifyPath("/home//foo/")
// simplifyPath("/a/./b/../../c/")
// @lc code=end

