let obj = {
  name: "Kamran",
  age: 30,
  message: function () {
    console.log("greeting");
  },
};
let obj1 = {
  name: "Kamran",
  age: 30,
  message: function () {
    console.log("greeting");
  },
};
obj1.name = "Ali";
obj2 = obj;
obj2.name = "omer";
console.log(obj.name);
