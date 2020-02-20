/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let r = matrix.length;
    let cash = []
    if (r === 0) {
        return false;
    }
    let c = matrix[0].length;
    let cl = 0;
    let ch = c;
    let rl = 0;
    let rh = r;

    let search = function (cl, ch, rl, rh) {
        let cmid = cl + ch >> 1;
        let rmid = rl + rh >> 1;
        let num = matrix[rmid][cmid];
        if (num === target) {
            return true;
        }
        if (rl >= rh || cl >= ch || cash[`i:${cmid}j:${rmid}`]) {
            return false;
        }
        cash[`i:${cmid}j:${rmid}`] = true;
        if (num < target) {
            return search(cl, ch, rmid, rh) || search(cmid, ch, rl, rh)
        } else {
            return search(cl, ch, rl, rmid) || search(cl, cmid, rl, rh)
        }
    }

    let res =  search(cl, ch, rl, rh);
    return res;

};
// console.assert(searchMatrix([
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ], 26)===true)
// console.assert(searchMatrix([
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ], 20)===false)

// @lc code=end

