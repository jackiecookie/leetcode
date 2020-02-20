/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let dic = new Set(wordList);
  if (!dic.has(endWord)) {
    return [];
  }
  let queen = [beginWord];
  let seen = {}
  let nextQ = [];
  let pathQ = [[beginWord]];
  let nextPathQ = [];
  let postions = [-1];
  let nextPostion = [];
  let result = [];
  let findResult = false;
  let level = 1;
  while (queen.length) {
    for (let i = 0; i < queen.length; i++) {
      const word = queen.pop();
      let path = pathQ.pop();
      seen[word] = true;
      for (let j = 0; j < word.length; j++) {
        if (j === postions[queen.length]) {
          continue
        }
        for (let k = 0; k < 26; k++) {
          const w2 = word.slice(0, j) + String.fromCharCode(97 + k) + word.slice(j + 1);  // 97 -> 'a'
          if (dic.has(w2) && w2 !== word && !seen[w2]) {
            if (w2 === endWord) {
              findResult = true;
              result.push([...path, w2])
            } else {
              nextQ.push(w2);
              nextPostion.push(j);
              nextPathQ.push([...path, w2])
            }
          }
        }
      }
    }
    if (queen.length === 0 && !findResult) {
      queen = nextQ;
      postions = nextPostion;
      nextPostion = [];
      nextQ = [];
      level++;
      pathQ= nextPathQ;
      nextPathQ = [];
    }
  }
  return result;
};




// findLadders("qa", "sq", ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"])
// findLadders("hot", "dog", ["hot","cog","dog","tot","hog","hop","pot","dot"])
// findLadders("kiss", "tusk", ["miss", "dusk", "kiss", "musk", "tusk", "diss", "disk", "sang", "ties", "muss"])
// findLadders("red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"])
// findLadders("a", "c", ["a", "b", "c"])
// findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
// @lc code=end

