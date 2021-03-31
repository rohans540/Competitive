//Author: Rohan Sharma
//HackerRank Problem: Migratory Birds

/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
*/

function migratoryBirds(arr) {
    const setObj = new Set();
    const newArr = [0];
    let result;
    
    arr.map(bird => setObj.add(bird));
    setObj.forEach(() => {
        newArr.push(0);
    });
    arr.forEach(bird => {
        newArr[bird] += 1;
    });
    let large = newArr[0];
    newArr.map((na, index) => {
        if(na > large) {
            large = na;
            result = index;
        }
    });
    console.log(result);
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);