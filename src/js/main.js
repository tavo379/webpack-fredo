import 'jquery';
import Typed from 'typed.js';
var animate = require('animate.css');

require('../css/estilos.css');

let algo = "perro";
console.log(algo);
function suma(a, b) {
    return a+b;
}

$('.unacosa').click(function(){
    $('.unacosa').toggleClass('animated bounceInLeft');
}) 
console.log(suma(10, 40));

$('#algo').click(function(){
    $('#algo').toggleClass("unPerro");
});



var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 40
  }
  
  var typed = new Typed(".element", options);


