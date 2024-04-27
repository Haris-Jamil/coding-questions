// https://leetcode.com/problems/k-th-symbol-in-grammar/description/

//     1 2 3 4 5 6 7 8
//     k k k k k k k k
// 1 n 0
// 2 n 0 1
// 3 n 0 1 1 0
// 4 n 0 1 1 0 1 0 0 1

function kthSymbol(n, k) {

    if (n == 1 && k == 1) {
        return 0;
    }

    const rowSize = Math.pow(2, n-1);
    const mid = rowSize / 2;
    
    if ( k <= mid) {
        return kthSymbol(n-1, k);
    } else {
        return kthSymbol(n-1, k-mid) === 0 ? 1 : 0;   
    }
}

kthSymbol(2, 2)