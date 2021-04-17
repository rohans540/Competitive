//Author: Rohan Sharma
//hackerrank Problem: Cats and Mouse

function catAndMouse(x, y, z) {
    let finalString;

    if(z > x && z > y) {
        if(z-x === z-y) {
            finalString = "Mouse C";
        } else {
            finalString = z-x > z-y ? "Cat B" : "Cat A";
        }
    } else if(x > z && x > y) {
        if(y > z) {
            if(y-z === x-z) {
                finalString = "Mouse C";
            } else {
                finalString =  x-z > y-z ? "Cat B" : "Cat A";
            }
        } else {
            if(z-y === x-z) {
                finalString = "Mouse C";
            } else {
                finalString = x-z > z-y ? "Cat B" : "Cat A";
            }
        }
    } else {
        if(x > z) {
            if(y-z === x-z) {
                finalString = "Mouse C";
            } else {
                finalString = x-z > y-z ? "Cat B" : "Cat A";
            }
        } else {
            if(z-x === y-z) {
                finalString = "Mouse C";
            } else {
                finalString = z-x > y-z ? "Cat B" : "Cat A";        
    }
        }
    }

    console.log(finalString);
}

catAndMouse(1, 3, 2)