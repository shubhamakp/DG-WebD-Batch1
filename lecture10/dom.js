var button = document.getElementById("btn");
var div = document.getElementById("div");

button.onclick = () => {
    div.style.backgroundColor = "blue";
    div.style.border = "5px dotted purple";
    div.style.marginLeft = "100px";
}