# TypeScript

자바스크립트 대체 언어의 하나로써 자바스크립트(ES5)의 상위확장(Superset)인 오픈소스 프로그래밍 언어입니다.

동적인 자바스크립트 언어에 타입을 부여한 언어입니다.

타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 컴파일 과정을 거쳐 변환해 주어야합니다.

![typescript](https://poiemaweb.com/img/typescript-superset.png)

## 왜 써야 할까?

타입 스크립트는 아래의 2가지 관점으로 자바스크립트 코드의 품질과 개발 생산성을 높일 수 있습니다.

### 1. 에러의 사전 방지

타입 스크립트는 컴파일 과정을 거치기 때문에 사전에 에러를 방지할 수 있습니다.

```ts
const sum = (a: number, b: number) => {
  return a + b;
};

// ts(2345) 'string' 형식의 인수는 'number' 형식의 매개변수에 할당될 수 없습니다.
console.log(sum('10', '20'));
```

### 2. 코드 자동 완성과 가이드

타입스크립트의 장점으로 코드를 작성할 떄 개발툴의 장점을 최대한을 활용할 수 있습니다.

자바스크립트에서는 아래와 같은 코드에서 total이라는 변수를 number로 인식을 하지 못해 자동완성이 되지 않고 오류가 발생하면 브라우저에 실행 했을 때 오류를 확인할 수 있습니다.

하지만 타입스크립트에서는 total을 number로 가정하기 때문에 toLocalString() API를 탭으로 미리 알려줘서 정확하게 작성할 수 있습니다.

```ts
const sum = (a: number, b: number): number => {
  return a + b;
};

const total = sum(1, 2);
// total 타입이  number로 지정
// 코드의 자동완성
total.toLocaleString();
```

## 정리

타입스크립트는 자바스크립트의 상위확장 언어입니다. 자바스크립트와 달리 타입스크립트는 브라우저에서 실행하기 전에 컴파일과정을 거치기 때문에 사전에 에러를 방지할 수 있고, 타입을 미리 지정해 두기 때문에 코드의 품질을 높이고, 개발툴을 최대한 활용할 수 있습니다.

### Reference

- https://poiemaweb.com/typescript-introduction

- https://joshua1988.github.io/ts/why-ts.html#%EC%99%9C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C%EC%9A%94
