function permutationWithSpaces(output, input) {

    if (input.length === 0) {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2 = output;
    
    if (output.length === 0) {
        let ch =  input.slice(0,1);
        op1 += ch;
        op2 += ch;
        input = input.slice(1);
    }
        
    op1 += input.slice(0,1);
    op2 += " " + input.slice(0,1);
    input = input.slice(1);        
    

    permutationWithSpaces(op1, input);
    permutationWithSpaces(op2, input);
    
}

permutationWithSpaces("", "ABCD")