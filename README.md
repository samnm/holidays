# Holidays
## No assignments

Holidays is a programming language that lacks an assignment operator and consists only of anonymous functions, and a view bare datatypes.

Here is an example program that prints the first 8 fibonacci numbers:
```
(repeat, fib){
  repeat(8, (i){
    log(fib(i))
  })
}(
  (repeats, func){
    (i, repeats, func, repeat) {
      repeat(i, repeat)
    }(0, repeats, func, (i, repeat){
      func(i)
      if (i < repeats - 1) {
        repeat(i + 1, repeat)
      }
    })
  },
  (n){
    (fib, n) {
      fib(fib, n)
    }((fib, n){
      if (n == 0) return 0
      if (n == 1) return 1
      return fib(fib, n - 1) + fib(fib, n - 2)
    }, n)
  }
)
```