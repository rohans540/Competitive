// function revStr(st) {
//     let res = '';
//     if(st.length > 0) {
//         for(let i = st.length-1; i >= 0; --i) {
//             res += st[i];
//         };
//         return res;
//     } else {
//         return "Invalid size: 0";
//     };
// }

function revStr(str) {
    if(str.length === 1) {
        return str[str.length - 1];
    } else {
        return str[str.length - 1] + revStr(str.slice(0, str.length - 1));
    }
}

console.log(revStr("Rohan"));