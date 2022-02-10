// 생성자 함수
function Person(name) {
  this.name = name;
  console.log(this); // Person { name: 'kim' }
  this.sayHello = function makeHello() {
    console.log(this);
    return `Hello ${this.name}`;
  };
}

// 인스턴스 생성
const kim = new Person('kim');

kim.sayHello();
