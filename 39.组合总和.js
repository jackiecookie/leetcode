/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let len = candidates.length;
    let goGetIt = function (index, arr) {
        for (; index < len;) {
            const candidate = candidates[index];
            goGetIt(index + 1, arr.slice(0))
            if (candidate <= target) {
                arr.push(candidate);
                let remainder = target - arr.reduce(function (prev, curr, idx, arr) {
                    return prev + curr;
                });
                if (remainder === 0) {
                    result.push(arr)
                    return;
                } else if (remainder < candidate) {
                    return
                }

            } else {
                return;
            }



        }
    }
    candidates.sort((a, b) => {
        return a - b
    })
    goGetIt(0, [])

    return result;
};

// combinationSum([2, 3, 6, 7], 7)
// combinationSum([2, 3, 5], 8)

// @lc code=end

