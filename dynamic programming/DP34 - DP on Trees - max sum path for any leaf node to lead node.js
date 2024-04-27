
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution 
{
    //Function to return maximum path sum from any node in a tree.
    findMaxSum(root)
    {
        const result = {res: -Infinity}
        this.solve(root, result);
        return result.res;
    }
    
    solve(root, result) {
        if (root === null) {
            return 0;
        }
        
        const leftSubtreeSum = this.solve(root.left, result);
        const rightSubtreeSum = this.solve(root.right, result);
        
        let temp = Math.max(leftSubtreeSum, rightSubtreeSum) + root.data;
        let answer = Math.max(temp, leftSubtreeSum + rightSubtreeSum + root.data);
        
        result.res = Math.max(result.res, answer);
        
        return temp;
    }
}