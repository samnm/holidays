(function(repeat, fib) {
  repeat(8, function(i) {
    console.log(fib(i));
  });
}(
  function(repeats, func) {
    (function(i, repeats, func, repeat) {
      repeat(i, repeat);
    })(0, repeats, func, function(i, repeat) {
      func(i);

      if (i < repeats - 1) {
        repeat(i + 1, repeat);
      }
    });
  },
  function(n) {
    return (function(fib, n) {
      return fib(fib, n)
    })(function(fib, n) {
      if (n == 0) return 0;
      if (n == 1) return 1;
      return fib(fib, n - 1) + fib(fib, n - 2);
    }, n)
  }
));