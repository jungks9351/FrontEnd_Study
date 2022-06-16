// 클래스 선언
class Circle {
  radius = ''; // SyntaxError

  // constructor
  constructor(radius) {
    this.radius = radius;
  }

  // 프로토타입 메서드 생성
  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  // 원의 넓이
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  static staticGetArea(radius) {
    this.radius = radius;
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    // super 메소드는 부모 클래스의 constructor를 호출하면서 인수를 전달
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    return this.height * super.getPerimeter() + 2 * super.getArea();
  }

  // 원통의 부피
  getVolume() {
    return super.getArea() * this.height;
  }
}

// 클래스 인스턴스 생성
const circle = new Circle(5); // Circle { radius: 5 }
const cylinder = new Cylinder(2, 10);

console.log(circle.getArea()); // 78.53981633974483
console.log(Circle.staticGetArea(10)); // 314.1592653589793

console.log(cylinder.getArea()); // 150.79644737231007
console.log(cylinder.getVolume()); // 125.66370614359172
