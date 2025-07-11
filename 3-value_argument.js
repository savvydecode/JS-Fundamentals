
// function: prints arguments passed to it
function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones
    let argsNumber = args.length;
    if (argsNumber === 0) {
        let agrsString = args.join(' '); // convert the array to string with each element seperated by a space character
        console.log("No argument");
    } else {
        console.log(args.join(' '));
    } 
    
}
checkArguments();