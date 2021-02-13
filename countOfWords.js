//Author: Rohan Sharma
//Problem statement: Given a String without spaces count the total number of words in the string if:
//1. First word of the string starts with a lowercase letter
//2. Rest all words starts with an uppercase letter

//function to calculate the total number of words in a string
//Input: A string
//Output: Count of words in integer value
function countOfWords(word) {
    let count = 1;
    for(i in word) {
        if(word[i] >= 'A' && word[i] <= 'Z')
            count += 1;
    }
    return count;
}

console.log(countOfWords("rishavSurbhiAndRajuAreMyFriends"));