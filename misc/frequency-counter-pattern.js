function same(arr1, arr2) {
    for(let val of arr1) {
        let idx = arr2.indexOf(val ** 2);
        if (idx == -1) {
            return false;
        }
        arr2.splice(idx, 1)  
    }
    return true;
}

same([2,2,3,5,1], [4,4,1,9,25]);