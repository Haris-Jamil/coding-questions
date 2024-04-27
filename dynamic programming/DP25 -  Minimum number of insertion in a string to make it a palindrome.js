// Minimum number of Insertion to make a string a palindrom

// The solution to this problem is same as "DP21 -Minimum number of Delettion to make a string a palindrom"

// for example
// aebcbda   

// to make it palindrom using deletion we will have to remove e and d
// abcba

// to make it palindrom using insertion we will have to add e and d to balance this string
// aedbcbdea
//   ^    ^

// to  in both case we will have to treat 2 elements

function lps(str) {
    let str1 = str;
    let str2 = str.split("").reverse().join("");
    return str1.length - lcs(str1, str2, str1.length, str2.length);
}

function lcs(str1, str2, m, n) {
    let t = [];

    for (let i=0; i<m+1; i++) {
        t[i] = [];
        for (let j=0; j<n+1; j++) {
            if (i===0 || j===0) {
                t[i][j] = 0;
            }
        }
    }

    for (let i=1; i<m+1; i++) {
         for (let j=1; j<n+1; j++) {
             if (str1[i-1] === str2[j-1]) {
                 t[i][j] = 1 + t[i-1][j-1]
             } else {
                 t[i][j] = Math.max(t[i-1][j], t[i][j-1])
             }
         }
    }
    return t[m][n]
}

lps("banana")