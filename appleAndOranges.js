//Author: Rohan Sharma
//HackerRank Problem

// Problem Statement: Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given 
// below, determine the number of apples and oranges that land on Sam's house.
// The red region denotes the house, where  is the start point, and  is the endpoint. 
// The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of 
// means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let totalApple = 0;
    let totalOrange = 0;
    let appArr = [];
    let orangArr = [];
    apples.map(ap => {
        appArr.push(a+ap);
    })

    oranges.map(or => {
        orangArr.push(or+b);
    })
    console.log(orangArr);

    appArr.forEach(ab => {
        if(ab >= s && ab <= t) {
            totalApple++;
        }
    });

    console.log(appArr);

    orangArr.forEach(ba => {
        if(ba >= s && ba <= t) {
            totalOrange++;
        }
    });

    console.log(totalApple);
    console.log(totalOrange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);