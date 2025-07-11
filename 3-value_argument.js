
// function: prints arguments passed to it
function checkArguments() {
    args = process.argv.slice(2); //Get arguments passed to the script, excluding the first two default ones

    //check index 0 has a content
    if (args[0]){
        let num = 0;
        for (index in args){
            num += 1
        }

        let agrsString = args.join(' ')

        if (num === 1){
            console.log(`one argument "${agrsString}"`);
        } else{
            console.log(`2 arguments "${agrsString}"`);;
        }

    } else {
        console.log("No argument"); 
    }
    
}
checkArguments();
    