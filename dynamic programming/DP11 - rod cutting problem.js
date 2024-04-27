// https://www.geeksforgeeks.org/cutting-a-rod-dp-13/#practice

function rodCutting(price, n) {
    let lengths = [];
        for (let i=1; i<=n; i++) {
            lengths.push(i);
        }
        
        let t = [];
        
        for (let i=0; i<n+1; i++) {
            t[i] = [];
            for (let j=0; j<n+1; j++) {
                if (i==0 || j==0) {
                    t[i][j] = 0;
                }
            }
        }
        
        for(let i=1; i<n+1; i++) {
            for (let j=1; j<n+1; j++) {
                if (lengths[i-1] <= j) {
                    t[i][j] = Math.max(price[i-1] + t[i][j - lengths[i-1]], t[i-1][j] );
                } else {
                    t[i][j] = t[i-1][j];
                }
            }
        }
        
        return t[n][n];
}

let n = 8
let price = [1, 5, 8, 9, 10, 17, 17, 20];

rodCutting(price, n);