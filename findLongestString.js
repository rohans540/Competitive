function findLongestString(strList) {
    let longest = '';
    strList.map(str => {
        if(str.length > longest.length) {
            longest = str;
        }
    });

    return longest;
}

const arr = ["Rohan", "This is the longest string in this list", "a", "My name is Ram"];

console.log(findLongestString(arr));