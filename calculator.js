



export const calc = {
    userinputValues: [],
    operation: [],
    resolve: "",
    result: 0,
    displayValue: "0",
    segment: "",
    userInput(input){
        this.userinputValues.push(input);
        this.displayValue = this.userinputValues.join("");
        console.log(this.userinputValues);
    },
    inputtoDisplay(){
        console.log(this.userinputValues);
        this.displayValue = this.userinputValues.join("");
        console.log(this.displayValue);
        this.userinputValues = [];
    },
    add() {
        if (this.displayValue != "0"){
            this.inputtoDisplay();
            this.segment = this.displayValue + "+";
            this.operation.push(this.segment);
            console.log(this.operation);
            this.displayValue = "0";
            this.segment = "";
        }
        
    },
    sub() {
        this.inputtoDisplay();
        this.segment = this.displayValue + "-";
        this.operation.push(this.segment);
        console.log(this.operation);
        this.displayValue = "0";
        this.segment = "";
    },
    div() {
        this.inputtoDisplay();
        this.segment = this.displayValue + "/";
        this.operation.push(this.segment);
        console.log(this.operation);
        this.displayValue = "0";
        this.segment = "";
    },
    mul() {
        this.inputtoDisplay();
        this.segment = this.displayValue + "*";
        this.operation.push(this.segment);
        console.log(this.operation);
        this.displayValue = "0";
        this.segment = "";
    },
    equals(){
        this.inputtoDisplay();
        this.segment = this.displayValue;
        this.operation.push(this.segment);
        this.resolve = this.operation.join("");
        console.log(this.resolve);
        this.displayValue = eval(this.resolve);
        this.operation = [];
        console.log(this.displayValue);
        // console.log(typeof test);
        // this.displayValue = test.toString();
        // console.log(typeof this.displayValue);
    },
    clear(){
        this.userinputValues = [];
        this.operation = [];
        this.displayValue = "0";
    }

  }







