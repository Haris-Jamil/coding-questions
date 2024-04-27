//Q1: Given an array Arr[] and a difference diff, find the number of subsets that array can be divided so that each the difference between the two subset is the given diff.



function solve(arr, diff) {

    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    const s1 = (sum + diff) / 2;  
    return countOfSubsetSumWitSum(arr, arr.length, s1);
}

function countOfSubsetSumWitSum (arr, n, sum) {
    let t = [];

    for (let i=0; i < n+1; i++) {
        t[i] = [];
        for (let j=0; j < sum+1; j++) {
            if (i === 0) {
                t[i][j] = 0;
            }
           if (j === 0) {
                t[i][j] = 1;
           }
        }
    }

    for (let i=1; i < n+1; i++) {
        for (let j=1; j < sum+1; j++) {
            if (arr[i-1] <= j) {
                t[i][j] = t[i-1][j- arr[i-1]] + t[i-1][j];
            } else {
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][sum];
}


let arr = [1, 1, 2, 3];
let diff = 1;

solve(arr, diff);