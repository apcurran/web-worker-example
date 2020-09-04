"use strict";

// Deliberately slow fibonacci recursive solution
function fibonacci(num) {
    if (num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

postMessage(`Fib number 42 is ${fibonacci(45)}.`);