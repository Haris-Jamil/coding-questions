function maxSubArraySum(arr, s) {
    let max = -Infinity;
    for (let i=0; i<arr.length - s + 1; i++) {
        let currentWindowTotal = 0;
        for(let j=0 ; j<s;j++) {
            currentWindowTotal += arr[i+j];
        }
        if (currentWindowTotal > max) {
            max = currentWindowTotal;
        }
    }
    return max;
}

maxSubArraySum([2,6,9,2,1,8,5,6,3], 3);