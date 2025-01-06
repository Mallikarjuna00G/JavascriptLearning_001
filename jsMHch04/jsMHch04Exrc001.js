console.time("ExecutionTime");

function range(start, end) {
    let arr = [];
    let con = (start > end) ? ((a, b) => a >= b) : ((a, b) => a <= b);
    for (let i = start; con(i, end); i++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

function range2(start, end, step = 1) {
    let arr = [];
    let con = (start > end) ? ((a, b) => a >= b) : ((a, b) => a <= b);
    for (let i = start; con(i, end); i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(range(1, 10));
console.log(range2(5, 2, -1));
console.log(sum(range(1, 10)));

console.timeEnd("ExecutionTime");