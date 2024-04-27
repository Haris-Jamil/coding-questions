
// 1 to n
function print(n) {

    //base
    if (n===1) {
        console.log(n);
        return;
    }

    // hypothesis
    print(n-1);

    // induction
    console.log(n);
}

// n to 1
function printReverse(n) {
    if (n===1) {
        console.log(n);
        return;
    }
    console.log(n);
    printReverse(n-1);
}

printReverse(10)