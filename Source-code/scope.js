let my_filter = function (num) {
  return num.length >= 2;
};
let my_map = function (num) {
  return num.length;
};
let words = ["abc", "a", "ab", "b"];
//let output = words.filter(my_filter);
let output = words.map(my_filter);
console.log(output);
