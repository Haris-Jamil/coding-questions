

function lcs(str1, str2, n, m) {
    let t = [];

    for (let i=0; i<n+1; i++) {
        t[i] = [];
        for (let j=0; j < m+1 ;j++) {
            if (i===0 || j===0) {
                t[i][j] = 0;
            }
        }
    }
    
    for (let i=1; i < n+1; i++) {
        for (let j=1; j < m+1; j++) {
            if (str1[i-1] === str2[j-1]) {
                t[i][j] = 1 + t[i-1][j-1];
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1]);
            }
        }
    }
    return t[n][m];
}


let str1 = "ylqpejqbalahwr";
let str2 = "yrkzavgdmdgtqpg";


lcs(str1, str2, str1.length, str2.length);