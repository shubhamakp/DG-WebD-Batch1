var colorInput = document.getElementById("color");
var btn = document.getElementById("btn");
var div = document.getElementById("box");

btn.onclick = () => {
    var value = colorInput.value;
    div.style.backgroundColor = value;
}