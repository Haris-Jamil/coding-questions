// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.



// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null; 
//   let sum = 0;
//   for (let i=0;i<num;i++) {
//       sum += arr[i];
//   }
//   let max = sum;
//   for (let i=num;i<arr.length;i++) { 
//     sum = sum + arr[i] - arr[i - num];
//     max = Math.max(max, sum);
//   }
//   return max;
// }

// another approach
function maxSubarraySum(arr, k) {
    let i=0;
    let j=0;
    let max = -Infinity;
    let sum = 0;
    while (j < arr.length) {
        sum += arr[j];

        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 == k) {
            max = Math.max(max, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }
    return max;
}


// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null