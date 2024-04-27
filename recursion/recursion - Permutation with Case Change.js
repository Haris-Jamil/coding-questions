// we assume every character in string is in small case

function permutationWithCaseChange(output, input) {

    if (input.length === 0) {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2 = output;

    let ch = input.slice(0,1);
    input = input.slice(1);
    op1 += ch.toUpperCase();
    op2 += ch;

    permutationWithCaseChange(op1, input);
    permutationWithCaseChange(op2, input);
}

// reafactored
// function permutationWithCaseChange(output, input) {
//     if (input.length === 0) {
//         console.log(output);
//         return;
//     }
    
//     let ch = input.slice(0,1);
//     input = input.slice(1);

//     permutationWithCaseChange(output + ch.toUpperCase(), input);
//     permutationWithCaseChange(output + ch, input);
// }

permutationWithCaseChange("", "abc")