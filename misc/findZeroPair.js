function findZeroPair(arr) {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        const result = arr[left] + arr[right];
        if (result === 0) {
            return [arr[left], arr[right]];
        } else if (result < 0) {
            left++;
        } else if (result > 0) {
            right--;
        }
    }
    return [];
}

findZeroPair([-4,-3,-2,-1,0,2,5,8,10]);