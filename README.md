# Holidays
## No assignments

Holidays is a programming language that lacks an assignment operator and consists only of anonymous functions, and a few bare datatypes.

Created for the PLTGames [Turing Tarpit competition](http://www.pltgames.com/competition/2012/12)

Here is an example program that prints the first 8 fibonacci numbers:
```
(log){
  (repeat, fib){
    repeat(5, (i){
      log(fib(i + 1))
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
      return (fib, n) {
        return fib(fib, n)
      }((fib, n){
        if (n == 0) return 0
        if (n == 1) return 1
        return fib(fib, n - 1) + fib(fib, n - 2)
      }, n)
    }
  )
}
```