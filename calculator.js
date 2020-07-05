



export const calc = {
    userinputValues: [],
    operation: [],
    result: 0,
    displayValue: "0",
    userInput(input){
        this.userinputValues.push(input);
        console.log(this.userinputValues);
    },
    inputtoDisplay(){
        console.log(this.userinputValues);
        this.displayValue = this.userinputValues.join("");
        console.log(this.displayValue);
        this.userinputValues = [];
    },
    add() {
        this.inputtoDisplay();
        segment = this.displayValue + "+";
        this.operation.push(segment);
        console.log(this.operation);
        this.displayValue = 0;
    },
    sub() {
        this.inputtoDisplay();
        segment = this.displayValue + "-";
        this.operation.push(segment);
        console.log(this.operation);
        this.displayValue = 0;
    },
    equals(){
        this.inputtoDisplay();
        segment = this.displayValue;
        this.operation.push(segment);
        resolve = this.operation.join("");
        console.log(resolve);
        test = eval(resolve);
        console.log(typeof test);
        this.displayValue = test.toString();
        console.log(typeof this.displayValue);
    },
    clear(){
        this.userinputValues = [];
        this.operation = [];
    }

  }


  calc.userInput("3");
  calc.userInput("4");
  calc.add();
  calc.userInput("5");
  calc.userInput("4")
  calc.equals();




