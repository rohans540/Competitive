function isPalindrome(str) {
    let j = str.length - 1;
    while(j >= 0) {
        for(let i = 0; i < str.length; ++i){
            if(str[i] !== str[j]) {
                return false;
            }
            j--;
        }
    }
    return true;
};

function isPalindromeStrReverse(str) {
    revStr = '';
    for(let i = str.length-1; i >=0; --i){
        revStr += str[i];
    };
    console.log(revStr);
    return str === revStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindromeStrReverse("malayalam"));