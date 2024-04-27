
function longestRepeatingSubSeq(str) {
    let str1 = str;
    let str2 = str;
    let m = str1.length
    let n = str2.length;

    let t = [];

    for (let i=0; i<m+1; i++) {
        t[i] = [];
        for (let j=0; j<n+1; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0
            }
        }
    }

    for (let i=1; i<m+1; i++) {
        for (let j=1; j<n+1; j++) {
            if (str1[i-1] === str2[j-1] && i !== j) {
                t[i][j] = 1+ t[i-1][j-1];
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1]);
            }
        }
    }
    
    return t[m][n];
}


longestRepeatingSubSeq("AABEBCDD");