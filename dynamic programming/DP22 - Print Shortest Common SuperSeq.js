
function printShortestCommonSuperSeq(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    return lcs(str1, str2, m, n);
}

function lcs(str1, str2, m, n) {
    let t = [];

    for (let i=0; i< m+1; i++) {
        t[i] = [];
        for (let j=0; j< n+1; j++) {
            if (i===0 || j === 0) {
                t[i][j] = 0;
            }
        }
    }

    for (let i=1; i<m+1; i++) {
        for (let j=1; j<n+1; j++) {
            if (str1[i-1] === str2[j-1]) {
                t[i][j] = 1 + t[i-1][j-1];
            } else {
                t[i][j] = Math.max(t[i-1][j], t[i][j-1])
            }
        }    
    }

    let i = m;
    let j = n;
    let str = '';

    while (i > 0 && j > 0) {
        if (str1[i-1] === str2[j-1]) {
            str += str1[i-1];
            i--;
            j--;
        } else {
            if (t[i-1][j] > t[i][j-1]) {
                str += str1[i-1];
                i--;
            } else {
                str += str2[j-1];
                j--;
            }
        }
    }

    while (i > 0) {
        str += str1[i-1];
        i--;
    }

     while (j > 0) {
        str += str2[j-1];
        j--;
    }

    return str.split("").reverse().join("");
}

printShortestCommonSuperSeq("AGGTAB", "GXTXAYB");
