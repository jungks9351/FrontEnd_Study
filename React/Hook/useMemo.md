# useMemo

- 메모이제이션을 통해 컴포넌트를 성능 최적화 하기 위한 Hook

- 의존성이 변경 되었을 때에만 **메모이제이션된 값만 다시 계산**합니다.

- useMemo는 **값을 메모이제이션합니다.**

- 모든 렌더링 시의 **고비용 계산을 방지**하게 해 줍니다.

- **useMemo로 전달된 함수는 렌더링 중에 실행됩니다.**

- 렌더링 중에는 하지 않는 것을 useMemo 함수 내에서 하면 안됩니다.

- Side Effect 는 useEffect에서 하는 일이지 useMemo에서 해서는 안됩니다.

- 성능 최적화를 위해 사용할 수는 있지만 의미상으로 보장이 있다고 생각하면 안됩니다.

> 메모이제이션
>
> 이전 값을 저장해두어 동일한 계산의 반복 수행을 제거하는 기술이다.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- 첫번째 인수에는 함수, 두번째 인수에는 배열(의존성)을 넣어주면 됩니다.
  - 두번째 인수에 넣어준 배열(의존성)의 값이 바뀔때만 함수가 실행됩니다.
  - 그렇지 않다면 이전의 값을 재사용합니다.

### 꼭 필요할 때만 사용합니다.

- 값을 재활용하기 위해 따로 메모리를 소비해서 저장을 해놓는 것이기 때문에 불필요한 값을 모두 메모이제이션 해버리면 성능이 안 좋아질 수 있습니다.

- 객체는 원시 타입과 다르게 값이 저장될 때 주소 값으로 저장됩니다.
- 메모리상의 주소가 다르게 저장되는 것입니다.

```jsx
import React, { useEffect, useMemo, useState } from 'react';

const App = () => {
  const [isKorean, setIsKorean] = useState(null);
  const [count, setCount] = useState('');

  const onChange = e => {
    setCount(e.target.value);
  };

  // const person = { state: isKorean ? '입니다.' : '아닙니다' };

  const person = useMemo(() => {
    return {
      state: isKorean ? '입니다.' : '아닙니다',
    };
  }, [isKorean]);

  const handleIsKorean = () => {
    setIsKorean(true);
  };

  const handleIsNotKorean = () => {
    setIsKorean(false);
  };

  useEffect(() => {
    console.log('effect');
  }, [isKorean]);

  return (
    <div>
      <h2>Count</h2>
      <input type='number' onChange={onChange} />
      <h2>한국인 입니까?</h2>
      <button onClick={handleIsKorean}>네</button>
      <button onClick={handleIsNotKorean}>아니요</button>
      {isKorean !== null && <p>한국인 {person.state}</p>}
      <div></div>
    </div>
  );
};

export default App;
```

```js
const person = { state: isKorean ? '입니다.' : '아닙니다' };
```

- 눈으로 보이기에는 똑같지만 저장된 메모리 상의 주소가 완전히 다릅니다.
- useEffect에서는 isKorean 이 변경 되었다고 생각할 수 있습니다.
- 이를 해결하기 위해 useMemo를 사용하여 메모이제이션을 해줬습니다.
