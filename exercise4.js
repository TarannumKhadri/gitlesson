function Complex(real , imaginary) {
        this.real =real;
        this.imaginary = imaginary;
}
function display(re,im){
    if(im === '0') return '' + re;
    if(re === 0) return '' + im + 'i';
    if(im < 0) return '' + re + im + 'i';
    return '' + re + '+' + im + 'i';
}
function sum(num1,num2) {
        var real = num1.real + num2.real;
        var imaginary = num1.imaginary + num2.imaginary;
        return display(real, imaginary);
}
function difference(num1,num2){
        var real = num1.real - num2.real;
        var imaginary = num1.imaginary - num2.imaginary;
        return display(real, imaginary);
}
function product(num1,num2){
        var real = (num1.real * num2.real)-(num1.imaginary * num2.imaginary);
        var imaginary = (num1.real * num2.imaginary)+(num1.imaginary * num2.real); 
        return display(real, imaginary);
}
var a = new Complex(prompt("real number: "),prompt("imaginary number: "));

var b = new Complex(prompt("real part: "),prompt("imaginary part: "));

console.log(sum(a,b));
console.log(difference(a,b));
console.log(product(a,b));




