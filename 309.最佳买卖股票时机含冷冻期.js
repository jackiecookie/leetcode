/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (42.37%)
 * Total Accepted:    2K
 * Total Submissions: 4.5K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 
 * 
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 
 * 示例:
 * 
 * 输入: [1,2,3,0,2]
 * 输出: 3 
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**思路:每天可以进行三种操作
   * 1：买入 = max(buy[i-1],rest[i-1] - price[i])
   * 2：卖出 = buy[i-1] + price[i]
   * 3：休息(什么都不干,冷冻期) = max(rest[i-1],sell[i-1],buy[i-1])
   */

  let buy = -Number.MAX_SAFE_INTEGER;
  let sell = 0;
  let rest = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    let prveBuy = buy;
    let prveSell = sell;
    let prveRest = rest;
    let price = prices[i];
    buy = Math.max(prveBuy, prveRest - price);
    sell = prveBuy + price;
    rest = Math.max(prveRest, prveSell, prveBuy);
  }

  return Math.max(sell, rest)
};


maxProfit([1, 2, 3, 0, 2])

