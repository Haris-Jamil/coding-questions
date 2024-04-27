function generateParenthesis(n) {
    let o = n;
    let c = n;
    solve(o, c, "");
}


function solve(o, c, output) {

    if (o > c) return;
    
    if (o === 0 && c === 0) {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2 = output;
    
    if (o > 0) {
        op1 += "(";
        solve(o-1, c, op1);
    }
    if (c > 0) {
        op2 += ")"
        solve(o, c-1, op2);
    }
    
    
}


generateParenthesis(4)
