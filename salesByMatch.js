//Author: Rohan Sharma;
//HackerRank problem: sales by match

/*There is a large pile of socks that must be paired by color. Given an array of integers representing 
    the color of each sock, determine how many pairs of socks with matching colors there are. */

function sockMerchant(n, arr) {
    let countPairs = 0;
    const setObj = new Set();

    arr.map(item => {
        if(setObj.size === 0) {
            setObj.add(item);
        } else {
            if(setObj.has(item)) {
                countPairs++;
                setObj.delete(item);
            } else {
                setObj.add(item);
            }
        }
    });
    return countPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));