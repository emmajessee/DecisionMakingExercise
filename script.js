//1a.
let randomNum = Math.floor(Math.random()* 5) + 1;
console.log(randomNum);

//1b. 
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum >= 2){
    console.log("Equal to 2 or 3");
} else { 
    console.log("Equal to 1");
}

//1c.
if (randomNum !== 3){
    console.log("Not equal to 3");
}

//1d. 
console.log(randomNum);
if ( randomNum !== 3 && randomNum !== 5){
    console.log("Not equal to 3 and not equal to 5");
}

//1e. 
if (randomNum !== 2 && randomNum !== 4){
    console.log("Equal to 2 or equal to 4");
    
}



