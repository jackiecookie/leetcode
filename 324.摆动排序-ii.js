/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    let mid = nums.length>>1;
    mid+=nums.length%2==0?0:1;
    let left = nums.slice(0,mid);
    let right = nums.slice(mid);

    for (let i =0; i < nums.length; i++) {
      if(i%2 == 0){
        nums[i] = left.pop();
      }else{
        nums[i] = right.pop();
      }
    }

    return nums;


};


// wiggleSort([1,5,1,1,6,4])
// @lc code=end

