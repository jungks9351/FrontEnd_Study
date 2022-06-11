# useState

함수형 컴포넌트에서 상태를 관리를 가능하게 해주는 리엑트에서 제공하는 Hook

```js
const [state, setState] = useState('초기값');
```

state, setState 값은 개발자가 임의로 명명할 수 있습니다.

여러 상태를 관리 할 수 있습니다.

```js
const [count, setCount] = useState(0);
const [title, setTitle] = useState('');
...

```

## setState()

함수형 컴포넌트에서 상태를 관리할 수 있게 해주는 useState Hook에서 반환되는 함수입니다.

### 특징

#### 1. 기본적으로 비동기로 동작합니다.

```js
import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(0);
  const onClick = () => {
    setState(1);
    console.log(state); // 0
  };

  console.log(state); // 0 -> 1
  return (
    <div>
      {state}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
```

클릭 이벤트 시 setState는 비동기로 작동합니다. 클릭시 state는 변경되었지만 console에는 이전 state 값을 출력합니다.

setState 호출 시 state를 변경해서 바로 리렌더링을 하는 것이 아닙니다.

#### 2. 연속적으로 호출했을 때 리액트 내부적으로 Batch 처리를 합니다.

```js
import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(0);
  const onClick = () => {
    setState(state + 1);
    setState(state + 2);
    setState(state + 3);
    console.log(state); // 0
  };

  console.log(state); // 0 -> 3
  return (
    <div>
      {state}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
```

클릭시 state 가 0 에서 6으로 변경을 하기를 기대 했지만 그러지 않았습니다. 그 이유는 리액트가 batch update(일괄 업데이트)를 하기 때문입니다.

setState가 호출되면 전달 받은 state로 값을 변경 하는 것이 아니라
이전의 리액트 엘리먼트 트리와 state가 적용된 엘리먼트 트리를 비교한후 DOM에 적용합니다.

리액트는 batch update 16ms단위로 합니다.
16ms 동안 변경된 상태 값들을 한번에 모아서 단 한번 리렌더링 합니다.

Batch update를 해결하기 위해선 아래의 방법으로 update 함수를 전달하여야 합니다.

**리액트가 비동기적으로 작용하는 이유는 Batch update를 하기 위함입니다. Batch update를 하는 이유는 웹에서 불필요한 렌더링 횟수를 줄여 더 빠른 속도로 동작하기 위함입니다.**

#### 3. 인자로 넘겨줄 새로운 state를 반환하는 함수의 인자에 이전 state값을 인자로 받아올 수 있습니다.

```js
import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(0);
  const onClick = () => {
    setState(prev => prev + 1);
    setState(prev => prev + 2);
    setState(prev => prev + 3);
    console.log(state); // 0
  };

  console.log(state); // 0 -> 6
  return (
    <div>
      {state}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
```

setState의 업데이트 함수에 인자로 이전의 state값을 받아올 수 있습니다.

업데이트 함수를 사용하면 처음에 의도했던 state 6을 console에 출력할 수 있습니다.

**리액트가 state를 즉시 업데이트 하지 않고 리렌더링하는 이유는 prop, state 사이의 일관성을 헤쳐 디버깅 하기 힘든 이슈가 생길 수 있기 때문입니다.**

### 정리

useState는 함수형 컴포넌트에서 상태를 관리하게 해줄 수 있는 Hook이며 상태 관리를 위해 반환하는 setState 함수는 비동기적으로 동작하며, 연속적으로 호출시 Batch update를 하기 때문에 업데이트 함수에 이전 state값을 전달 받아 state를 변경해야 합니다.

#### Reference

- https://leehwarang.github.io/docs/tech/2020-07-28-setState.html
- https://taenami.tistory.com/49
