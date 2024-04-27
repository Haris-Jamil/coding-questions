// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52

function minSubArrayLen(arr, count) {
    let i=0;
    let j=0;
    let sum = 0;
    let minimumLength = 0;
    
    while (j < arr.length) {
        sum += arr[j];
        if (sum < count) {
            j++;
        } else if (sum === count) {
            minimumLength = Math.min(minimumLength, j-i+1);
            j++;
        } else if (sum > count) {
            while (sum > count) {
                minimumLength = Math.min(minimumLength, j-i+1);
                sum -= arr[i];                
                i++;                
            }
            if (sum === count) {
                minimumLength = Math.min(minimumLength, j-i+1);
            }
            j++;
        }
    }
    return minimumLength;
}

minSubArrayLen([9,8,21,62,33,19], 52)