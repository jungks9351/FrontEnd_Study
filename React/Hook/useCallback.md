# useCallback

- 기본적으로 컴포넌트 실행 전반에 걸친 함수를 저장하는 Hook

- useCallback(fn, deps)은 useMemo(() => fn, deps)와 같습니다.

- useCallback은 **함수를 메모이제이션해서 함수의 재선언**을 방지합니다.

- 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

- deps 배열에 꼭 포함되야 하는 것: 함수 안에서 사용하는 상태 혹은 props

```jsx
// App.js
import React, { useState, useCallback } from 'react';
import Items from './Items';

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    console.log('호출');
    return [number, number + 1, number + 2];
  }, [number]);

  // const getItems = () => {
  //   console.log('호출');
  //   return [number, number + 1, number + 2];
  // };

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };

  return (
    <div style={theme}>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>테마 변경</button>
      <Items getItems={getItems} />
    </div>
  );
}

export default App;
```

```jsx
// Items.jsx
import React, { useEffect, useState } from 'react';

const Items = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());

    console.log('숫자가 변동되었습니다.');
  }, [getItems]);

  return items.map((item, index) => <div key={index}>{item}</div>);
};

export default React.memo(Items);
```

- 함수를 선언하는 것 자체는 사실 메모리도, CPU 도 리소스를 많이 차지 하는 작업은 아니기 때문에 함수를 새로 선언한다고 해서 그 자체 만으로 큰 부하가 생길일은 없지만, 한번 만든 함수를 필요할때만 새로 만들고 재사용하는 것은 여전히 중요합니다.

- 하위 컴포넌트가 React.memo로 최적화 되어 있고 함수를 prop으로 전달할 경우 유용하게 사용할 수 있다.

### React.memo

- 고차 컴포넌트(Higher Order Component)입니다.

- 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있습니다.
- React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.

- 필요한 상황에서만 리렌더링을 하도록 설정
