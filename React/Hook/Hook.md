# HOOK

- Hook은 React 16.8 버전부터 새로 추가되었습니다.

- 함수형 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동(hook into)할 수 있게 해주는 함수입니다.
- Hook은 class 안에서는 동작하지 않습니다. 대신 Class 없이 React를 사용할 수 있게 해주는 것입니다.

### [useState](https://github.com/jungks9351/Front-End-Dev/blob/main/React/Hook/useState.md)

- 함수형 컴포넌트에서 상태를 관리를 가능하게 해주는 리엑트에서 제공하는 Hook

### [useEffect](https://github.com/jungks9351/Front-End-Dev/blob/main/React/Hook/useEffect.md)

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook

- 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook

### [useMemo](https://github.com/jungks9351/Front-End-Dev/blob/main/React/Hook/useMemo.md)

- 메모이제이션을 통해 컴포넌트를 성능 최적화 하기 위한 Hook

- useMemo는 값을 메모이제이션합니다.

- 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

> 메모이제이션
>
> 이전 값을 저장해두어 동일한 계산의 반복 수행을 제거하는 기술이다.

### [useCallback](https://github.com/jungks9351/Front-End-Dev/blob/main/React/Hook/useCallback.md)

- 메모이제이션을 통해 컴포넌트를 최적화 하기 위한 hook

- useCallback은 함수를 메모이제이션합니다.

- 기본적으로 컴포넌트 실행 전반에 걸친 함수를 저장하는 Hook

- 하위 컴포넌트가 React.memo로 최적화 되어 있고 함수를 prop으로 전달할 경우 유용하게 사용할 수 있다.

### React.memo

- 고차 컴포넌트(Higher Order Component)입니다.

- 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있습니다.
- React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.

- 필요한 상황에서만 리렌더링을 하도록 설정해줍니다.

#### useMemo, useCallback, React.memo는 컴포넌트의 성능을 실제로 개선할 수 있는 상황에서만 사용해야 합니다.

- 불필요한 비교와 버그가 발생합니다.

### Reference

- https://ko.reactjs.org/docs/hooks-reference.html
- https://react.vlpt.us/basic/
