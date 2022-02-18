function Employee(name, salary, designation) {
  this.name = name;
  this.designation = designation;
  this.salary = salary;
}

function taxCalculator(taxrate) {
  console.log("tax is : " + (this.salary * taxrate) / 100);
}
Employee.taxCalculator = taxCalculator;
let lecturer = new Employee("kamran", 20000, "Lecturer");
let ap = new Employee("ALi", 50000, "AP");
lecturer.taxCalculator(10);
ap.taxCalculator(20);
ap.display = function () {
  console.log(this.name + "has a salaray of " + this.salary);
};
