/**Keyword class used for the creation of classes */
class Person {
  constructor(name) {
    this.p = name;
  }
  /**get keyword for getter */
  get name() {
    return this._name;
  }
  /**set keyword for the setter */
  set p(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

let p = new Person("kamran");
console.log(p.name);
