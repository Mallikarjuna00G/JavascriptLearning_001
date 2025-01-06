console.time("ExecutionTime");

function deepEqual(obj1, obj2) {
    // We are only checking if keys are matching

    if(obj1 === obj2) {
        return true;
    }
    if(obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== "object") {
        return false;
    }

    let k1 = Object.keys(obj1);
    let k2 = Object.keys(obj2);
    if (k1.length != k2.length) {
        return false;
    }

    for (let key of k1) {
        if (!k2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.timeEnd("ExecutionTime");