// https://leetcode.com/problems/coin-change/description/
// without memoization

function solve (coins, target, sum, path) {
    if (coins.length === 0) {
        if (sum === target) {
            return path;
        }
        return Infinity;
    }

    if (coins.length > 0) {
        if (sum > target) {
            return Infinity;
        }
    }

    return Math.min( solve(coins, target, sum + coins[0], path+1), solve(coins.slice(1), target, sum, path) );
}

coins = [1,4,10];
let target = 19;

solve(coins, target, 0, 0);