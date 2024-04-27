function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;    
    }
    
    let lastNum = arr.pop()
    return  productOfArray(arr) * lastNum;
}

productOfArray([1,2,3]);