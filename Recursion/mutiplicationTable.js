function mulTable(n, i) {
    if(i === 0) {
        return;
    } else {
        mulTable(n, i-1);
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

console.log(mulTable(3, 10));