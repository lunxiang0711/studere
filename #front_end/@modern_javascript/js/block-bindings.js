"use strict";
function blockBindingDemo(){
    let roll_num = 123;
    var rol = 123;
    if(true) {
        let roll_num = 456;
        var rol = 789;
        console.log(roll_num);
        console.log(rol);
    }
    console.log(roll_num);
    console.log(rol);
}

blockBindingDemo();

console.log("-----------------------")

var i = 0;

for ( let i = 0; i < 5; i++ ) {
    console.log(i);
}

console.log(i);