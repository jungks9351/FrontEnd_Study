# useEffect

함수형 컴포넌트에서 라이프 사이클을 유사하게 구현 해주는 Hook입니다.

componentDidMount, componentDidUpdate 와는 다르게 useEffect로 전달된 함수는 렌더링이 완료된후 발생합니다.

렌더링 전에 Effect를 발생할려면 useLayoutEffect Hook을 사용하면 됩니다.

```js
import React, { useEffect, useState } from 'react';

const App = () => {
  const [state, setStaet] = useState(0);

  const onClick = () => {
    setStaet(prev => prev + 1);
  };
  // mount update unmout 생명주기 유사 구현
  useEffect(() => {
    console.log('mount and update');
    return () => {
      console.log('unmount');
    };
  }, []);

  useEffect(() => {
    console.log('update');
  }, [state]);

  return (
    <div>
      {state}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
```
