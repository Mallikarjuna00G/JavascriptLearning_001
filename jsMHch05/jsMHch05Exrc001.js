console.time("ExecutionTime");

let arrays = [[1, 2, 3], [4, 5], [6]];

let a = arrays.reduce(function (a, b) {return a.concat(b);});

console.log(a);

console.timeEnd("ExecutionTime");