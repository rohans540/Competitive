function makePattern(n) {
    if(n === 0) {
        return;
    } else {
        console.log("* ".repeat(n));
        makePattern(n-1);
    }
}

function makePatternInverse(n, k) {
    if(n === 0) return;
    console.log("* ".repeat(k));
    makePatternInverse(n-1, k+1);
}

// makePattern(3);
makePatternInverse(5, 1);