console.time("ExecutionTime");
function isEven(num) {
    if (num < 0 || num == 1) return false;
    if (num == 0) return true;
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.timeEnd("ExecutionTime");