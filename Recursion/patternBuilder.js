function makePattern(n) {
    if(n === 0) {
        return;
    } else {
        console.log("* ".repeat(n));
        makePattern(n-1);
    }
}

makePattern(3);