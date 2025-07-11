// function: prints arguments passed to it
function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones

    //check index 0 has a content
    if (args[0]){
        let num = 0;
        for (index in args){
            num += 1
        }

        if (num === 1){
            let argUpper = args[0].toUpperCase();
            console.log(`${argUpper}`);
        } else{
            let argsUpper = args[0].toUpperCase();
            let argsLower = args[1].toLowerCase();
            console.log(`${argsUpper}`);;
        }

    } else {
        console.log("No argument"); 
    }
    
}
checkArguments();
    










