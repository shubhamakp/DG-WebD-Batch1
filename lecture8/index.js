// alert("js added");

console.log("hello");
console.log(2<3);

var a = 12;

if(a>10){
    let z = 15;
    var b = 20;
    console.log("greater");
}else{
    console.log("smaller");
}
console.log(a);
// console.log(z);
console.log(b);

const c = 2;
console.log(c);
// c=c+2;
// console.log(c);


// string concatenation

var x = "hello";
var y = " world";
console.log(x+y);


// Even odd code using if else 

var value = 18;

if(value % 2 == 0){
    console.log(value + " is Even");
}else{
    console.log(value + " is Odd");
}


// marking

var marks = 65;
if(marks>80){
    console.log("A grade");
}else if(marks>61 && marks<80){
    console.log("B grade");
}else {
    console.log("Fail");
}


// for loop

for(var i=1 ; i<=10 ; i++){
    console.log("hello " + i);
}


// while loop

var j=1; //initialization
while(j<=10){ //condition check
    console.log("inside while " + j);
    j=j+1; //update
}

// do while loop

var k = 25;
do{
    console.log("inside do while");
    k++;
}while(k<=10);