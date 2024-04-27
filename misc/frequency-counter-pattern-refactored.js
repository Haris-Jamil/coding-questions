function sameImproved(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }
    const freq1 = {};
    const freq2 = {};
    for (let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for (let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for (let key in freq1) {
        if (!(key ** 2 in freq2)) {
            return false;
        }
        if (freq1[key] !== freq2[key**2]) {
            return false;
        }
    }
    return true;
}

sameImproved([2,2,3,5,1], [4,4,1,9,25]);