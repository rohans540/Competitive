function findSum(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    let sum = 0;
    if(matches.length > 1) {
        matches.map(num => {
            sum += parseInt(num);
        })
    } else if(matches.length === 1) {
        sum = parseInt(matches[0]);
    };

    return sum;
};

console.log(findSum("I have 300 copies of 20 books"));