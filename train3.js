/* 1) RECURSIVELY
 Write a JavaScript program to get the first n Fibonacci numbers
 That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
  with the exception of the first two: fib(0) and fib(1). More succinctly,
  fib(0) is 1
  fib(1) is 1
  fib(n) is fib(n - 1) + fib(n - 2)
  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.*/

function fibRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
}

console.log(fibRecursive(8));

