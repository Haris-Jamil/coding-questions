function maxOfSubArrays(arr, k) {
    let i=0;
    let j=0;
    let queue = [];
    let maxArr = [];

    if (k > arr.length) {
        return Math.max(...arr);
    }

    while (j < arr.length) {

        // calculation
        while (queue.length > 0 && queue[queue.length -1] < arr[j]) {
            queue.pop();
        }
        queue.push(arr[j]);
        
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 == k) {

            // answer
            maxArr.push(queue[0]);
            
            //slide window
            if (arr[i] === queue[0]) {
                queue.shift();
            }
            i++;
            j++;
        }
    }
    return maxArr;
}

// maxOfSubArrays([1, 3, 23, -1, -3, -10, 5, 3, 6, 8, 2, 7], 3);
// maxOfSubArrays([1, 3, -1, -3, 5, 3, 6, 7], 3);

maxOfSubArrays([1, 3, 23, -1, -3, -10, 5, 3, 6, 8, 2, 7], 13);