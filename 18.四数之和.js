/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let len = nums.length;
    nums.sort((a, b) => {
        return a - b
    });
    if (len === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < len - 3; i++) {
        let numi = nums[i];
        if (i > 0 && numi === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            let numj = nums[j];
            if (j != i + 1 && numj === nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = len - 1;
            let twoSumTarget = target - numi - numj;
            while (left < right) {
                let currentTwoSum = nums[left] + nums[right];
                if (twoSumTarget === currentTwoSum) {
                    result.push([numi, numj, nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                }
                else if (twoSumTarget > currentTwoSum) {
                    left++;
                } else {
                    right--;
                }
            }

        }

    }
    return result;
};

// fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9)
// @lc code=end

