

function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones
        console.log(args[0] + " is " + args[1])
}   
checkArguments();