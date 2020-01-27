var area={
    setDim(){
        length = prompt("Enter length: ");
         b = prompt("enter breadth: ");
    },
    getArea(length,b){
        return length *b;
    }
}
area.setDim()
document.writeln("area is " + area.getArea(length,b));
console.log(" the area is " + area.getArea(length,b));
