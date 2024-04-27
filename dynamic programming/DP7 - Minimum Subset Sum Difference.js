// https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/

function solve(arr, n, range) {
    let t = [];

    for(let i=0; i < n+1; i++) {
        t[i] = [];
        for (let j=0; j < range+1; j++) {
            if (i===0) {
                t[i][j] = false;
            }
            if (j===0) {
                t[i][j] = true
            }
        }
    }

    for (let i=1; i < n+1; i++) {
        for (let j =1; j < range+1; j++) {
            if (arr[i-1] <= j) {
                t[i][j] = t[i-1][j - arr[i-1]] || t[i-1][j];
            } else {
                t[i][j] = t[i-1][j];                
            }
        }
    }
    let possibleSums = [];
    for (let c = 0; c < t[n].length; c++) {
        if (t[n][c]) {
            possibleSums.push(c)
        }
    }
    const halfLength = Math.ceil(possibleSums.length / 2);
    possibleSums = possibleSums.slice(0, halfLength);

    let min = Infinity;
    for (let i = 0 ; i <possibleSums.length; i++) {
        const diff = range - (2 * possibleSums[i]);
        min = Math.min(min, diff);
    }

    return min;
}



let arr = [1,6,11,5];

let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];
}

solve(arr, arr.length, sum);