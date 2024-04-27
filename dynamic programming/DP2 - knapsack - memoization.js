
function knapsack(wt, val, W, n) {
    if (n===0 || W === 0) {
        return 0;
    } 

    if (t[n][W] !== -1) {
        return t[n][W]
    }

    if (wt[n-1] <= W) {
        return t[n][W] = Math.max(val[n-1] + knapsack(wt, val, W - wt[n-1], n-1), knapsack(wt, val, W, n-1))
    } else {
         return t[n][W] = knapsack(wt, val, W, n-1);
    }
}


let itemWeight = [1, 3, 4, 5]
let itemValue = [1, 4, 5, 7];
let W = 7;

var t = [];
for (let i =0 ; i <itemWeight.length+1; i++) {
    t[i] = [];
    for (let j=0; j < W+1; j++) {
        t[i][j] = -1;
    }
}

knapsack(itemWeight, itemValue, W, itemWeight.length)