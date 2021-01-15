const removeAllSpaces = (text) => {
    let newStr = '';
    for(let s in text) {
        if(text[s] !== ' ')
            newStr = newStr + text[s];
    };
    return newStr;
}

console.log(removeAllSpaces("    g  f     g"));