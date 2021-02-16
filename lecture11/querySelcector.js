var ptag = document.querySelector("#para");
var btn = document.getElementById("btn");

btn.onclick = () => {
    ptag.style.backgroundColor = "blue";
}

var heading = document.querySelectorAll("h1");
var button = document.getElementById("button");
button.onclick = () => {
    for(var i=0;i<heading.length;i++)
        heading[i].style.backgroundColor = "purple";
}