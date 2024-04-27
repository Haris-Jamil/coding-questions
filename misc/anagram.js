function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = {};
    
    for (let char of str1) {
        lookup[char] = (lookup[char] || 0) + 1
    }
    
    for (let char of str2) {
        if (!lookup[char]) {
            console.log(char);
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
}