/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿的个数
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (39.80%)
 * Total Accepted:    8.4K
 * Total Submissions: 20.6K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给定一个由 '1'（陆地）和
 * '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 *
 * 示例 1:
 *
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * 输出: 3
 *
 *
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  //将相接的岛屿设置为“0”
  let markAdjacentIslandsToZero = function(i, j, grid) {
    if (i < 0 || j < 0 || !grid[i] || !grid[i][j] || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    markAdjacentIslandsToZero(i + 1, j, grid);
    markAdjacentIslandsToZero(i - 1, j, grid);
    markAdjacentIslandsToZero(i, j + 1, grid);
    markAdjacentIslandsToZero(i, j - 1, grid);
  };
  let len = grid.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        markAdjacentIslandsToZero(i, j, grid);
        result++;
      }
    }
  }
  return result;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]);
