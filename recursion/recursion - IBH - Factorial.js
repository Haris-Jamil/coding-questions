function factorial(n) {

    // base
    if (n <= 1) {
        return 1;
    }

    // n = induction
    // factorial(n-1) = hypothesis
    return n * factorial(n-1);
}

factorial(10);