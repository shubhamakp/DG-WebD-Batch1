var person = {
    firstName: "Rajesh",
    lastName: "Kumar",
    Age: 48,
    Height: 5.2,

    askName: function () {
        console.log("My name is Rajesh");
    },
    x: {
        food: "paneer"
    }
};

console.log(person.firstName)
person.askName()

person.Address = "Delhi";
person.Age = 56;
console.log(person.x.food);


