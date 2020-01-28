class Complex {
        constructor(real,imaginary){
        this.real =real;
        this.imaginary = imaginary;
}
 display(re,im){
    if(im === '0') return '' + re;
    if(re === 0) return '' + im + 'i';
    if(im < 0) return '' + re + im + 'i';
    return '' + re + '+' + im + 'i';
}
 sum() {
        var real = num1.real - -num2.real;
        var imaginary = num1.imaginary - -num2.imaginary;
        return display(real, imaginary);
}
 difference(){
        var real = num1.real - num2.real;
        var imaginary = num1.imaginary - num2.imaginary;
        return display(real, imaginary);
}
product(){
        var real = (num1.real * num2.real)-(num1.imaginary * num2.imaginary);
        var imaginary = (num1.real * num2.imaginary)+(num1.imaginary * num2.real); 
        return display(real, imaginary);
}
get complex() { 
    return this.sum()+ this.difference() + this.product();
    
}
}
var a = new Complex(prompt("real number: "),prompt("imaginary number: "));

var b = new Complex(prompt("real part: "),prompt("imaginary part: "));
//Complex.sum();
//console.log(complex);
//console.log(Complex.difference);
//console.log(product(a,b));

