// 생성자 함수
function Person(name) {
  this.name = name;
}

// Person 생성자 함수가 생성한 모든 인스턴스가 sayHello 메서드를
// 공유해서 사용할 수 있도록 프로토 타입에 추가한다.
// 프로토타입은 Person 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.

Person.prototype.sayHello = function () {
  return `Hello ${this.name}`;
};

// 인스턴스 생성
const kim = new Person('kim');
const lee = new Person('lee');

// Person 생성자 함수가 생성한 모든 인스턴스는 부모객체의 역할을 하는
// 프로토타입 Person.prototype으로부터 sayHello 메서드를 받는다.
// Person 생성자 함수가 생성하는 모든 인스턴스는 하나의 sayHello 메서드를 공유한다.

console.log(kim.sayHello === lee.sayHello); // true

console.log(kim.sayHello()); // Hello kim
console.log(lee.sayHello()); // Hello lee
