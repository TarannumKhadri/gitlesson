
class Area {
    constructor(len,bre){
        this.len =len;
        this.bre = bre ;
        document.writeln("the length is "+ this.len + "<br/>");
        document.writeln("the breadth is "+ this.bre + "<br/>");
    }
    get area() {
        
        return this.returnArea();
        
      }
    returnArea() {
        return this.len * this.bre;   
     }
}
var Rectangle = new Area(prompt("Enter length of the Rectangle: "),prompt("Enter breadth of the Rectangle: "))
document.writeln("Area of Rectangle is " +Rectangle.area);
console.log(Rectangle.area);


