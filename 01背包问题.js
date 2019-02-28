let maxW = 0;

//回溯算法
function backTrackingf(i, cw, items, n, w) {
  if (cw == w || i == n) {
    // cw==w 表示装满了 ;i==n 表示已经考察完所有的物品
    if (cw > maxW) maxW = cw;
    return;
  }
  f(i + 1, cw, items, n, w);
  if (cw + items[i] <= w) {
    // 已经超过可以背包承受的重量的时候，就不要再装了
    f(i + 1, cw + items[i], items, n, w);
  }
}

function dynamicProgrammingf(num, cw, items, n, w) {
  let state = [[]];
  state[0][0] = true;
  state[0][items[0]] = true;
  for (let i = 1; i < num; i++) {
    for (let j = 0; j <= w; j++) {
      //不放入背包
      if (state[i - 1][j] == true) {
        state[i][j] = true;
      }
    }
    let cp = items[i];
    for (let j = 0; j <= cp; j++) {
      //放入背包
      if (state[i - 1][j] == true) {
        state[i][j + cp] = true;
      }
    }
  }

  for (let i = w; i >= 0; i--) {
    if (state[n - 1][i] == true) {
      return i;
    }
  }
}
//动态规划
let a = [5, 2, 1];
f(0, 0, a, a.length, 7);

/*

>>>5
>>>2
>>>1
<<<1
<<<2 1+2


*/
