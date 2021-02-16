var inputBox = document.getElementById("inputBox");
var btn = document.getElementById("btn");
var ul = document.getElementById("list");

btn.onclick = () => {
    var value = inputBox.value;
    inputBox.value = "";
    var li = document.createElement("li");
    li.innerText = value;
    ul.append(li);
}