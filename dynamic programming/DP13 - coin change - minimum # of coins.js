
function solve(arr, n, sum) {
    let t = [];

    for (let i=0; i < n+1; i++) {
        t[i] = [];
        for (let j=0; j < sum+1; j++) {
            if (i === 0) {
                t[i][j] = Infinity;
            }
            if (j === 0) {
                t[i][j] = 0
            }
        }
    }

    for (let i=1; i<n+1; i++) {
        for (let j=1; j<sum+1; j++) {
            if (arr[i-1] <= j) {
                t[i][j] = Math.min(t[i][ j - arr[i-1]] + 1, t[i-1][j]) 
            } else {
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][sum]
    
}

let arr = [1, 2, 3, 4, 1, 10, 5, 9];
let sum = 5;

solve(arr, arr.length, sum);