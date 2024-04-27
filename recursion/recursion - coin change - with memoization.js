
let memo = new Map();

function solve (coins, target, sum, path) {

    let key = `${coins.length}-${sum}-${path}`;
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

    if (memo.has(key)) {
        return memo.get(key)
    }

    let count = Math.min( solve(coins, target, sum + coins[0], path+1), solve(coins.slice(1), target, sum, path) );
    memo.set(key, count)
    return count;
}

coins = [1,1,2,4];
let target = 16;

solve(coins, target, 0, 0);