function mcm(arr, i, j) {
    
    let min = Infinity;

    if (i >= j) {
        return 0;
    }

    if (t[i][j] !== -1) return t[i][j];

    for (let k=i; k<j; k++) {
        let answer = mcm(arr, i, k) + (arr[i-1] * arr[k] * arr[j]) + mcm(arr, k+1, j)
        min = Math.min(min, answer)
    }

    return t[i][j] = min;
}

let arr = [40, 20, 30, 10, 30];
let n = arr.length;

// memoization table initialization
const t = [...Array(n)].map((a) => Array(n).fill(-1))

mcm(arr, 1, n-1);