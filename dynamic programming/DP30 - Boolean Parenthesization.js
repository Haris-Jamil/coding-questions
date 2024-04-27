// https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/

function countWays(s) {
    let i = 0
    let j = s.length - 1;
    return solve(s, i, j, 'T');
}

let map = new Map();

function solve(s, i, j, toCheck) {

    let key = `${i}-${j}-${toCheck}`;
    
    if (i > j) {
        return 0;
    }
    if (i === j) {
        if (toCheck === 'T') {
            return s[i] === 'T' ? 1 : 0;
        } else {
            return s[i] === 'F' ? 1 : 0;
        }
    }

    if (map.has(key)) return map.get(key);
    
    let ans = 0;
    for (let k=i+1; k <= j-1; k+=2) {
        let LT = solve(s, i, k-1, 'T');
        let LF = solve(s, i, k-1, 'F');
        let RT = solve(s, k+1, j, 'T'); 
        let RF = solve(s, k+1, j, 'F');

        switch (s[k]) {
            case '&':
                if (toCheck === 'T') {
                    ans = ans + LT * RT;
                } else {
                    ans = ans + LT * RF + LF * RT + LF * RF;
                }
                break;
            case '|':
                if (toCheck === 'T') {
                    ans = ans + LT * RT + LT * RF + LF * RT;
                } else {
                    ans = ans + LF * RF;
                }
                break;
            case '^':
                if (toCheck === 'T') {
                    ans = ans + LT * RF + LF * RT;
                } else {
                    ans = ans + LF * RF + LT * RT;
                }
                break;
        }
    }
    map.set(key, ans);
    return ans;
}

let str = "F^T^T";
countWays(str)