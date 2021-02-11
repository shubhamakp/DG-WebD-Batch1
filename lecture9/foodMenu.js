let menu = [
    "paneer tikka",
    "tandoori naan",
    "malai chaap",
    "tandoori chicken",
    "dal makhani",
    "chicken changezi",
    "butter chicken",
    "Egg curry",
    "onion pyaza",
    "garlic nan",
    "sweet dish",
    "Idli dosa",
    "chicken biryani",
    "pani poori"
]

function isVeg(food){
    if(food.indexOf("chicken")!=-1)
        return false;
    else if(food.toLowerCase().indexOf("egg")!=-1)
        return false;
    else 
        return true;
}

function onionGarlicFree(food){
    if(food.indexOf("onion")!=-1)
        return false;
    else if(food.indexOf("garlic")!=-1)
        return false;
    else 
        return true;
}

var vegMenu = menu.filter(isVeg);
console.log(vegMenu);

var jainMenu = menu.filter(isVeg).filter(onionGarlicFree)
// var jain = vegMenu.filter(onionGarlicFree)
console.log(jainMenu)