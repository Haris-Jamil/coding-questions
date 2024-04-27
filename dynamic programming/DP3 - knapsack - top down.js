
function knapsack(wt, val, W, n) {

    const t = [];

    for (let i=0; i<n+1; i++) {
        t[i] = [];
        for (let j=0; j<W+1; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else {
                t[i][j] = undefined
            }
        }
    }

    for (let i=1; i< n+1; i++) {
        for (let j=1; j<W+1; j++) {

            if (wt[i-1] <= j) {
                t[i][j] = Math.max(val[i-1] + t[i-1][ j - wt[i-1]], t[i-1][j]);
            } else {
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][W]
 
}


let itemWeight = [1, 3, 4, 5]
let itemValue = [1, 4, 5, 7];
let W = 7;

knapsack(itemWeight, itemValue, W, itemWeight.length)