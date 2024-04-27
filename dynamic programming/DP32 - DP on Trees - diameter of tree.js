// https://leetcode.com/problems/diameter-of-binary-tree/

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
var diameterOfBinaryTree = function(root) {
    let result = { res: -Infinity }
    solve(root, result);
    return result.res - 1;
};

var solve = function(root, result) {
    if (root === null) {
        return 0;
    }
    let leftHeight = solve(root.left, result);
    let rightHeight = solve(root.right, result);

    let temp = Math.max(leftHeight, rightHeight) + 1;
    let answer = Math.max(temp, 1 + leftHeight + rightHeight);
    result.res = Math.max(result.res, answer)

    return temp;
}