function solve(input, output, map) {
    if (input.length === 0) {
        if (!map[output]) {
            console.log(output);
            map[output] = 1;
        }
        return;
    }

    let op1 = output;
    let op2 = output;

    op2 += input[0];
    input = input.slice(1);

    solve(input, op1, map);
    solve(input, op2, map);
    
}

solve("aab", "", {});