function addAllElements(a) {
    if(a.length === 0) {
        return 0;
    } else {
        return a[a.length - 1] + addAllElements(a.slice(0, a.length - 1));
    }
};

console.log(addAllElements([1, 2, 3, 4, 5]))