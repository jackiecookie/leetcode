/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// var wordBreak = function (s, wordDict) {
//   let queen = [];
//   let nextQ = [];
//   let pathQ = [[]];
//   let nextPathQ = [];
//   let dic = new Set(wordDict);
//   let result = [];
//   while (queen.length || !result.length) {
//     let start = queen.pop();
//     let path = pathQ.pop();
//     if(!path&&!start){
//       return [];
//     }
//     start = start || 0;
//     let itemQ = [];
//     for (i = 0; i + start < s.length; i++) {
//       const str = s.substr(start, i + 1);
//       if (dic.has(str)) {
//         let index = start + i + 1;
//         if (index >= s.length) {
//           result.push([...path, str].join(' '))
//         } else {
//           nextPathQ.push([...path, str])
//           itemQ.push(index);
//         }
//       } 
//     }
//     nextQ.push(...itemQ)
//     if (queen.length === 0) {
//       queen = nextQ;
//       nextQ = [];
//       pathQ.push(...nextPathQ);
//       nextPathQ = [];
//     }
//   }

//   return result;
// };


var wordBreak = function (s, wordDict) {
  wordDict = new Set(wordDict);
  var res = [];
  var from = [];
  from[0] = [0];
  for (var i = 1; i <= s.length; i++) {
    from[i] = [];
    for (var j = 0; j < i; j++) {
      if (from[j].length && wordDict.has(s.substring(j, i))) {
        from[i].push(j);
      }
    }
  }
  build(s.length, '');
  return res;

  function build(idx, suffix) {
    if (!idx) return res.push(suffix);
    from[idx].forEach(function(from) {
      build(from, suffix === '' ? s.substring(from, idx) : s.substring(from, idx) + ' ' + suffix);
    })
  }
};
// wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]);
// wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]);
// wordBreak("pineapplepenapple",["apple", "pen", "applepen", "pine", "pineapple"])

// @lc code=end

