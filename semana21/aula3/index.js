//primeiro ex
var printNumberIncreasing = function (n) {
    if (n >= 0) {
        printNumberIncreasing(n - 1);
        console.log(n);
    }
};
console.log(printNumberIncreasing(8));
var printNumberDecreasing = function (n) {
    if (n >= 0) {
        console.log(n);
        printNumberDecreasing(n - 1);
    }
};
console.log(printNumberDecreasing(8));
// segundo ex
var sumNumbers = function (n) {
    if (n <= 1) {
        return n;
    }
    return n + sumNumbers(n - 1);
};
console.log(sumNumbers(5));
