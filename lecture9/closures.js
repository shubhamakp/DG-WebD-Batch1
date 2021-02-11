// function firstFunc(){
//     console.log("hello from first function");
//     let msg = "Shubham";
//     console.log("hello " + msg);

//     function secFunc(){
//         console.log("hello from second function " + msg);
//     }
//     return secFunc;
// }

// var FuncCall = firstFunc();

// FuncCall();


function makeAdder(x){

    function func (y){
        console.log(x+y);
    }
    return func;
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add5(10);

add10(10);
add10(15);