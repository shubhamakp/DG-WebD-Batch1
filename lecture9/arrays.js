var fruits = ["orange","mango","banana","kiwi"];

console.log(fruits);

// Function of Arrays

// to find the length of the array 
console.log(fruits.length)

// shift and unshift 
// addition and deletion from the start
var removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

// push and pop
// addtion and deletion from the end
console.log(fruits.pop());
console.log(fruits);

fruits.push("water Melon");
console.log(fruits);


console.log("----------------------------------")
// to delete or add in between

// splice method 

// to delete 
fruits.splice(1,1);
// to add 
fruits.splice(1,0,"kiwi");
console.log(fruits);

fruits.reverse();
console.log(fruits)