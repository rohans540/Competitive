const countCamelCase = (word) => {
    let count = 0;
    if(word.length === 0)
        return 0;
    else {
        for(let i = 0; i < word.length; ++i) {
            if(word.charAt(i) === word.charAt(i).toUpperCase())
                count++;
        }
        return count;
    }
}

console.log(countCamelCase("mAAABklHgTY"));