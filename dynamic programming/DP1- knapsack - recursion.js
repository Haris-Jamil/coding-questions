
function knapsack(wt, val, W, n) {
    if (n===0 || W === 0) {
        return 0;
    } 

    if (wt[n-1] <= W) {
        return Math.max(val[n-1] + knapsack(wt, val, W - wt[n-1], n-1), knapsack(wt, val, W, n-1))
    } else {
         return knapsack(wt, val, W, n-1);
    }
}


let itemWeight = [1, 3, 4, 5]
let itemValue = [1, 4, 5, 7];
let W = 7;
knapsack(itemWeight, itemValue, W, itemWeight.length)