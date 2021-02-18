// function findExponentVal(n, x) {
//     let result = 1;
//     for(let i = 0; i < x; ++i) {
//         result *= n;
//     };
//     return result;
// }

function findExponentVal(n, x) {
    if(x === 0) {
        return 1;
    }
    if(x === 1){
        return n;
    } else {
        return n*findExponentVal(n, x-1);
    }
}

console.log(findExponentVal(9, 0));
