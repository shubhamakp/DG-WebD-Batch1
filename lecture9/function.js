function add(a,b) {
    console.log("addition is :" + (a+b));
}

add(2,3);
console.log("hi there !!");
add(5,7);

var add = function(){
    console.log("Add fuction");
    return 5;
}

add();
console.log(add());

var mult = (a,b) => {
    return a*b;
}

var mutl = (a,b) => a*b;

console.log(mutl(4,6));
console.log(mult(3,4));
