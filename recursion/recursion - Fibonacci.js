function fib(n, sum){

    if (n < 1) {
        return null;
    }
   
   if (n === 1 || n === 2) {
       console.log('a', 1);
       return 1;
   }
   
   const ans = fib(n-1) + fib(n-2)
   console.log('b', ans);
   return ans;
}

fib(4)