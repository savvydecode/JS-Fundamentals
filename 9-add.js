

const myArray = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones, convert to number

let num1 = "";
let num2 = "";

if (myArray.length < 2){
    console.log("NaN");
} else {
    num1 = parseInt(myArray[0]);
    num2 = parseInt(myArray[1])
    add(num1, num2);
}

function add(a,b){
    console.log(a+b);
}
