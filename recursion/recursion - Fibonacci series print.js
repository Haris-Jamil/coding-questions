function fibSeries(n) {
    let arr = [];

    if (n < 1) {
        return 'invalid input'
    }
    
    if (n === 1) {
        arr.push(1);    
    } else if (n === 2) {
        arr = arr.concat(...[1,1]);
    } else {
        
        arr = arr.concat(...[1,1]);
        function fib(n1, n2, n) {
            if (n === 0) {
                return;
            }
            let n3 = n1 + n2;
            arr.push(n3);
            fib(n2, n3, n-1);
        }
        
        fib(1,1, n-2)
    }

    return arr;
}
