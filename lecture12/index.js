var inputBox = document.getElementById("inputBox");
var btn = document.getElementById("btn");
var div = document.getElementById("div");

var divtext = div.innerText;

inputBox.onchange = () => {
    inputBox.value = inputBox.value.toUpperCase();
}

div.onmouseover = () => {
    div.innerText = "thankyou";
}

div.onmouseout = () => {
    div.innerText = divtext;
}