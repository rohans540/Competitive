function revStr(st) {
    let res = '';
    if(st.length > 0) {
        for(let i = st.length-1; i >= 0; --i) {
            res += st[i];
        };
        return res;
    } else {
        return "Invalid size: 0";
    };
}

console.log(revStr("Read this backwards"));