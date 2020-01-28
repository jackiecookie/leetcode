/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let rowLen = dungeon.length;
    let colLen = dungeon[0].length;
    let dp = [];
    for (let i = 0; i <= rowLen; i++) {
        dp[i] = new Array(colLen + 1).fill(Number.MAX_SAFE_INTEGER);
    }
    for (let i = rowLen - 1; i >= 0; i--) {
        for (let j = colLen - 1; j >= 0; j--) {
            let num = dungeon[i][j];

            let min = Math.min(
                dp[i + 1][j],
                dp[i][j + 1]);

            if (min === Number.MAX_SAFE_INTEGER) {
                min = 1;
            }
            dp[i][j] = min - num
            if (dp[i][j] < 1) {
                dp[i][j] = 1;
            }
        }
    }

    return dp[0][0]
};





// calculateMinimumHP(
//     [[1, -3, 3], [0, -2, 0], [-3, -3, -3]]
// )


// calculateMinimumHP(
//     [
//         [-2, -3, 3],
//         [-5, -10, 1],
//         [10, 30, -5]
//     ]
// )
// @lc code=end

