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

function isPalindromeRecursive(str, s, e) {
    if(s === e) {
        return true;
    }

    if(str[s] !== str[e]){
        return false;
    }

    if(s < e + 1){
        isPalindromeRecursive(str, s+1, e-1);
    }
    return true;
}

const s = "madam";
console.log(isPalindrome("a"));
console.log(isPalindromeStrReverse("malayalam"));
console.log(isPalindromeRecursive(s, 0, s.length-1));