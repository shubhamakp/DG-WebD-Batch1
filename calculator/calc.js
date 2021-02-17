var numbers = document.getElementsByClassName("number");
var output = document.getElementById("output");
var operators = document.getElementsByClassName("operator");
var clear = document.getElementById("clear");
var backspace = document.getElementById("backspace");
var equal = document.getElementById("equal");

for(let i=0;i<numbers.length;i++)
{   
    numbers[i].onclick = () => {
        var x = output.innerText;
        var newOutput = x + numbers[i].value;
        output.innerText = newOutput;
    }
}

for(let i=0;i<operators.length;i++)
{
    
    operators[i].onclick = () => {
        console.log(operators[i])
        var x = output.innerText;
        var newOutput = x + operators[i].value;
        output.innerText = newOutput;
    }
}

clear.onclick = () => {
    output.innerText = "";
}

backspace.onclick = () => {
    var string = output.innerText;
    var newString = string.slice(0,string.length-1);
    output.innerText=newString;
}

equal.onclick = () => {

    var result = output.innerText;
    output.innerText = eval(result);
}