# useEffect

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook

- 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서 사용할 수 있게 해주는 Hook

- componentDidMount, componentDidUpdate 와는 다르게 useEffect로 전달된 함수는 렌더링이 완료된후 발생합니다.

- 렌더링 전에 Effect를 발생할려면 useLayoutEffect Hook을 사용하면 됩니다.

```js
useEffect(() => {
  //effect
  return () => {
    //cleanup
  };
}, [Dependency]);
```

- Dependency 가 빈배열이면 effect 안의 prop과 state는 초깃값을 유지하게 됩니다.
- effect가 한 번만 실행되고 매번 렌더링 시에는 실행되지 않음을 의미합니다.

- Dependency에 state가 들어가면 컴포넌트에서 자동으로 다시 가져오기가 트리거 됩니다.

- multiple Effect 가 가능합니다.

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
      console.log('unmount cleanup');
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

## Side Effect

React 컴포넌트가 화면에 1차로 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect라 합니다.

- 어떤 데이터를 가져오기 위해서 외부 API를 호출하는 경우,일단 화면에 렌더링할 수 있는 것들을 먼저 렌더링하고 실제 데이터는 비동기로 가져오는 것이 권장됩니다.
- 요청 즉시 1차 렌더링을 함으로써 연동하는 API가 응답이 늦어지거나 응답이 없을 경우에도 영향을 최소화 시킬 수 있어서 사용자 경험 측면에서 유리하기 때문입니다.

- 종류
  - 정리(Clean-up)가 필요한 것
  - 정리가 필요하지 않은 것 (network requires, DOM 수동 조작, 로깅 등)

#### 정리(Claen-up)가 필요한 것

메모리의 누수가 발생하지 않도록 정리 하는 것은 매우 중요합니다.

#### 친구의 온라인 상태를 구독할 수 있는 ChatAPI 모듈의 예시 컴포넌트

- 클래스형 컴포넌트

```js
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(this.props.friend.id, this.handleStatusChange);
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```

- 함수형 컴포넌트

```js
mport React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

#### 정리가 필요하지 않은 것

- network requires, DOM 수동 조작, 로깅 등

##### React가 DOM을 바꾸고 난 뒤 문서 타이틀을 업데이트하는 React counter 클래스 컴포넌트

- 클래스형 컴포넌트

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

- 함수형 컴포넌트

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
