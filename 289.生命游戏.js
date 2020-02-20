/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let row = board.length;
  let col = board[0].length;
  let helper = function(ro,co,copy){
      //方法一：通过循环计算细胞周围活细胞数量
      // let count = 0;
      // for(let i = ro-1;i<=ro+1;i++){
      //     for(let j = co-1;j<=co+1;j++){
      //         if(i>=0&&j>=0&&i<row&&j<col){
      //            if(!(i== ro&&j==co)) count+=copy[i][j];
      //         }
      //     }
      // }
      //方法二：仅需计算8个细胞求和，枚举速度更显著
      let count = 0
      if(ro > 0) {
        count += copy[ro-1][co]
        if(co > 0) {
          count += copy[ro-1][co-1]
        }
        if(co < col-1) {
          count += copy[ro-1][co+1]
        }
      }
      if(ro < row - 1) {
        count += copy[ro+1][co]
        if(co > 0) {
          count += copy[ro+1][co-1]
        }
        if(co < col-1) {
          count += copy[ro+1][co+1]
        }
      }
      if(co > 0) {
        count += copy[ro][co-1]
      }
      if(co < col-1) {
        count += copy[ro][co+1]
      }
      //根据状态进行归类，true为状态变化的，即死变活，活变死
      if(copy[ro][co] == 1){
         if(count < 2) {
             return true;
         }else if(count > 3) {
             return true;
         }
      }
      if(copy[ro][co] == 0&&count == 3) return true;
      return false;
  }
  let copy = JSON.parse(JSON.stringify(board));
  for(let i = 0;i<row;i++){
      for(let j = 0;j<col;j++){
          if(helper(i,j,copy)){
              //直接通过异或运算变更状态
              board[i][j]^=1
          }
      }
  }
};

// @lc code=end

