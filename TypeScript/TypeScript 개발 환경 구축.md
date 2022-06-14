# TypeScript 개발 환경 구축

1. Node.js 설치

2. TypeScript 컴파일러 설치

```bash
npm install -g typescript
```

typescript 버전 확인

```bash
tsc -v
Version 4.7.3
```

```ts
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return 'Hello, ' + this.name;
  }
}

const person = new Person('jungjin');

console.log(person.sayHello());
```

-t || --target 를 사용하면 ‘ES3’(default), ‘ES5’, ‘ES2015’, ‘ES2016’, ‘ES2017’, ‘ES2018’, ‘ES2019’, ‘ESNEXT’ 버전을 변경할 수 있습니다.

ES6버전으로 트랜스 파일링할려면 아래와 같이 옵션을 추가하면 됩니다.

```bash
tsc pserson -t ES2015
```

```js
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
```

```bash
node person
Hello, jungjin
```

3. tsc 옵션 파일 설정
   매번 옵션을 설정하기 번거로우므로 tsc 옵션파일을 설정할 수 있습니다.

```bash
tsc --init
```

tsconfig.json 생성

```bash
tsc 파일명
```

위와 같이 명령하면 tsconfig.json 은 무시되므로 주의

코드를 모두 작성하면 tsc 명령어로 한번에 트랜스파일링 할수 있습니다.

4. 자동 감지

```bash
tsc --watch
```

또는 tsconfig.json 에 아래의 옵션을 추가하면 됩니다.

```json
{
  // ...
  "watch": true
}
```

컴파일러 옵션은 아래의 링크를 참고

[TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### Reference

- https://poiemaweb.com/typescript-introduction#21-%EC%A0%95%EC%A0%81-%ED%83%80%EC%9E%85
