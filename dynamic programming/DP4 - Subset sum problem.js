// returns true if array contains a subset with the provided sum else return false

function subsetSum(arr, n, sum) {
    const t = [];
    
    for (i=0; i < n+1; i++) {
        t[i] = [];
        for (j=0; j < sum+1; j++) {
            if (i===0) {
                t[i][j] = false;
            }
            if (j===0) {
                t[i][j] = true;
            }
        }
    }

    for (let i=1; i < n+1; i++) {
        for(let j=1; j < sum+1; j++) {

            if (arr[i-1] <= j) {
                t[i][j] = t[i-1][j - arr[i-1] ] || t[i-1][j];
            } else {
                t[i][j] = t[i-1][j];
            }
            
        }
    }
    return t[n][sum];
    
}




let arr = [2,3,7,8,10]
let sum = 11;

subsetSum(arr, arr.length, sum);