var btn = document.getElementById("btn");
var p = document.querySelector("p");
console.log(btn)

btn.onclick = () => {
    p.classList.toggle("para");
}

