//JavaScript function to remove all duplicate characters from the string.
//input: String
//String with duplicates removed
function removeDuplicates(str) {
    const uniqueStr = [];
    if(str.length < 1) {
        return "Invalid Length";
    } else {
        for(let i in str) {
            if(!uniqueStr.includes(str[i])){
                uniqueStr.push(str[i])
            }
        }
    
        return uniqueStr.join('');
    }

    
}

console.log(removeDuplicates("geeksforgeeks"));