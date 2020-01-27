class Average {
    constructor(number1,number2,number3){
        this.number1 =number1;
        this.number2 = number2;
        this.number3 = number3;
        document.writeln("the first number is "+ this.number1 + "<br/>");
        document.writeln("the second number is "+ this.number2 + "<br/>");
        document.writeln("the third number is "+ this.number3 + "<br/>");
    }
    get average() { 
        return this.calAvg();   
    }
    calAvg() {

        return (this.number1 * this.number2 * this.number3) / 3 ;   
    }
}
var case1 = new Average(prompt("Enter number 1: "),prompt("Enter number 2: "),prompt("Enter number 2: "));
document.writeln("the avg is " +case1.average);
console.log(case1.average);