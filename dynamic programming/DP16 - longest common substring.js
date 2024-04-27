// https://www.geeksforgeeks.org/longest-common-substring-dp-29/

function solve(str1, str2, n, m) {

    let t = [];
    let max = -Infinity;

    for (let i=0; i<n+1; i++) {
        t[i] = [];
        for (let j=0; j<m+1; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            }
        }
    }

    for (let i=1; i<n+1; i++) {
        for (let j=1; j<m+1; j++) {
            if (str1[i-1] === str2[j-1]) {
                t[i][j] = 1 + t[i-1][j-1];
                max = Math.max(max, t[i][j])
            } else {
                t[i][j] = 0;
            }
        }
    }
    return max;
}

let str1 = "GeeksforGeeks";
let str2 = "GeeksQuiz";

solve(str1, str2, str1.length, str2.length);