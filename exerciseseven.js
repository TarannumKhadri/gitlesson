class Employee{
    constructor(salary,hours){
        this.salary=salary;
        this.hours=hours;
    }
    getInfo(){
        console.log(this.salary+" and " +this.hours);
    }
    AddSal(){ 
        //console.log(prompt("Enter salary: "));
        if (this.salary < 500)
         this.salary = this.salary - -10;
         console.log("the extra salary is "+this.salary);

    }
    AddWork(){
       // console.log(prompt("Enter No. of hours : "));
        if (this.hours > 6 )
        this.salary =this.salary - -5;
       console.log("the new salary is: " +this.salary)
    }
    get finalSalary(){
        return this.getInfo();
    }
}
var employee1 = new Employee(prompt("Enter salary: "),prompt("No.of hours: "));
employee1.getInfo;
employee1.AddSal;
employee1.AddWork;
//console.log(employee1.AddSal());