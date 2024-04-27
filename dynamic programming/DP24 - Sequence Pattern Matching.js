// if str1 is a subSequence of str2

function isSubsequence(str1, str2, m, n) {
    let t = [];

    for(let i=0; i<m+1; i++) {
        t[i] = [];
        for (let j=0; j <n+1; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            }
        }
    }

    for(let i=1; i<m+1; i++) {
        for (let j=1; j <n+1; j++) {
            if (str1[i-1] === str2[j-1]) {
                t[i][j] = 1 + t[i-1][j-1]
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1]);
            }
        }
    }

    return t[m][n] === str1.length;
}


// example
let str1 = "AXY";
let str2 = "ADXCPY";

isSubsequence(str1, str2, str1.length, str2.length);