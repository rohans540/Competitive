//encodeRunLength function to encode the string into run length encoding
const encodeRunLength = (str) => {
    let chCount = 0;
    encoded_msg = "";
    
    for(let i=0; i<str.length; ++i) {
        let currChar = str[i];

        chCount++;
        if(i == (str.length - 1)) {
            encoded_msg = encoded_msg + chCount+currChar;
            break;
        }
        else{
            if(currChar == str[i+1]) {
                
            } else {
                encoded_msg = encoded_msg+chCount+currChar;
                chCount = 0;
            }
        }
    }
    return encoded_msg;
}




//Test cases

//#1
const test1 = "AAAA";
console.log(encodeRunLength(test1));

//#2
const test2 = "AAAABBBCCDAA";
console.log(encodeRunLength(test2));

//#3
const test3 = "D";
console.log(encodeRunLength(test3));

//#4
const test4 = "";
console.log(encodeRunLength(test4));

//#5
const test5 = "AB";
console.log(encodeRunLength(test5));