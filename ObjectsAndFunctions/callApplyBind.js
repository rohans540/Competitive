let name = {
    firstName: "Rohan",
    lastName: "Sharma",
    getFullName: function () {
        console.log(this.firstName+" "+this.lastName);
    }
};

let name2 = {
    firstName: "Dennis",
    lastName: "Ritchie"
}

name.getFullName();
name.getFullName.call(name2);