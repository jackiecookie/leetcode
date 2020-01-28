/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let hashTable = {};
    let rd = new Array(numCourses).fill(0);
    let result = [];
    for (let i = 0; i < prerequisites.length; i++) {
        let [hx,qx] = prerequisites[i];
        if(!hashTable[qx]){
            hashTable[qx] = [];
        }
        rd[hx]++;
        hashTable[qx].push(hx)
    }
    let queen = [];
    rd.map((x,idx)=>{
        if(x===0){
            queen.push(idx);
        }
    });

    while (queen.length) {
        let kc = queen.shift();
        result.push(kc);
        let list = hashTable[kc];
        if(list){
            list.map((num)=>{
                rd[num]--;
                if(rd[num]===0){
                    queen.push(num);
                }
            })
        }
    }
    for (let i = 0; i < rd.length; i++) {
        const num = rd[i];
        if(num>0){
            return [];
        }
    }
    return result
};

// findOrder(4,[[1,0],[2,0],[3,1],[3,2]])
// @lc code=end

