const my_func = function () {
  console.log("hello ");
};

function caller(func) {
  func();
}
caller(my_func);
