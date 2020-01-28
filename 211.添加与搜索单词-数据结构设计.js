/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.node = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let len = word.length;
    let firstChar = word[0];
    if (!this.node[firstChar]) {
        this.node[firstChar] = new WordDictionary();
    }
    if (len === 1) {
        this.node[firstChar].last = true;
    } else {
        this.node[firstChar].addWord(word.substr(1));
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let len = word.length;
    let first = word[0];
    let node = this.node;
    if (first === '.') {
        for (const key in node) {
            if (node.hasOwnProperty(key)) {
                const dicTree = node[key];
                if (len === 1) {
                    if (dicTree.last) {
                        return true;
                    }
                } else {
                    let res = dicTree.search(word.substr(1))
                    if (res) {
                        return res
                    }
                }

            }
        }
    } else {
        let dicTree = node[first];
        if (dicTree) {
            if (len === 1) {
                return !!dicTree.last;
            } else {
                return dicTree.search(word.substr(1))
            }
        }
    }
    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


// var obj = new WordDictionary()
// obj.addWord("at")
// obj.addWord("and")
// obj.addWord("an")

// obj.addWord("add")

// obj.addWord("bat")
// // obj.addWord("an")


// var param_2 = obj.search(".")
// debugger
 // @lc code=end

