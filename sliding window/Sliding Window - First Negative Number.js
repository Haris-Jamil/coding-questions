function firstNegativeNumber(arr, k) {
    let i=0;
    let j=0;
    const queue = [];
    
    while (j < arr.length) {
        if (arr[j] < 0) {
            queue.push(arr[j]);
        }
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 === k) {
            if (queue.length === 0) {
                console.log(0);
                j++;
            } else {
                if (arr[i]===queue[0]) {
                    console.log(queue.shift());   
                } else {
                    console.log(queue[0]);
                }  
                i++;
                j++;
            }
        }
    }
}

firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3);