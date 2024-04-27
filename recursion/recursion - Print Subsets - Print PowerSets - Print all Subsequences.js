function solve(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2 = output;

    op2 += input[0];
    input = input.slice(1);

    solve(input, op1);
    solve(input, op2);
    
}

solve("ab", "");