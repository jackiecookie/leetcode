/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  let dic = {}
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];
    let sortedStr =  [...str].sort().toString();
    if (dic[sortedStr]===undefined) {
      let index = result.length;
      dic[sortedStr] = index;
      result.push([str])
    } else {
      result[dic[sortedStr]].push(str);
    }
  }
  return result;
};
// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// @lc code=end

