//https://www.geeksforgeeks.org/partition-problem-dp-18/


function equalPartition(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % 2 === 1) {
        return false;
    } else {
        return subsetSum(arr, arr.length, sum/2);
    }
    
}

function subsetSum(arr, n, sum) {

    let t = [];
    
    for (let i=0;i<n+1; i++) {
        t[i] = [];
        for (let j=0; j<sum+1; j++) {
            if (i === 0) {
                t[i][j] = false;
            }
            if (j === 0) {
                t[i][j] = true;
            }
        }
    }

    for(let i=1; i <n+1; i++) {
        for (let j=1; j < sum+1; j++) {
            if (arr[i-1] <= sum) {
                t[i][j] = t[i-1][ j - arr[i-1]] || t[i-1][j];
            } else {
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][sum];
}

let arr = [1, 5, 11, 5];

equalPartition(arr);