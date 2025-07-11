function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones
    if(typeof(args) === undefined) {
        console.log("Not a number"); 
    } else {
        
        if( isNaN(args)){
            console.log("Not a number"); 
        
        } else{
            console.log(`My number: ${parseInt(args)}`);
        }

    }
}   
checkArguments();