/**Question 1 */
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();
/**OutPut:
 * bar
 * bar
 * undefined
 * bar
 */

/**Question 2 */
function checkPalindrome(pal) {
  return pal.split("").reverse().join("") == pal ? true : false;
}
console.log(checkPalindrome("ba"));
/**Question3 */
console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2"); //32
console.log(1 + -"1" + "2"); //02
console.log("A" - "B" + "2"); //NaN2
console.log("A" - "B" + 2); //NAN

/**Question 4 */
var myArray = ["a", "b", "c", "d"];
myArray.push("end");
myArray.unshift("start");
console.log(myArray);
/**Question 5 */
let Myobj = ["a", "b", "c", "d,e,f", "a,b,c"];
let final = [];
for (item of Myobj) {
  final = [...new Set([...final, ...item.split(",")])];
}
console.log(final);
