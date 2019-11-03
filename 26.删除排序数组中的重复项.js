/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len===0){
        return 0;
    }
    for (let index = 1; index < len;) {
        const num = nums[index];
        if(num==nums[index-1]){
            nums.splice(index,1);
            len --;
        }else{
            index++;
        }
    }

    return nums.length;
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// @lc code=end

