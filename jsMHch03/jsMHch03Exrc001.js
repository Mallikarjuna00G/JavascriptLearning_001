console.time('ExecutionTime');
function min(a, b) {
    return a < b ? a : b;
}

console.log(min(0, -10));
console.log(min(-100, -10));
console.log(min(3, 10));
console.log(min(8, 7));

console.timeEnd('ExecutionTime');