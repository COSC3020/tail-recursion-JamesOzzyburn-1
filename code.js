function fib(n) {return fibTailRecursive(n, 1, 0);}

function fibTailRecursive(n, newValue, oldValue) {
    if (n == 0) {
        return oldValue;
    }
    else {
        return fibTailRecursive(n - 1, newValue + oldValue, newValue);
    }
}