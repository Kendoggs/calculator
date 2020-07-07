import { calc } from './calculator.js'

window.calc = calc;

window.onclick = function(){
    document.getElementById("result").innerHTML = calc.displayValue;
    document.getElementById("operation").innerHTML = calc.operation.join("");
}


