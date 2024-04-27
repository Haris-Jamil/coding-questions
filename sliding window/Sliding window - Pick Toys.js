function maxNumberOfToys(str, k) {

    let i=0;
    let j=0;
    let map = {};
    let count = 0;
    let max = -Infinity;
    
    while ( j < str.length) {
        let char = str[j];
        map[char] = (map[char] || 0) + 1;
        count = Object.keys(map).length;

        if (count < k) {
            j++;
        } else if (count === k) {
            max = Math.max(max, j-i+1);
            j++;
        } else if (count > k) {
            while (count > k) {
                map[str[i]]--;
                if (map[str[i]] == 0) {
                    delete map[str[i]];
                }         
                count = Object.keys(map).length;                
                i++;
                if (count === k) {
                    max = Math.max(max, j-i+1);
                }
            }            
            j++;
        }
    }
    return max;
}

maxNumberOfToys('abaccacccb', 2);