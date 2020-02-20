/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  let q = [];
  let hq = [0];
  let result = [];
  for (let i = 0; i < buildings.length; i++) {
    let building = buildings[i];
    let [x, y, h] = building;
    let _h = -h
    q.push({
      x: x,
      h,
      start: true
    });
    q.push({
      x: y,
      h: _h,
      start: false
    })
  }

  q = q.sort((a, b) => {
    let r = a.x - b.x;
    if (r === 0) {
      return b.h - a.h
    }
    return r;
  })
  let maxheight = 0;
  while (q.length) {
    let point = q.shift();
    point.h = Math.abs(point.h)
    let isStart = point.start;
    if (isStart) {
      hq.push(point.h);
      let cMax = Math.max(...hq);
      if (cMax > maxheight) {
        maxheight = cMax;
        result.push([point.x, point.h]);
      }
    }
    else {
      hq.splice(hq.indexOf(point.h), 1);
      let cMax = Math.max(...hq);
      if (cMax < maxheight) {
        maxheight = cMax;
        result.push([point.x, cMax]);
      }
    }
  }

  return result;
};

// getSkyline([[0, 5, 7], [5, 10, 7], [5, 10, 12], [10, 15, 7], [15, 20, 7], [15, 20, 12], [20, 25, 7]])
// getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]])
// getSkyline([[2, 9, 10], [9, 12, 15]])
// getSkyline([[0, 2, 3], [2, 5, 3]])
// getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])
// @lc code=end

