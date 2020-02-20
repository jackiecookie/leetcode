/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        let subNums = nums.slice(left, right+1);
        let sum = sumArr(subNums);
        if (sum >= s) {
            if (right - left + 1 < result) {
                result = right - left + 1;
            }
            left++;
        } else {
            right++;
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result;

};



function sumArr(arr) {
    var s = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        s += arr[i];
    }
    return s;
}


// minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])
// minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
// @lc code=end

