/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (37.51%)
 * Total Accepted:    7.9K
 * Total Submissions: 19.8K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 *
 * 说明：
 *
 *
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 *=
 *
 * 示例 1：
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 *
 *
 * 示例 2：
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 * 注意你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//   wordDict = arrayToDic(wordDict);
//   //   let dp = [];
//   let paths = [
//     {
//       start: 0,
//       end: 0
//     }
//   ];
//   for (let i = 0; paths.length > 0; ) {
//     let path = paths[i];
//     for (let j = path.end + 1; j <= s.length; j++) {
//       let isReachEnd = j === s.length;
//       let word = s.substring(path.start, j);
//       if (wordDict[word] !== undefined) {
//         if (isReachEnd) {
//           return true;
//         }
//         path.end = j;
//         paths.push({
//           start: j,
//           end: j
//         });
//         i++;
//         break;
//       } else if (isReachEnd) {
//         paths.pop();
//         i--;
//         break;
//       }
//     }
//   }
//   return false;
// };

var wordBreak = function(s, wordDict) {
  wordDict = arrayToDic(wordDict);
  let dp = [];
  let trues = [];
  for (let i = 0; i < s.length;) {
    for (let j = i + 1; j <= s.length; j++) {
      if (dp[j]) {
        continue;
      }
      let word = s.substring(i, j);
      if (wordDict[word] !== undefined) {
        trues.push(j);
        dp[j] = true;
      }
    }
    if (dp[s.length]) {
      return true;
    }
    i = trues.shift(); 
  }

  return !!dp[s.length];
};

function arrayToDic(wordDict) {
  let result = {};
  wordDict.forEach(item => {
    result[item] = 1;
  });
  return result;
}

console.log(wordBreak("abcdefg", ["abcde", "cdef", "fg", "bcde", "a"]));
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));
console.log(wordBreak("leetcode", ["leet","code"]));

