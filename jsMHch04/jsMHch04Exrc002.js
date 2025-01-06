console.time("ExecutionTime");

function reverseArray(arr) {
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}

function reverseArrayInPlace(arr) {
    let len = arr.length - 1;
    let mid = Math.floor((len + 1) / 2);
    for(let i = 0; i < mid; i++) {
        let a = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = a;

        
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.timeEnd("ExecutionTime");