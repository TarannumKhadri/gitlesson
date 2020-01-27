
class Area {
    constructor(len,bre){
        this.len =len;
        this.bre = bre ;

    }
    get area() {
        return this.returnArea();
      }
    returnArea() {
        return this.len * this.bre;
    
     }
}
var Rectangle = new Area(prompt("Enter length of the Rectangle: "),prompt("Enter breadth of the Rectangle: "))
//document.writeln("the length is "+ +"\n");
//document.writeln("the breadth is "+ "\n");
document.writeln("Area of Rectangle is " +Rectangle.area);
console.log(Rectangle.area);


