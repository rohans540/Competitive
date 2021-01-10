function convertZeroToFive(num) {
    if(num === 0)
        return 0;
    let last = num%10;
    console.log(last);
    if(last === 0)
        last = 5;
    return convertZeroToFive(parseInt(num/10)) * 10 + last;
}

function convert(n) {
    if(n === 0)
        return 5;
    else return convertZeroToFive(n);
}

console.log(convert(1000));