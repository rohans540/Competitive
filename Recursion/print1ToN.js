function printOneToN(n) {
    if(n === 0) {
        return 1;
    } else {
        printOneToN(n-1);
        console.log(n);
    }
}

printOneToN(7);