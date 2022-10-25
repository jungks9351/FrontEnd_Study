## JSX

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX는 JavaScript XML 로 JavaScript에 XML을 추가하여 확장한 문법입니다.

브라우저에서 실행되기 전에 코드가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.

JSX는 JavaScript의 모든 기능이 포함되어 있습니다.

JSX는 React "엘리먼트(Element)"를 생성합니다.

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다.

React는 JSX 사용이 필수는 아닙니다. 하지만 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 됩니다.

React에서 JSX를 사용하면 React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해줍니다.

## JSX 사용

```jsx
const App = () => {
  return <h1 className='hello'>Hello JSX!</h1>;
};
```

위와 같이 작성된 코드는 아래와 같이 변환됩니다.

```js
import React from 'react';

function App() {
  return React.createElement('h1', { className: 'hello' }, 'Hello JSX');
}
```

컴포넌트를 렌더링할 때 JSX를 사용하지 않고 React.createElement() 함수를 사용한다면 컴포넌트를 렌더링 할 수 있습니다.
하지만 이 방식은 JSX를 사용하는 방식보다 매번 함수를 사용해야 하기 때문에 불편합니다. JSX를 사용하면 매우 편하게 컴포넌트 UI를 렌더링할 수 있습니다.

## JSX 장점

### 1. 보기 쉽고 익숙하다.

JSX는 HTML 코드를 작성하는 것과 비슷하여 익숙하고 일반 자바스크립트 요소들을 일일이 만들어야 한다는 불편함과 어려움을 해소해줍니다.

### 2. 높을 활용도

JSX에는 div,span 같은 HTML 태그를 사용할 수 있을 뿐만 아니라, 우리가 만든 컴포넌트도 JSX 안에서 작성할 수 있습니다.

부모 컴포넌트에서 자식 컴포넌트를 HTML태그 쓰듯이 작성할 수 있습니다.

## JSX 문법

### 1. 감싸인 요소

컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야합니다.

```jsx
const App = () => {
  return (
    <h1>Hello JSX!</h1>;
    <h2>Hello React!</h2>
  )
};
```

위와 같은 코드는 제대로 작동하지 않습니다. 이 오류는 아래와 같이 코드를 작성하여 해결 할 수 있습니다.

```jsx
const App = () => {
  return (
    <div>
      <h1>Hello JSX!</h1>
      <h2>Hello React!</h2>
    </div>
  );
};
```

**여러개의 요소를 왜 하나의 요소로 감싸야하는 이유**

Virtaul DOM에서 컴포넌트 변화를 감지해 낼 때 효율 적으로 비교 할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조를 이루어져야 한다는 규칙이 있기 때문입니다.

리액트 v16 이상 부터는 Fragment라는 기능을 사용할 수 있습니다.

```jsx
const App = () => {
  return (
    <>
      <h1>Hello JSX!</h1>
      <h2>Hello React!</h2>
    </>
  );
};
```

### 2. 자바스크립트 표현

자바스크립트 표현식을 사용할려면 중괄호 {}를 사용하면 됩니다.

```jsx
const App = () => {
  const name = 'JSX';

  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>Hello React!</h2>
    </>
  );
};
```

### 3. 조건부 렌더링

if문 대신 조건부 연산자를 사용합니다.

JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없습니다.

{} 안에 조건부 연산자를 사용하면 됩니다.

#### 3.1. 삼항연산자

```jsx
const App = () => {
  const name = 'JSX';

  return (
    <>
      {name ? (
        <>
          <h1>Hello {name}!</h1>
          <h2>Hello React!</h2>
        </>
      ) : (
        <>
          <h1>Name is not declared</h1>
          <h2>Hello React!</h2>
        </>
      )}
    </>
  );
};
```

#### 3.2. AND 연산자(&&)

```jsx
const App = () => {
  const name = 'JSX';

  return (
    <>
      {naem && (
        <>
          <h1>Hello {name}!</h1>
          <h2>Hello React!</h2>
        </>
      )}
    </>
  );
};
```

#### 3.3. OR 연산자(||)

리엑트 컴포넌트에서는 아래와 같이 함수에서 undefined나 null을 반환하여 렌더링하려면 오류가 발생합니다.

```jsx
const App = () => {
  const name = 'undefined';

  return (
    <>
      <h1>Hello {name}!</h1>
    </>
  );
};
```

```jsx
const App = () => {
  const name = 'undefined';

  return <h1>{name || 'name is undefined'}</h1>;
};
```

### 4. JSX 속성 정의

어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.

```jsx
const element = <a href='https://www.reactjs.org'> link </a>;
```

중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 정의 할 수도 있습니다.

```jsx
const element = <img src={user.avatarUrl}></img>;
```

JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용합니다.

예를 들어, JSX에서 class는 className가 되고 tabindex는 tabIndex가 됩니다.

### 5. 인라인 스타일링

JSX에서는 style 속성 안에 직접 CSS를 포함할 수 없으며, 스타일 정보를 담은 객체를 참조해야합니다.
스타일 객체의 경우 기존 CSS 속성 명을 camelCase로 작성합니다.

```jsx
const App = () => {
  const name = 'JSX';

  return <h1 style={{ color: '#000', fontSize: '32px' }}>Hello World</h1>;
};
```

### 6. 닫는 태그

반드시 태그는 닫혀야 합니다. 그렇지 않을 경우 오류가 발생합니다.

\<div>, \<span> 같이 닫는 태그가 필요한 태그의 경우 반드시 닫는 태그를 닫아 주어야합니다.

\<img/>, \<input/>, \<br/> 같은 단독 태그(self-closing tag)의 경우에는 반드시 태그를 닫아줘야 합니다.

## JSX 특징

### 1. 대소문자를 구별합니다.

HTML은 소문자를 사용하여 태그를 사용하지만 JSX에서는 컴포넌트를 작성할 때는 컴포넌트 이름과 동일하게 작성해야합니다. PascalCase로 작성합니다.

```jsx
const App = () => {
  return (
    <div>
      <TestComponent />
    </div>
  );
};
```

### 2. 주입 공격을 방지합니다.

기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 처리하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.

### 3. 객체로 표현합니다.

```jsx
const element = <h1 className='hello'>Hello JSX!</h1>;
```

Babel을 통해 트랜스파일링되 React 엘리먼트는 아래 와 같은 객체를 생성합니다.

```js
const element = {
  type: 'h1',
  props: {
    className: 'hello',
    children: 'Hello JSX!',
  },
};
```

React는 이러한 객체를 읽고 DOM을 구성하고 최신으로 유지하는 데 이러한 객체를 사용합니다.

## 참고

- https://ko.reactjs.org/docs/rendering-elements.html
- https://velog.io/@gyumin_2/React-JSX%EB%9E%80%EC%A0%95%EC%9D%98-%EC%9E%A5%EC%A0%90-%EB%AC%B8%EB%B2%95-%ED%8A%B9%EC%A7%95-%EB%93%B1
