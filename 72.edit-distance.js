/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (46.47%)
 * Total Accepted:    3.6K
 * Total Submissions: 7.7K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 * 示例 1:
 *
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释:
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2:
 *
 * 输入: word1 = "intention", word2 = "execution"
 * 输出: 5
 * 解释:
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let word1Len = word1.length;
  let word2Len = word2.length;
  if (word2Len === 0) {
    return word1Len;
  }
  if (word1Len === 0) {
    return word2Len;
  }
  let pd = [];
  for (let j = 0; j < word2Len; j++) {
    for (let i = 0; i < word1Len; i++) {
      pd[j] = pd[j] || [];
      let item2 = word2[j];
      let item1 = word1[i];
      let edit = 0;
      if (item1 !== item2) {
        ++edit;
      }
      let jj = j - 1;
      let ii = i - 1;
      if (jj < 0 && ii < 0) {
        pd[j][i] = edit;
      } else if (jj >= 0 && ii >= 0) {
        if (edit > 0) {
          pd[j][i] = Math.min(pd[jj][ii], pd[jj][i], pd[j][ii]) + edit;
        } else {
          pd[j][i] = Math.min(pd[jj][ii], pd[jj][i] + 1, pd[j][ii] + 1);
        }
      } else {
        if (jj < 0) {
          pd[j][i] = pd[j][ii] + edit;
        } else {
          pd[j][i] = pd[jj][i] + edit;
        }
      }
    }
  }

  return pd[word2Len - 1][word1Len - 1];
};

// minDistance("", "");
// minDistance("horse", "ros");
// minDistance("intention", "execution");
//  minDistance("zoologicoarchaeologist", "zoogeologist");
