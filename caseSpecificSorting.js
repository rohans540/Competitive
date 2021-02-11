//Author: Rohan Sharma
//Date: 11 Feb, 2021
//Problem name: Case specific sorting of strings.


//function to sort string in the alphabetical order
//input: string str
//output: sorted str
function sortStr(str) {
    let sortedList = [];
    for(i in str){
        sortedList.push(str[i]);
    }

    for(j = 0; j < sortedList.length; ++j) {
        for(k = 1; k < sortedList.length; ++k) {
            if(sortedList[k].charCodeAt() < sortedList[k-1].charCodeAt()) {
                let temp = sortedList[k];
                sortedList[k] = sortedList[k-1];
                sortedList[k-1] = temp;
            }
        }
    }

    return sortedList.join('');
};

//Function to merge two sorted strings into one string (in place sorting)
function mergeSorted(str, upperStr, lowerStr) {
    const updatedList = [];
    let j = k = 0;
    for(i in str) {
        if(str[i] === str[i].toUpperCase()) {
            updatedList.push(upperStr[j]);
            j++;
        } else {
            updatedList.push(lowerStr[k]);
            k++;
        }
    }
    return updatedList.join("");

}

//Driver function caseSpecificSorting to take a string & sort it according to places at substring level
//input: string
//output: in place sorted string
function caseSpecificSorting(str) {
    const testStr = "abcdefghijklmnopqrstuvwxyz";
    let upperStr = "";
    let lowerStr = "";

    for(i in str) {
        if(testStr.includes(str[i])) {
            lowerStr += str[i];
        } else {
            upperStr += str[i];
        }
    }
    console.log(`upperStr is ${upperStr}, and lowerStr is ${lowerStr}`);
    console.log(`sorted upperStr is ${sortStr(upperStr)}, sorted lowerStr is ${sortStr(lowerStr)}`);
    console.log(`The resultant string is: ${mergeSorted(str, sortStr(upperStr), sortStr(lowerStr))}`);
};

caseSpecificSorting("baQPMLkj");

