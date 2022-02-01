// 생성자 함수
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    return `Hello ${this.name}`;
  };
}

// 인스턴스 생성
const kim = new Person('kim');
const lee = new Person('lee');

console.log(kim.sayHello === lee.sayHello); // false

console.log(kim.sayHello()); // Hello kim
console.log(lee.sayHello()); // Hello lee
