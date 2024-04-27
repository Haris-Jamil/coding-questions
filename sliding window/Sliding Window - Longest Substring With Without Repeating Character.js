function func(str) {
    let i=0;
    let j=0;
    let uniqueCount = 0;
    let map = {};
    let max = -Infinity;

    while ( j < str.length) {

        let char = str[j];
        map[char] = map[char] === undefined ? 1 : map[char] + 1;
        uniqueCount = Object.keys(map).length;

        if (uniqueCount > j-i+1 ) {
            j++;
        } else if (uniqueCount === j-i+1 ) {
            max = Math.max(max, j-i+1);
            j++;
        } else if (uniqueCount < j-i+1) {
            while (uniqueCount < j-i+1) {
                let endCh = str[i];
                map[endCh]--;
                if (map[endCh] === 0) {
                    delete map[endCh]
                }
                i++;
            }
            j++;
        }
    }
    return max;
}

// above function refactored
function func2(str) {
    let [i,j,uniqueCount] = [0,0,0];
    let map = {};
    let max = -Infinity;

    while ( j < str.length) {

        let char = str[j];
        map[char] = (map[char] || 0) + 1;
        uniqueCount = Object.keys(map).length;

        if (uniqueCount === j-i+1 ) {
            max = Math.max(max, j-i+1);
        } else if (uniqueCount < j-i+1) {
            while (uniqueCount < j-i+1) {
                let endCh = str[i];
                map[endCh]--;
                if (map[endCh] === 0) {
                    delete map[endCh]
                }
                i++;
            }
        }
        j++;
    }
    return max;
}

console.log(func2('pwwkewhgfdsak'));



