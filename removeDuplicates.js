function removeDuplicates(str) {
    const uniqueStr = [];

    for(let i in str) {
        if(!uniqueStr.includes(str[i])){
            uniqueStr.push(str[i])
        }
    }

    return uniqueStr.join('');
}

console.log(removeDuplicates("geeksforgeeks"));