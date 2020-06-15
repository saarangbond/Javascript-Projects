const person = {
    firstName: "Saarang",
    lastName: "Bond",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(newName){
        const parts = newName.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
};

person.fullName = "John Smith";

console.log(person);