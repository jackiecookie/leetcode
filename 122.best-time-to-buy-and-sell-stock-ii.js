/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (50.75%)
 * Total Accepted:    36.4K
 * Total Submissions: 71.3K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 *
 *
 * 示例 2:
 *
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 *
 *
 * 示例 3:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 思路,根据后面几天的价格判断在当天买进的话是否会有收益,
// 如果有收益,继续持有,如果接下来的时间里指数出现回落的话立马卖掉。如果没有收益就不应该买
var maxProfit = function(prices) {
  let len = prices.length;
  let result = 0;
  for (let i = 0; i < len; ) {
    let prevPrice = prices[i];
    let buyInThisDay = false;
    let maxSellPrice = 0;
    let sellsIndex = -1;
    let j = i + 1;
    for (; j < len; j++) {
      let nextPrice = prices[j];
      //如果第二天的价格比前一天的低,在前一天就不应该买
      if (nextPrice <= prevPrice) {
        break;
      } else {
        buyInThisDay = true;
        //开始涨了,考虑什么时候卖
        if (nextPrice >= maxSellPrice) {
          //再涨,看看下一天
          maxSellPrice = nextPrice;
          sellsIndex = j;
        } else {
          //指数回落可以卖了
          break;
        }
      }
    }
    if (!buyInThisDay) {
      i++;
    } else if (maxSellPrice>0) {
      result += maxSellPrice - prevPrice;
      if (sellsIndex > 0) {
        i = sellsIndex + 1;
      } else {
        i++;
      }
    }
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));


