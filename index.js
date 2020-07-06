import { calc } from './calculator.js'

window.calc = calc;

window.onclick = function(){
    document.getElementById("result").innerHTML = calc.displayValue;
}

calc.userInput("3");
calc.userInput("4");
calc.add();
calc.userInput("5");
calc.userInput("4")
calc.equals();