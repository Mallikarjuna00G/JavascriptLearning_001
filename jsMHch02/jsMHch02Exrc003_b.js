console.time('t1');
let size = 8;

let s = '';
for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        s += (i + j) % 2 ? '#' : ' ';
    }
    s += '\n';
}
console.log(s);
console.timeEnd('t1');