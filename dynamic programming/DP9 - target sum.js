// https://leetcode.com/problems/target-sum/description/

function countOfSubsetSumWitSum (arr, n, sum) {
    let t = [];

    let zeroCount = 0;
    for (let i=0; i< arr.length; i++) {
        if (arr[i] === 0) zeroCount++;
    }

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
            if (arr[i-1] > j || arr[i-1] === 0) {
                t[i][j] = t[i-1][j];
            } else {                
                t[i][j] = t[i-1][j- arr[i-1]] + t[i-1][j];
            }
        }
    }

    return Math.pow(2, zeroCount) * t[n][sum];
}

var findTargetSumWays = function(arr, diff) {
     let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    if(sum < diff) return 0;
    if((sum+diff)<0 || ((sum+diff) % 2) != 0) return 0;

    const s1 = (sum + diff) / 2;    

    return countOfSubsetSumWitSum(arr, arr.length, s1);
};


let arr = [0,0,1];
let diff = 1;

findTargetSumWays(arr, diff)