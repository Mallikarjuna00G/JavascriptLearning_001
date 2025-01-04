console.time("ExecutionTime");
function countBs(str1) {
    let nBs = 0;
    for (let i = 0; i < str1.length; i++) {
        if(str1[i] === 'B') {
            nBs++;
        }
    }
    return nBs;
}

function countBs_2(str1) {
    return countChar(str1, 'B');
}

function countChar(str1, character) {
    let nChars = 0;
    for (let i = 0; i < str1.length; i++) {
        if(str1[i] === character) {
            nChars++;
        }
    }
    return nChars;
}

console.log(countBs("BOB"));
console.log(countBs_2("BOB"));
console.log(countChar("kakkerlak", 'k'));
console.timeEnd("ExecutionTime");