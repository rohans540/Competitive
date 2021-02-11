//Author: Rohan Sharma
//Date: 12 Feb, 2021
//Problem name: Object Parsing recursively.


//Object to store the new resultant object
var newObj = {};

//Function to parse the object recursively and made keys with appended subkeys
function parseObjectAndPrint(obj, parent) {
    for(key in obj) {
        if(typeof obj[key] === 'object') {
            parseObjectAndPrint(obj[key], parent+"_"+key);
        } else {
            newObj[parent+"_"+key] = obj[key];
        }
    }
    return newObj;
};

//Example Object
const user = {
    name: {
        first: "Rohan",
        last: "Sharma"
    },
    address: {
        house: "A-45",
        street: "Govindpuri",
        city: "Gwalior",
        state: "Madhya Pradesh",
        pincode: "474011",
        email: {
            primary: "rohan1@gmail.com",
            secondary: "rohan2@gmail.com"
        },
    },
    profession: "Web Engineer"
}

//Diver code
console.log(parseObjectAndPrint(user, "user"));