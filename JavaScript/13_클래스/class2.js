console.log(Person);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello! ${this.name} ${this.age}`;
  }
}

// 클래스의 상속
class MyProfile extends Person {
  userName() {
    return `${this.name}`;
  }
  userAge() {
    return `${this.age}`;
  }
}

const jungjin = new MyProfile('jungjin', 30);

console.log(jungjin.sayHello()); // Hello! jungjin
console.log(jungjin.userName()); // jungjin
console.log(jungjin.userAge()); // 30
console.log(jungjin instanceof Person); //true
console.log(jungjin instanceof MyProfile); //true
