// LCS - longest common subsequence

function lcs(x, y, n, m) {
    if (n === 0 || m === 0) {
        return 0;
    }
    if (t[n][m]) return t[n][m];

    if (x[n-1] === y[m-1]) {
        return t[n][m] = 1 + lcs(x, y, n-1, m-1)
    } else {
        return t[n][m] = Math.max( lcs(x, y, n, m-1), lcs(x, y, n-1, m) );
    }
}


let str1 = "ylqpejqbalahwr";
let str2 = "yrkzavgdmdgtqpg";

let t = [...Array(str1.length+1)].map((a) => Array(str2.length+1));

lcs(str1, str2, str1.length, str2.length);