/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = Number.MAX_SAFE_INTEGER;
    let resGap = Number.MAX_SAFE_INTEGER;
    let len = nums.length;
    let i = 0;
    let left = 1;
    let right = len - 1;
    let currentGap = undefined;
    let currentRes = undefined;

    while (i <= len - 3) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === target) {
            return sum;
        }
        let cGap = Math.abs(target - sum);
        if (currentGap === undefined || cGap < currentGap) {
            currentGap = cGap;
            currentRes = sum;
        } 
        let moveRight = false;
        let moveLeft = false;
        if (sum > target) {
            moveRight = true;
        }
        if (sum < target) {
            moveLeft = true;
        }

        if (moveRight) {
            right--
        }
        if (moveLeft) {
            left++;
        }
        if (left >= right) {
            i++;
            left = i + 1;
            right = len - 1;
            if (currentGap < resGap) {
                resGap = currentGap;
                res = currentRes;
            }
            currentGap = undefined;
        }

    }


    return res;
};

// @lc code=end

