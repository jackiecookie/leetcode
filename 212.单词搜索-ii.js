/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let idx = 0;
    let trees = words.reduce((arr, word) => {
        let tree = new wordTree()
        tree.addWord(word, idx);
        arr.push(tree);
        idx++;
        return arr;
    }, []);
    let result = [];
    // let treeUsed = new Array(idx).fill(false);
    let goGetIt = function (used, trees, i, j) {
        if (i >= 0 && j >= 0 && i < board.length && j < board[0].length && !used[`i:${i},j:${j}`]) {
            let char = board[i][j];
            let nextTree = [];
            for (let index = 0; index < trees.length; index++) {
                let tree = trees[index];
                let subTree = tree.node[char];
                if (subTree) {
                    if (subTree.last) {
                        if (subTree.idx !== undefined) {
                            result.push(words[subTree.idx])
                        }
                        subTree.idx = undefined;
                    } else {
                        nextTree.push(subTree)
                    }
                }
            }
            if (nextTree.length) {
                used[`i:${i},j:${j}`] = true;
                goGetIt(used, nextTree, i + 1, j);
                goGetIt(used, nextTree, i, j + 1);
                goGetIt(used, nextTree, i - 1, j);
                goGetIt(used, nextTree, i, j - 1);
                used[`i:${i},j:${j}`] = false;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            goGetIt({}, trees, i, j);
        }
    }

    return result;
};

var wordTree = function () {
    this.node = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
wordTree.prototype.addWord = function (word, idx) {
    let len = word.length;
    let firstChar = word[0];
    if (!this.node[firstChar]) {
        this.node[firstChar] = new wordTree();
    }
    if (len === 1) {
        this.node[firstChar].last = true;
        this.node[firstChar].idx = idx;
    } else {
        this.node[firstChar].addWord(word.substr(1), idx);
    }
};


// findWords([
//     ['o', 'a', 'a', 'n'],
//     ['e', 't', 'a', 'e'],
//     ['i', 'h', 'k', 'r'],
//     ['i', 'f', 'l', 'v']
// ], ["oath", "pea", "eat", "rain"])

// @lc code=end

