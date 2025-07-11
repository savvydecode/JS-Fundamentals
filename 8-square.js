
function checkArguments() {
    num = parseInt(process.argv.slice(2)); //Get arguments passed to the script, excluding the first two default ones, convert to number

    if (isNaN(num)) {
        console.log("Missing size");
    } else if (num < 0) {
        // do nothing
    } else {
        //first loop prints vertically
        for (j = 0; j < num; j++) {

            //second loop prints horizontally
            const myArray = [];
            for (i = 0; i < num; i++) {
                myArray[i] = 'X';
                //for i to alterate to be equal to num, i has to be increased by one. (if num is 4 and iterate 4 times, i will start from 0 and will be 3 by the end of the iteration)
                if (i + 1 === num) {
                    console.log(myArray.join(''))
                }
            }

        }

    }
}
checkArguments();

/* for(j = 0; j < num; j++){
                myArray[i] = "X";
                console.log(myArray)
                if (myArray.length = num){
                    console.log(myArray.join(''))
                } else {
                    myArray[i] = "X";
                }
                
            } */