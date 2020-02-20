/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */

function SegmentTreeNode(start, end) {
    this.start = start;
    this.end = end;
    this.val = null;
    this.left = null;
    this.right = null;
}


var NumArray = function (nums) {
    let buildTree = function (nums, start, end) {
        if (start > end) return null
        let node = new SegmentTreeNode(start, end);
        if (start == end) {
            node.val = nums[end];
            return node;
        }
        let mid =parseInt(start+(end-start)/2) 
        // let mid = parseInt((start + (end - start)) /2);
        node.left = buildTree(nums, start, mid);
        node.right = buildTree(nums, mid + 1, end);
        node.val = node.left.val + node.right.val;
        return node;
    }
    this.node = buildTree(nums, 0, nums.length - 1);
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    let update = function (node, i, val) {
        if (node.start === node.end && node.end === i) {
            node.val = val;
            return node;
        }
        let mid =parseInt(node.start+(node.end-node.start)/2) 
        if (i <= mid) {
            update(node.left, i, val)
        } else {
            update(node.right, i, val)
        }

        node.val = node.left.val + node.right.val;
    }

    update(this.node, i, val);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let sumRange = function (node, start, end) {
        if (node.end == end && node.start == start) {
            return node.val;
        }
        let mid =parseInt(node.start+(node.end-node.start)/2) 
        if (end <= mid) {
            return sumRange(node.left, start, end);
        }
        else if (start >= mid + 1) {
            return sumRange(node.right, start, end);
        } else {
            return sumRange(node.right, mid + 1, end) + sumRange(node.left, start, mid);
        }
    }

    return sumRange(this.node, i, j);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */


// let a = new NumArray([0, 9, 5, 7, 3])

// a.sumRange(4, 4)
// a.sumRange(2, 4)
// a.sumRange(3, 3)
// @lc code=end

