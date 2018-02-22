const $ = require('jquery');
let sayHello = (string) => {
    console.log(`Hello ${string}`);
}

sayHello("Marcy");


$('h1').click(function(event) {
    $(event.target).css("background-color", "grey");
});

$('h2').click(function(event) {
    $(event.target).css("background-color", "grey");
});