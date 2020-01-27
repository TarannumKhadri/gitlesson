class Area {
    constructor(leng,bre){
        this.leng =leng;
        this.bre = bre;
    }
    get area() {
        return this.getArea();
    }
    setDim(){
        console.log(this.leng,' is the length');
        document.writeln(this.leng,' is the length'+ "<br/>");
        console.log(this.bre,' is the breadth');
        document.writeln(this.bre,' is the breadth'+ "<br/>");
    }
    getArea(){
        return this.leng * this.bre;   
    }
}
var Rectangle = new Area(prompt("enter length of the rec"),prompt("enter breadth of the rec"));
Rectangle.setDim();
Rectangle.getArea();
document.writeln("The area is "+ Rectangle.area);
console.log("The area is "+ Rectangle.area);


