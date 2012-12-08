# Holidays
### No assignments

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

### A quick explanation

The above example consists of three main parts:

*The repeat function*
```
(repeats, func){
  (i, repeats, func, repeat) {
    repeat(i, repeat)
  }(0, repeats, func, (i, repeat){
    func(i)
    if (i < repeats - 1) {
      repeat(i + 1, repeat)
    }
  })
}
```

*The fibonacci function*
```
(n){
  return (fib, n) {
    return fib(fib, n)
  }((fib, n){
    if (n == 0) return 0
    if (n == 1) return 1
    return fib(fib, n - 1) + fib(fib, n - 2)
  }, n)
}
```

*The core program*
```
(log){
  (repeat, fib){
    repeat(5, (i){
      log(fib(i + 1))
    })
  }(..., ...)
}
```
All holidays programs consist of a main method that takes a single argument - the log method. In this case all our program does is call a single closure. The closure takes the repeat and fibonacci functions as arguments in order to make the source more readable.