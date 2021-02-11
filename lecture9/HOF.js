function display(val){
    console.log(val);
}

function add(a,b,display){
    var sum = a+b;
    display(sum);
}

add(5,6,display);

// second example
var greetFormal = () => {
    console.log("How are you ?");
}

var greetCasual = () => {
    console.log("Aur kaise ho");
}

var greet = (type,greetFormal,greetCasual) =>{
    if(type==="casual")
        greetCasual();
    else if(type==="formal")
        greetFormal();
}

// greet("casual",greetFormal,greetCasual)
greet("formal",greetFormal,greetCasual);


// Map , filter , Reduce 

var arr = [1,2,3,4,5,6];
// Map 
var newArr = arr.map(function(item){return item*2})

var newA = arr.map(func);
function func(item){
    return item*4;
}
console.log(newA)
console.log(newArr)

// filter
var filtered = newArr.filter(function(item){
    return item>=8;
})

console.log(filtered)

// Reduce 

var reduced = arr.reduce(function(prev,curr){
    return prev+curr;
},10);

console.log(reduced)