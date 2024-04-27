function largestSubarrayOfSum(arr, k) {

    let i=0;
    let j=0;
    let max=0;
    let sum=0;
    
    while (j < arr.length) {
        sum += arr[j]; 
        if (sum < k) {
            j++;
        } else if (k === sum) {
            const currWindowLen = j-i+1;
            max = Math.max(max, currWindowLen);
            j++;
        } else if (sum > k) {
            while (sum > k) {                
                sum -= arr[i];
                i++;
            }
            if (k === sum) {
                const currWindowLen = j-i+1;
                max = Math.max(max, currWindowLen);
            }
            j++;
        }
    }
    return max;
}

largestSubarrayOfSum([4, 1, 1, 1, 2, 3, 5], 5);

// [4, 1, 1, 1, 2, 3, 5]