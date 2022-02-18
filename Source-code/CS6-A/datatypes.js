var num = new Number();
var arr = [
  1,
  2,
  3,
  "kamran",
  function () {
    console.log("hello");
  },
];
arr["2"] = "modified";
console.log(arr["2"]);

//console.log(arr[3]);
