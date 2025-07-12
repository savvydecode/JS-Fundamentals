//iterative approach
/* 
function factorial(n){

    let results = 1;
    for(i = 2; i <=n; i++){
        results *= i;
    }
    console.log(results);
}
factorial(4);

 */


//recurssive aproach
num = parseInt(process.argv.slice(2));; //Get arguments passed to the script, excluding the first two default ones, convert to number


function factorialRecurssive(n){
    let results = 1;
    if ((isNaN(n)) || (n < 1)){
        return results;
    } 
    return n *factorialRecurssive(n - 1);
} 

console.log(factorialRecurssive(num));