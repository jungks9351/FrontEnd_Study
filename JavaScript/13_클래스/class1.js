const Person = (function () {
  // constructor
  function Person(name) {
    this._name = name;
  }

  // public method
  Person.prototype.sayHello = function () {
    console.log(`Hello! ${this._name}`);
  };

  return Person;
})();

const jungjin = new Person('jungjin');

jungjin.sayHello(); // Hello! jungjin

console.log(jungjin instanceof Person); // true
