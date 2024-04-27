function minWindowSubStr(str, ptr) {

    let i=0;
    let j=0;
    let map = {};
    let min = Infinity;  
    let smallestStr = '';

    if (ptr > str.length) {
        return "";
    }

    for (let ch of ptr) {
        map[ch] = (map[ch] || 0) + 1;
    }
    let count = Object.keys(map).length;

    while (j < str.length) {

        const char = str[j];
        if (map[char] !== undefined) {
            map[char]--;
            if (map[char] === 0) {
                count--;
            }
        }

        if (count > 0) {
            j++;
        } else if (count === 0) {            
            while (count === 0) {
                if (j-i+1 < min) {
                    min = j-i+1;
                    smallestStr = str.slice(i, j+1);
                }
                // min = Math.min(min, j-i+1);   
                let ch = str[i];
                if (map[ch] !== undefined) {
                    map[ch]++;
                    if (map[ch] == 1) {
                        count++;
                    }
                }
                i++;
            }
            j++;
        }
    }
    return smallestStr;
}

// TOTMTAPTAT | TAT = 3
// POTKLJTYUHPAR | TAT = 10
// ADOBECODEBANC | ABC = 4

minWindowSubStr('ADOBECODEBANC', 'ABC');