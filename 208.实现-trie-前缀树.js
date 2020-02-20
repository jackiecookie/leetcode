/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.nodes = {};
    this.last = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let len = word.length;
    let firstChar = word[0];
    let node = null;
    if (this.nodes[firstChar]) {
        node = this.nodes[firstChar];
    } else {
        node = new Trie(firstChar);
    }
    if (len > 1) {
        node.insert(word.substr(1))
    } else {
        node.last = true;
    }
    this.nodes[firstChar] = node;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let len = word.length;
    if (len === 0) {
        return true;
    }
    let firstChar = word[0];
    if (this.nodes[firstChar]) {
        if (len === 1) {
            return this.nodes[firstChar].last;
        } else {
            return this.nodes[firstChar].search(word.substr(1))
        }

    } else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let len = prefix.length;
    if (len === 0) {
        return true;
    }
    let firstChar = prefix[0];
    if (this.nodes[firstChar]) {
        return this.nodes[firstChar].startsWith(prefix.substr(1))
    } else {
        return false;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// var obj = new Trie()
// obj.insert("apple")
// var param_2 = obj.search("apple")
// var param_3 = obj.startsWith("applea")
// @lc code=end

