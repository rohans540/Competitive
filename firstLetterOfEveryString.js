function firstAlphabet(st) {
    let newStr = st[0];

    for(let s in st) {
        if(st[s-1] === ' ') {
            newStr += st[s];
        }
    };
    return newStr;
};

console.log(firstAlphabet("A quick brown fox jumps over a lazy dog"));