function maxCharsOccurenceString(str) {
    let countChars = {};
    let maxNum = 0, maxChar;
    for(let char of str) {
        !countChars[char] ? countChars[char] = 1 : countChars[char]++;
    }
    console.log(countChars);
    for(let key in countChars) {
        if(countChars[key] > maxNum) {
            maxNum = countChars[key];
            maxChar = key;
        }
    }
    return maxChar;
}

console.log(maxCharsOccurenceString("abbcbbcdddc"));