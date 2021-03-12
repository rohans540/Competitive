//Author: Rohan Sharma
//HackerRank Problem

/*HackerLand University has the following grading policy:
Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade. */

function gradingStudents(grades) {
    let newGrades = [];
    grades.map(grade => {
        if(grade < 38) {
            newGrades.push(grade);
        } else {
            let mod = grade%5;
            if(mod >= 3) {
                newGrades.push(grade+5-mod);
            } else {
                newGrades.push(grade);
            }
        }
    })
    return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));