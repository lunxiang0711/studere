var number = [1, 2, 3, 4, 5];

max = Math.max(...number);
console.log(max);

function logMessages(message, ...args) {
    console.log(message);
    // for ( let i = 0, len = args.length; i < len; i++ ) {
    //     console.log( args[i] );
    // }
    
    for ( index in args ) {
        console.log( args[index] );
    }
}

logMessages("abcd", "efgh", "ijkl");

