function mcm(arr, i, j) {

    let min = Infinity;
    
    if (i >= j) {
        return 0;
    }
    
    for (let k=i; k < j ; k++) {
        let multiplicationCount = mcm(arr, i, k) + (arr[i-1] * arr[k] * arr[j]) +mcm(arr, k+1, j);
        min = Math.min(multiplicationCount, min);
    }
    return min;
}

let arr = [40, 20, 30, 10, 30];
let n = arr.length;
mcm(arr, 1, n-1);