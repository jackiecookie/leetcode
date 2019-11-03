/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    if(len===0){
        return 0;
    }
    nums.sort((a,b)=>a-b);
    for (let index = 0; index < len;) {
        const num = nums[index];
        if(num>val){
            break;
        }else if(num===val){
            nums.splice(index,1);
            len--;
        }else{
            index++;
        }
    }
};
// @lc code=end

