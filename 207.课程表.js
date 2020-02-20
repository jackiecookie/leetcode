/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let hashTable = {};
    let rd = new Array(numCourses).fill(0);
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
            queen.push(idx)
        }
    });

    while (queen.length) {
        let kc = queen.shift()
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
            return false;
        }
    }
    return true
};

// canFinish(2,[[1,0]] )
// @lc code=end

