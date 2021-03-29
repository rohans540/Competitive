//Author: Rohan Sharma
//HackerRank Problem: Breaking the records

/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the 
first game establish her record for the season, and she begins counting from there.

Given the scores for a season, determine the number of times Maria breaks her records for most and least 
points scored during the season.
 */

function breakingRecords(a) {
    let minScore = a[0];
    let maxScore = a[0];
    let min = 0;
    let max = 0;

    for(let i = 1; i < a.length; ++i) {
        if(a[i] < minScore) {
            minScore = a[i];
            min += 1;
        }
        if(a[i] > maxScore) {
            maxScore = a[i];
            max += 1;
        }
    }

    return [max, min];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));