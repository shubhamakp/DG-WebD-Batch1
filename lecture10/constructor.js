function Person (first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.Age = age;

    this.greet = function(){
        return "Hello this is :" + this.firstName;
    }
}


var person1 = new Person("Rajesh","Kumar",56);
person1.height = 20;
var person2 = new Person("Monu","Sharma",22);
console.log(person1);
