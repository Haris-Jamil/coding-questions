
function solve(coins, sum, n) {

    let t = [];

    for (let i=0; i < n+1; i++) {
        t[i] = [];
        for (let j=0; j < sum+1; j++) {
            if (i===0) {
                t[i][j] = 0;    
            }
            if (j===0) {
                t[i][j] = 1;
            }
        }
    }

    for (let i=1; i<n+1; i++) {
        
        for (let j=1; j<sum+1; j++) {    
            if (coins[i-1] <= j) {
                t[i][j] = t[i][j - coins[i-1]] + t[i-1][j]
            } else {
                t[i][j] = t[i-1][j]
            }
        }
    }

    return t[n][sum];
}

let coins = [1,2,3];
let sum = 2;

solve(coins, sum, coins.length)

