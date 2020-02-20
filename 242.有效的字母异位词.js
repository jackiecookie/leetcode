/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    if(sLen!=tLen){
      return false;
    }
    let cache = {};
    for (let i = 0; i < sLen; i++) {
      let char = s[i];
      if(!cache[char]){
        cache[char] = 0;
      }
      cache[char]++;
    }

    for (let i = 0; i < tLen; i++) {
      let char = t[i];
      if(!cache[char]){
        return false;
      }
      cache[char]--;
    }


    for (const key in cache) {
      if (cache.hasOwnProperty(key)) {
        const count = cache[key];
        if(count!=0){
          return false
        }
      }
    }
    return true;
};

// isAnagram("rat","car")
// @lc code=end

