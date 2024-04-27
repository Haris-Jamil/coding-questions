function countAnagrams(str, ptr) {

    let i=0;
    let j=0;
    let resultCount = 0;
    let charCount = 0;
    let charMap = {};
    let k = ptr.length;
    for (let c=0; c<ptr.length; c++) {
        charMap[ptr[c]] = charMap[ptr[c]] ? ++charMap[ptr[c]] : 1;
    }
    charCount = Object.keys(charMap).length;
    
    while (j < str.length) {
        const char = str[j];
        if (charMap[char] !== undefined) {
           charMap[char]--;
            if (charMap[char] === 0) {
                charCount--;
            } 
        }        
        
        if (j-i+1 < k) {            
            j++;
        } else if (j-i+1 === k) {
            if (charCount === 0) {                
                resultCount++;
            }
            if ( charMap[str[i]] !== undefined) {
                charMap[str[i]]++;
                if (charMap[str[i]] === 1) {
                    charCount++;
                }                
                
            }
            i++;
            j++;
        }
        
    }
    return resultCount;
    
}

// countAnagrams('aabaabaa', 'aaba');
// countAnagrams('adecimalpoint','imadotinplace');
// countAnagrams('forxxorfxdofr', 'for')
countAnagrams('aabaabbabbabaa', 'aaba')