// alert("hello");

var h1 = document.getElementById("demo");

h1.innerText = "inserted by Dom";

var inputBox = document.getElementById("inputBox");
var btn = document.getElementById("btn");
var span = document.getElementById("span");

btn.onclick = () => {
    var value = inputBox.value;
    span.innerText = value;
    inputBox.value = "";
}