/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.followMap = {};    // userId => [followeeId, ...]
  this.tweetMap = {};     // userId => [tweetId, ...]
  
  this.time = 0;
  this.tweetTimeMap = {}; // tweetId => postTime
  
  this.newArrayForKey = function(map, key){
      if(!map[key])
          map[key] = [];
  }
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.newArrayForKey(this.tweetMap, userId);
    
  if(this.tweetMap[userId].indexOf(tweetId) === -1){
      this.tweetMap[userId].push(tweetId);
      this.tweetTimeMap[tweetId] = this.time ++;
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  var list = [];
    
  if(this.tweetMap[userId])
      list = list.concat(this.tweetMap[userId]);
  for(var followeeKey in this.followMap[userId]){
      var followeeId = this.followMap[userId][followeeKey];
      
      if(followeeId != userId && this.tweetMap[followeeId])
          list = list.concat(this.tweetMap[followeeId]);
  }
  
  that = this;
  return list.sort(function (a, b){
      return that.tweetTimeMap[b] - that.tweetTimeMap[a];
  }).slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  this.newArrayForKey(this.followMap, followerId);
    
  if(this.followMap[followerId].indexOf(followeeId) === -1)
      this.followMap[followerId].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.newArrayForKey(this.followMap, followerId);
    
  var index = this.followMap[followerId].indexOf(followeeId);
  if(index !== -1)
      this.followMap[followerId].splice(index, 1);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

