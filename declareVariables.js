function start() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
}

start();
//var => function-scoped variables
//ES6: let, const => block-scoped variables

console.log();

var color = 'red';
let age = 30;

//var attaches variables to the window object
//let does not attach a variable to the window object