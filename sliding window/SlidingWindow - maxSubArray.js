// function maxSubArraySum(arr, num) {    
//     let max = 0;
//     if (arr.length == 0 || num > arr.length) return null;
//     for (let i=0;i<num;i++) {
//         max += arr[i];
//     }
//     let tempSum = max;
//     for (let i=num;i<arr.length; i++) {
//         tempSum = max + arr[i] - arr[i-num];
//         max = Math.max(tempSum, max);
//     }
//     console.log(max);
// }

function maxSubArray(arr, k) {
    let i=0;
    let j=0;
    let max = -Infinity;
    let sum = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (j-i+1 < k) {
            j++
        } else if (j-i+1 === k) {
            max = Math.max(sum, max);
            sum -= arr[i];
            i++;            
            j++;
        }
    }
    return max;
}


maxSubArraySum([2,6,9,2,1,8,5,6,3], 3);
maxSubArraySum([100, 200, 300, 400], 2);