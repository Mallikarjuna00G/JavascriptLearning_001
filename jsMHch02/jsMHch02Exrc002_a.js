for(let i = 1; i <= 100; i++) {
    let v = i;
    if(i % 3 === 0) {
        v = 'Fizz';
    } else if(i % 5 === 0) {
        v = 'Buzz';
    }
    console.log(v);
}