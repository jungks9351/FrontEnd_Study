class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return 'Hello, ' + this.name;
    }
}
const person = new Person('jungjin');
console.log(person.sayHello());
