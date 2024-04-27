// https://leetcode.com/problems/left-and-right-sum-differences/description/

// var leftRightDifference = function(nums) {
//     const answer = [];
//     let sumLeft = 0;
//     let sumRight = 0;
//     let i = 0;
//     let j = 1;

//     while (j < nums.length) {
//         sumRight += nums[j];
//         j++;
//     }
//     answer.push(sumRight);

//     while (true) {
//         sumLeft += nums[i]
//         i++;
//         if (i === nums.length) {
//             break;
//         }
//         sumRight -= nums[i];
//         answer.push(Math.abs(sumLeft-sumRight));
//     }
//     console.log(answer);
// };



// another approach
var leftRightDifference = (nums) => {
    let leftSum = [0];
    let rightSum = [];
    const answer = [];

    for (let i = 0; i < nums.length-1; i++) {
        leftSum.push(leftSum[i] + nums[i]);
    }

    let totalSum = nums.reduce((sum, cur) => sum += cur, 0);
    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];
        rightSum.push(totalSum);        
    }

    for (let i=0; i < nums.length; i++) {
        answer.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    console.log(answer);
}

leftRightDifference([10,4,8,3])