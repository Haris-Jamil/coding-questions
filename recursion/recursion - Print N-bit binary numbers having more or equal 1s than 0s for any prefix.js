// https://www.geeksforgeeks.org/problems/print-n-bit-binary-numbers-having-more-1s-than-0s0252/1


function printStrings(output, ones, zeros, n) {

    if (n === 0) {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2 = output;

    op1 += "1"
    printStrings(output + "1", ones+1, zeros, n-1);
    if (ones > zeros) {
        op2 += "0";
        printStrings(output + "0", ones, zeros+1, n-1);
    }
    
}

printStrings("", 0, 0, 6);