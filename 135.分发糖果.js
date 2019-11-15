/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let prve = { score: ratings[0], count: 1, num: 1 };
  let totleCount = 1;
  let countFlag = undefined;
  for (let i = 1; i < ratings.length; i++) {
    const currentScore = ratings[i];
    let currentCount = 1;
    let plusCount = 0;
    let num = 0;

    if (currentScore > prve.score) {
      currentCount = prve.count + 1;
      countFlag = 0;
    }
    else if (currentScore < prve.score) {
      num = prve.num + 1;
      plusCount = prve.num;
      if (countFlag === 0) {
        countFlag = prve.count;
      }
    } else {
      num = 1;
      countFlag = 1
    }
    prve = {
      score: currentScore,
      count: currentCount,
      num: num
    }
    let item = currentCount + plusCount;
    totleCount += item;
    if (countFlag > 1 && item >= countFlag) {
      totleCount += item + 1 - countFlag;
      countFlag = item + 1;
    }
  }
  return totleCount;
};

// console.assert(candy([29, 51, 87, 87, 72, 12]) === 12)
// console.assert(candy([1, 2, 3, 5, 4, 3, 2, 1]) === 21)
// console.assert(candy([1, 6, 10, 8, 7, 3, 2]) === 18)
// console.assert(candy([1, 2, 87, 87, 87, 2, 1]) === 13)
// console.assert(candy([1, 3, 2, 2, 1]) === 7)
// console.assert(candy([2, 1, 0]) === 6)
// console.assert(candy([1, 0, 2]) === 5)
// console.assert(candy([1, 2, 2]) === 4)
// @lc code=end

