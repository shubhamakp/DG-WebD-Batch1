var x = Math.PI;
console.log(x);

console.log("square root of 17 : " + Math.sqrt(17))

console.log("absolute of -5 is  : " + Math.abs(-5))

console.log("ceil of 4.4 is : " + Math.ceil(4.4))
console.log("floor of 4.4 is : " + Math.floor(4.4))

// random

// setInterval(() => {
//     console.log(Math.ceil(Math.random()*6))
// }, 1000)


var div = document.getElementById("div");

setInterval(() => {
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);

    var color = "rgb(" + r + "," + g + "," + b + ")";
    div.style.backgroundColor = color;
}, 100)