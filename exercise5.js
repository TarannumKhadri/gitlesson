class Employee {
    constructor(name,year,salary,address){
    this.name = name;
    this.year = year;
    this.salary = salary;
    this.address= address;
}
 information() {
    return "the employee details are";
}
}
 var employee1= new Employee("Robert",1994,"64C-WallStreet");
 var employee2= new Employee("Sam",2000,"68D-WallStreet");
 var employee3= new Employee("John",1999,"26B-WallStreet");
 
console.log(employee1,employee2,employee3); 
// document.writeln("the details are " + employee1,employee2,employee3);

    /*var myArray = [{ name: "Robert", year: 1994, address: "64C-WallStreet"},
 { name: "Sam", year: 2000, address: "68D-WallStreet" },
 { name: "John", year: 1999, address: "26B-WallStreet"}];


for (var i = 0; i < myArray.length; i++) {
    var data = myArray[i];
   var obj = new Employee(data.name,data.year,data.address) ;
   myObjects.push(obj);
}
console.log(myObjects);
document.writeln("the details are "+
;*/