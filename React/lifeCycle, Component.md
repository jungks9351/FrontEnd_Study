## React 라이프 사이클

리액트는 컴포넌트 기반의 View를 중심으로 한 라이브러리이며
각각의 컴포넌트에는 라이프사이클 즉, 컴포넌트의 생명 주기가 존재한다.
이것은 프로그램이 실행되고 종료되는 과정을 말한다.

![](https://images.velog.io/images/jungks9351/post/eed2100a-514c-4fa9-96be-f73baebbcc05/Reactlifecycle.png)

### Mounting

DOM이 생성되고 웹 브라우저 상(화면)에 나타남

마운트할 때는 다음의 메서드들이 차례대로 호출된다

- constructor

컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드

- getDerivedStateFromProps

props에 있는 값을 state에 넣을 때 사용하는 메서드

- render

우리가 준비한 UI를 렌더링하는 메서드

- componentDidMount

컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

### Updating

- shouldComponentUpdate

컴포넌트가 업데이트되는 성능을 최적화 시키고 싶을때 사용하는 메서드
부모컴포넌트가 랜더링 되면 그 자식컴포넌트도 다 랜더링 된다. 그런데 이 작업이 불필요해질때 사용하게 됩니다.

virtual dom 에도 랜더링을 할지말지 결정할때 사용한다.

true 와 false 를 반환

- getSnapshotBeforeUpdate

랜더링한 후에 브라우저상에 적용하기 바로직전에 호출되는 메서드

랜더링을 하고 나서 업데이트 하기전에 스크롤의 위치나 해당 돔의 크기를 사전에 가져오고 싶을때 사용한다.

- componentDidUpdate

component 가 업데이트 되었을때 호출되는 메서드

state 가 바꼈을때 이전의 상태와 지금의 상태가 바꼈을때 사용한다.

### Unmounting

Component 가 사라질 시점

## 클래스형 컴포넌트 VS 함수형 컴포넌트

### 클래스형 컴포넌트

- state, lifeCycle 관련 기능사용 가능하다.
- 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다.
- 임의 메서드를 정의할 수 있다.

### 함수형 컴포넌트

- state, lifeCycle 관련 기능사용 불가능
  - Hook을 통해 해결
- 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
- 컴포넌트 선언이 편하다.

## Class형 컴포넌트 라이프 사이클

```jsx
import React, { Component } from 'react';

class ClassComponent extends React.Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log(constructor);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default ClassComponent;
```

## 함수형 컴포넌트 라이프 사이클

### useEffect

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

클래스형 컴포넌트의 componentDidMount 와 componentDidUpadate를 합친 형태로 보아도 무방하다.

```jsx
import React, { useEffect, useState } from 'react';

const FunctionalComponent = () => {
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);

  const onChnageName = (e) => {
    setName(e.target.value);
  };

  const onClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    console.log('render');
    console.log('mount');
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log('unmount');
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <input value={name} onChange={onChnageName} />
      <div>이름 : {name}</div>
      <button onClick={onClick}>{visible ? '숨기기' : '보이기'}</button>
    </div>
  );
};

export default FunctionalComponent;
```

## 정리

![](https://images.velog.io/images/jungks9351/post/eed2100a-514c-4fa9-96be-f73baebbcc05/Reactlifecycle.png)

라이프 사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는 메서드이다. 이 메서드들은 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용하다.

함수형 컴포넌트는 라이프 사이클관련 메서드를 사용하지 못하지만 Hook을 사용하면 해결할 수 있다.

공식 문서에서는 새로 작성하는 컴포넌트와 Hooks를 사용할 것을 권장하고 있다.

앞으로 함수형 컴포넌트를 사용하는데 집중하고 필요한 상황에서 클래스형 컴포넌트를 구현해야겠다.
함수형 컴포넌트가 Hook을 사용하여 더 간결하게 표현이 가능하기 때문에 함수형 컴포넌트로 구현하는데 집중할 것이다.

함수형 컴포넌트가 클래스형 컴포넌트보다 후에 나왔지만 아직도 클래스형 컴포넌트를 사용하는 프로젝트가 있기 때문에 클래스형 컴포넌트도 유지보수를 위해 알아둘 필요가 있다.

## 📚 Reference

- 리액트를 다루는 기술 저자 김민준
