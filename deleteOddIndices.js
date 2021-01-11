const deleteAlterChars = (text) => {
    let newStr = '';
    for(let s in text) {
        if(s%2 === 0) {
            newStr += text[s];
        }
    };
    return newStr;
}

console.log(deleteAlterChars("012345"));