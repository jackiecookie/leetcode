/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// var findTargetSumWays = function(nums, S) {
//   //dp代表有0个数字时候出现的sum
//   let num = 0;
//   let len = nums.length;
//   function DFS(i, s) {
//     if (i === len) {
//       if (s === S) {
//         ++num;
//       }
//       return;
//     }
//     DFS(i + 1, s + nums[i]);
//     DFS(i + 1, s - nums[i]);
//   }
//   DFS(0, 0);
//   return num;
// };

var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((accumulator, num) => accumulator + num, 0);
    if (sum < S) {
        return 0;
    }
    
    let map = new Map();
    map.set('-1-0', 1);
    let prevResult = new Set();
    prevResult.add(0);
    for (let i = 0; i < nums.length; i++) {
        let resultSet = new Set();
        for (let sum of prevResult) {
            let newResult1 = sum + nums[i];
            let newResult2 = sum - nums[i];
            resultSet.add(newResult1);
            resultSet.add(newResult2);
            
            if (map.has(`${i}-${newResult1}`)) {
                map.set(`${i}-${newResult1}`, map.get(`${i}-${newResult1}`) + map.get(`${i-1}-${sum}`));
            } else {
                map.set(`${i}-${newResult1}`, map.get(`${i-1}-${sum}`));                
            }
            
            if (map.has(`${i}-${newResult2}`)) {
                map.set(`${i}-${newResult2}`, map.get(`${i}-${newResult2}`) + map.get(`${i-1}-${sum}`));
            } else {
                map.set(`${i}-${newResult2}`, map.get(`${i-1}-${sum}`));                
            }            
        }
        prevResult = resultSet;
    }
    
    return map.has(`${nums.length - 1}-${S}`) ? map.get(`${nums.length - 1}-${S}`) : 0;
};

findTargetSumWays([1, 1, 1, 1, 1], 3);
