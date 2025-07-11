// function to check arguments passed from the command line into it.
function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones
    let argsNumber = args.length;
    if (argsNumber === 0) {
        console.log("No argument");
    } else if (argsNumber === 1) {
        console.log("Argument found");
    } else {
        console.log("Arguments found");
    }
}
checkArguments();
