/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.used = [];

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    let idx = this.used.indexOf(key);
    this.used.splice(idx, 1);
    this.used.push(key);
    return this.cache[key];
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.cache[key]) {
    if (this.capacity === this.used.length) {
      //删除
      let rk = this.used.shift();
      this.cache[rk] = null;
    }
    this.used.push(key);
  } else {
    let idx = this.used.indexOf(key);
    this.used.splice(idx, 1);
    this.used.push(key);
  }
  this.cache[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// var obj = new LRUCache(2)
// obj.get(2)
// obj.put(2, 1)
// obj.put(1, 1)
// obj.put(2, 3)
// obj.put(4, 1)
// obj.get(1)
// obj.get(2)
// @lc code=end

