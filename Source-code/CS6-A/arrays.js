let arr = [1, 2, 3];
const my_func = function (x) {
  return x * 2;
};
/* let result = arr.map(my_func);
console.log(result); */

let my_filter = function (x) {
  return x / 2 > 1;
};
let result_filter = arr.filter(my_filter);
console.log(result_filter);
