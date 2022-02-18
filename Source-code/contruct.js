function Student(name, regno, uni) {
  this.name = name;
  this.regno = regno;
  this.uni = uni;
  this.display = function () {
    console.log("Name: " + this.name);
  };
}
let std1 = new Student("kamra", "01", "UEt");
let std2 = new Student("ali", "02", "CUI");
std2.display();
