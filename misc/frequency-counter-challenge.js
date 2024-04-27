// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2){
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');
    
    if (arr1.length !== arr2.length) false;
    
    const lookup = {};
    
    for (let i=0; i<arr1.length; i++) {
        const key = arr1[i];
        lookup[key] = (lookup[key] || 0) + 1;
    }
    
    for (let i=0;i<arr2.length; i++) {
        let key = arr2[i];
        if (!lookup[key]){
            return false;
        }
        lookup[key]--;
    }
    return true;
}

sameFrequency(22,222)