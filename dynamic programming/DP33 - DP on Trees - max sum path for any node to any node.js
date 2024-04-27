// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    const result = {res: -Infinity}
    solve(root, result);
    return result.res;
};

var solve = function(root, result) {
    if (root === null) {
        return 0;
    }

    let leftSubtreeSum = solve(root.left, result);
    let rightSubtreeSum = solve(root.right, result);

    let temp = Math.max(leftSubtreeSum, rightSubtreeSum) + root.val;
    temp = Math.max(temp, root.val);

    let answer = Math.max(temp, leftSubtreeSum + rightSubtreeSum + root.val);

    result.res = Math.max(result.res, answer);

    return temp;
}