function solve(str, i, j) {

    let min = Infinity;

    if ( i >= j) {
        return 0;
    }
    
    if (t[i][j] !== -1) return t[i][j];
    
    if (isPalindrome(str, i, j)) {
        return 0;
    }

    for (let k=i; k < j; k++) {
        
        // here 1 denotes number of cuts in string
        let temp = solve(str, i, k) + 1 + solve(str, k+1, j);
        min = Math.min(min, temp);
    }

    return t[i][j] = min;
}

function isPalindrome(str, i, j) {
    if (i===j || i > j) {
        return true;
    }
    return str[i] === str[j] && isPalindrome(str, ++i, --j);
}


let str = "ababbbabbababa";
let n = str.length;

let t = [...Array(n)].map((a) => Array(n).fill(-1));

solve(str, 0, n-1)
