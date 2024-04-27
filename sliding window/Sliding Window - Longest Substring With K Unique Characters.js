// this function returns longest subString with k unique characters
function func(str, k) {
    let i=0;
    let j=0;
    let map = {}
    let charCount = 0;
    let subStr = '';
    let maxStr = '';

    while (j < str.length) {
        // calculation
        let char = str[j];
        
        if (map[char] === undefined) {
            map[char] = 1;
        } else {
            map[char]++;
        }
        subStr += char;
        charCount = Object.keys(map).length;

        if (charCount < k) {
            j++;
        } else if (charCount === k) {
            // answer = calculation
            if (maxStr.length < subStr.length) {
                maxStr = subStr;
            }
            j++;
        } else if (charCount > k){
            while (charCount > k) {
                // remove i calculation
                subStr = subStr.slice(1);
                map[str[i]]--;
                if (map[str[i]] === 0) {
                    delete map[str[i]]
                }  
                charCount = Object.keys(map);
                i++;
            }
            j++;
        }
    }    
    return maxStr;
}


// this function returns length of longest subString with k unique characters
// this function is also refactored to shorten code
function func2(str, k) {
    let [i,j,charCount, max] = [0,0,0, -Infinity]
    let map = {}

    while (j < str.length) {
        let char = str[j];        
        map[char] = map[char] === undefined ? 1 : map[char]+1;
        charCount = Object.keys(map).length;

        if (charCount === k) {
            max = Math.max(max, j-i+1)            
        } else if (charCount > k){
            while (charCount > k) {
                map[str[i]]--;
                if (map[str[i]] === 0) {
                    delete map[str[i]]
                }  
                charCount = Object.keys(map).length;
                i++;
            }
        }
        j++;
    }    
    return max;
}


console.log(func('aabacbebebe', 3))