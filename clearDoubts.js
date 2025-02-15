function deepEqual(obj1, obj2) {
    let cat1 = ["number", "string", "boolean"];

    let tObj1 = typeof obj1;
    let tObj2 = typeof obj2;

    // console.log(tObj1);
    // console.log(tObj2);
    if(tObj1 === tObj2) {
        if(cat1.includes(tObj1)) {
            return obj1 === obj2;
        } else {
            if(tObj1 === "function") {
                return false;
            }
            if(tObj1 == "object" && tObj2 === "object") {
                if (obj1 === null && obj2 === null) {
                    // If both are null
                    return true;
                }
                if(obj1 === null || obj2 === null) {
                    // if one of them is null
                    return false;
                }
                let isObj1Arr = Array.isArray(obj1);
                let isObj2Arr = Array.isArray(obj2);
                if (isObj1Arr === isObj2Arr) {
                    // if both the objects are array
                    if (obj1.length !== obj2.length) {
                        // arrays are of not same length
                        return false;
                    } else {
                        for (let i = 0; i < obj1.length; i++) {
                            if (!deepEqual(obj1[i], obj2[i])) {
                                // array items are not matching at specific index
                                return false;
                            }
                            // All items from arrays are matching.
                            return true;
                        }
                    }
                }
                if (isObj1Arr === true || isObj2Arr === true) {
                    // only one of the objects is an array
                    return false;
                }
                // Now coming to regular objects
                const obj1Keys = Object.keys(obj1);
                const obj2Keys = Object.keys(obj2);
                if (obj1Keys.length !== obj2Keys.length) {
                    // number of keys in each object not matching
                    return false;
                }
                for (let key of obj1Keys) {
                    if(obj2Keys.includes(key)) {
                        if(!deepEqual(obj1[key], obj2[key])) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                return true;
            }
            return true;
        }
    } else {
        return false;
    }
}

let obj1 = 10;
let obj2 = 20;
console.log(deepEqual(obj1, obj2));

obj1 = {here: {is: "an"}, object: 2};
obj2 = {here: 1, object: 2};
obj3 = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj1, obj1));
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

console.log("------------------------------")