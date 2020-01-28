/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let hash = {};
    let v = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const char1 = t[i];
        if (!hash[char]) {
            if (v[char1]) {
                return false;
            }
            hash[char] = char1;
            v[char1] = true;
        } else {
            let res = hash[char] == char1;
            if (!res) {
                return res;
            }
        }
    }
    return true;
};

// isIsomorphic("ab", "aa")
// isIsomorphic("foo","bar")

// @lc code=end

