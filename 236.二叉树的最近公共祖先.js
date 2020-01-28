/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// function lowestCommonAncestor(root, p, q) {
//     if (!root || root === p || root === q) return root;
//     var resL = lowestCommonAncestor(root.left, p, q);
//     var resR = lowestCommonAncestor(root.right, p, q);
//     return (resL && resR) ? root : (resL || resR);
//   }
var lowestCommonAncestor = function (root, p, q) {
  let arr = [root];
  let lIndex = undefined;
  let rIndex = undefined;
  let queen = [];
  let flat = function (node, push, foreach) {
    if (push) {
      queen.push(node.left);

      queen.push(node.right);

    }

    if (foreach) {
      for (let index = 0; index < queen.length; index++) {
        const item = queen[index];
        if (item == null) {
          arr.push(item);
        } else {
          flat(item, true);
          let len = arr.length;
          if (item.val === q.val || item.val === p.val) {
            if (lIndex === undefined) {
              lIndex = arr.length;
            }
            else if (rIndex === undefined) {
              rIndex = arr.length;
            } else {
              return
            }
          }
          arr.push(item);
        }


      }
    }
  }
  flat(root, true, true)
  let ancestor = [];
  for (let index = lIndex; index > 0; index = Math.ceil(index / 2) - 1) {
    ancestor.push(index);
  }

  for (let index = Math.ceil(rIndex / 2) - 1; index > 0; index = Math.ceil(index / 2) - 1) {
    if (ancestor.indexOf(index) > -1) {
      return arr[index]
    }
  }

  return arr[0];
};


function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || undefined;
  this.right = right || undefined;
}
function buildNode(arr) {
  let cash = {
    0: new TreeNode(arr[0])
  }
  for (let i = 1; i < arr.length; i++) {
    let p = Math.ceil(i / 2) - 1;
    cash[i] = new TreeNode(arr[i]);
    if(cash[p].left===undefined){
      cash[p].left = cash[i];
    }else{
      cash[p].right = cash[i];
    }
  }

  return cash[0]
}
let root = buildNode([37, -34, -48, null, -100, -101, 48, null, null, null, null, -54, null, -71, -22, null, null, null, 8])
lowestCommonAncestor(root, new TreeNode(-71), new TreeNode(8))
// @lc code=end

