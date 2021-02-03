// Given a String of length N, made up of only uppercase chars 'R' (red) and 'G' (green). 
// Find the minimum number of characters we need to change to make the whole string of same color.

function redOrGreen(str) {
    let g = 0;
    for(let i in str) {
        if(str[i] === 'G')
            g += 1;
    }
    if(g >= str.length/2) {
        return str.length - g;
    } else {
        return g;
    }
}

console.log(redOrGreen("RGGRGRG"));

