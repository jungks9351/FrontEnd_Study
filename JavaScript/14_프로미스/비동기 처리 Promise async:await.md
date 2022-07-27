# 비동기(Asynchronous)

## Promise를 사용한 비동기 통신과 async, await를 사용한 비동기 통신의 차이점을 설명해주세요.

## 비동기 처리

특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성

약속을 잡아두고 먼저 할 일을 하는것과 같다.

## 비동기 처리

간단한 예로 setTimeout이 있다.

```jsx
console.log('1')
setTimeout(()=>{console.log('2초 뒤 2')},2000)
console.log('3')
```

위의 코드를 실행시 1 → 3 → 2초뒤 2 순으로 출력이 된다.

이 처럼 특정 로직이 실행이 끝날 때까지 기다려 주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리이다.

만약에 delay 시간을 매우 크게 하고 특정 로직을 기다리고 실행을 한다면 웹 어플리케이션을 실행하는데 많은 시간이 걸릴 것이다.

## 콜백 함수로 비동기 처리 방식 해결

callbackFunc

printFunc

```jsx
const callbackFunc = params => {
  console.log(params);
};

const printFunc = callbackFunc => {
  let value;
  console.log('Waiting 3s');
  console.log('Waiting...');

  setTimeout(() => {
    value = 'Hello';
    callbackFunc(value);
  }, 3000);
};

printFunc(callbackFunc);
/* Start
Waiting 3s
Waiting...
(3s after)
Hello
End */
```

### 콜백 지옥 Callback hell

```jsx
const a = callback => {
  callback('callback');
};

const b = (result, callback) => {
  console.log(result);
  callback(result);
};
const c = (result, callback) => {
  console.log(result);
  callback(result);
};
const d = (result, callback) => {
  console.log(result);
  callback(result);
};
const e = (result, callback) => {
  console.log(result);
  callback(result);
};
const f = (result, callback) => {
  console.log(result);
  callback(result);
};

a(resultsFromA => {
  b(resultsFromA, resultsFromB => {
    c(resultsFromB, resultsFromC => {
      d(resultsFromC, resultsFromD => {
        e(resultsFromD, resultsFromE => {
          f(resultsFromE, resultsFromF => {
            console.log(resultsFromF);
          });
        });
      });
    });
  });
});
```

콜백함수의 극닥전인 예시이다. 위와 같은 코드는 가독성이 떨어지고 에러처리 등에서 불편하다.

이를 해소하기 위해  `ES6`에서 `Promise` 객체가 등장했다.

## Promise

Promise 개체는 비동기 작업의 최종 완료 (또는 실패)와 그 결과 값을 나타낸다.

Promise는 자바스크립트 비동기 처리에 사용되는 객체이다.

비동기 작업이 종료후 성공이나 실패를 처리할 수 있다.

[Promise - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#설명)

![https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

Promise는 다음 중 하나의 상태를 가진다.

- 대기(pending): 이행하거나 거부되지 않은 초기 상태
- 이행(fulfilled): 연산이 성공적으로 완료됨
- 거부(rejected): 연산이 실패함

성공 시 fullfilled

```jsx
const promise = () =>
  new Promise((resolve, reject) => {
    console.log('pending'); //pending...
    resolve(`I'm resolve Fullfiled`);
  })
    .then(a => console.log(res))

promise(); // I'm resolve Fullfiled
```

실패시 rejected

```jsx
const promise = () =>
  new Promise((resolve, reject) => {
    console.log('pending'); // pending...
    reject(new Error(`I'm Error Rejected`));
  })
    .then(a => console.log(res))
    .catch(err => console.log(err));

promise(); // Error: I'm Error Rejected
```

Callback hell 을 Promise로

```jsx
const a = () => {
  return new Promise((resolve, reject) => {
    resolve('resolveA');
    reject(new Error('ErrorA'));
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const b = () => {
  return new Promise((resolve, reject) => {
    resolve('resolveB');
    reject(new Error('ErrorB'));
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const c = () => {
  return new Promise((resolve, reject) => {
    resolve('resolveC');
    reject(new Error('ErrorC'));
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const d = () => {
  return new Promise((resolve, reject) => {
    resolve('resolveD');
    reject(new Error('ErrorD'));
  });
};
const e = () => {
  return new Promise((resolve, reject) => {
    // resolve('resolveE'); 에러처리
    reject(new Error('ErrorE'));
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const f = () => {
  return new Promise((resolve, reject) => {
    resolve('resolveF');
    reject(new Error('ErrorF'));
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const promise = new Promise((resolve, reject) => {
  resolve('resolve');
  reject('reject');
})
  .then(res => console.log(res))
  .catch(err => console.log(err));

promise
  .then(a)
  .then(b)
  .then(c)
  .then(d)
  .then(e)
  .then(f)
  .catch(err => console.log(err));
/*
resolve
resolveA
resolveB
resolveC
Error: ErrorE
resolveF
*/
```

Promise를 사용하여 Callback Hell을 then 과 catch로 가독성을 높이고 에러처리를 쉽게 할 수 있다.

하지만 현재 Promise 객체를 쓰는 것보다 async/await이 훨씬더 가독성과 에러처리에 좋다.

## Promise 기반 async/await

`ES2017`에 새로 추가된 `async/await`는 위에서 알아봤던 `Promise 객체`를 기반으로 사용한다.

함수 앞에 async만 붙이면 Promise 객체가 된다

```jsx
const a = () => {
  console.log('a');
};
const b = () => {
  console.log('b');
};
const c = () => {
  console.log('c');
};
const d = () => {
  console.log('d');
};
const e = () => {
  throw new Error('e');
};
const f = () => {
  console.log('f');
};

const AsyncAwaitFunc = async () => {
  console.log('start');
  try {
    await a();
    await b();
    await c();
    await d();
    await e();
    await f();
  } catch (err) {
    console.log(err);
  }
  console.log('end');
};

AsyncAwaitFunc();
/*
start
a
b
c
d
(node:2243) UnhandledPromiseRejectionWarning: Error: e
*/
```

try catch 문과 함께 사용하면 가독성과 에러처리를 손쉽게 할 수 있다.

비동기 처리는 async await를 사용하여 더 클린한 코드를 작성하도록 하는게 좋겠다 생각이 든다.