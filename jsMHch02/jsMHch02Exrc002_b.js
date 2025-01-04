for(let i = 1; i <= 100; i++) {
    let v = '';
    if(i % 3 === 0) {
        v += 'Fizz';
    }
    if(i % 5 === 0) {
        v += 'Buzz';
    }
    console.log(v || i);
}