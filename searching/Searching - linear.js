function search(arr, val) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

search([3, 67, 3, 23, 97, 56, 34, 22], 34)