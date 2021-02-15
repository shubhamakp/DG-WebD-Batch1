// var count=0;
// setInterval(()=>{
//     count=count+1;
//     console.log("hello " + count);
// },1000)

var count=0;

var intervalId = setInterval(()=>{
    count++;
    console.log("it will print after every 1 sec " + count);
    if(count>5){
        clearInterval(intervalId)
    }
},1000)