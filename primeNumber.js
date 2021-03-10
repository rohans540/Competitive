function primeNumberToN(n) {
    let flag = false;
    for(let i = 1; i < n+1; ++i) {
        if(i === 1 || i === 0) {
            continue;
        }
        flag = true;
        for(let j = 2; j < parseInt(i/2)+1; ++j) {
            if(i % j === 0) {
                flag = 0;
                break;
            }
        }
        if(flag) {
            console.log(i);
        }
    }
}

primeNumberToN(10);