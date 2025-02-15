console.time("ExecutionTime");

function arrayToList(arr) {
    let obj = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        obj = {value: arr[i], rest: obj};
    }

    return obj;
}

function listToArray(list) {
    let arr = []
    for (let i = list; list !== null; list = list.rest) {
        arr.push(list.value);
    }
    return arr;
}

function prepend(element, list) {
    list = {value: element, rest: list};
    return list;
}

function nth(list, index) {
    let arr = listToArray(list);
    return arr[index];
}

/**
 * recursive version of nth
 */
/*
function nth(list, n) {
    if (list) {
        if (n === 0) {
            return list.value;
        } else {
            return nth(list.rest, n - 1);
        }
    } else {
        return undefined;
    }
}*/

console.log(arrayToList([10, 20]));
console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 32, rest: null } } }));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

console.timeEnd("ExecutionTime");