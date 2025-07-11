
function checkArguments() {
    num = parseInt(process.argv.slice(2)); //Get arguments passed to the script, excluding the first two default ones, convert to number

    if (isNaN(num)) {
        console.log("Missing number of occurrences");
    } else if (num < 0) {
        // do nothing
    } else {
        for (i = 0; i < num; i++)
            console.log("C is fun")
    }
}
checkArguments();