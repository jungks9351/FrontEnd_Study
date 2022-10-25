## Styled-Components

자바스크립트 안에 스타일 작성(CSS in JS)

### Styled-Components 장점

1. 컴포넌트화

- CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화하는 모듈성

2. CSS-in-JS

- CSS-in-JS는 JavaScript 환경을 최대한 활용

3. 상수 함수 공유

- 자바스크립트와 CSS 사이의 상수와 함수를 공유

4. DOM 분리

- 현재 사용 중인 스타일만 DOM에 포함

5. 코드 경량화

- 짧은 길이의 유니크 한 클래스를 자동으로 생성하는 코드 경량화

6. 클래스 이름 버그 없음

- styled-components는 스타일에 대한 고유한 클래스 이름을 생성합니다. 중복, 중복 또는 철자 오류에 대해 걱정할 필요가 없습니다.

### Styled-Components 단점

1. 용량

- 별도의 라이브러리 설치에 따른 번들 크기 증대 및 CSS-in-CSS에 비해 느린 속도 등을 들 수 있다.

2. 학습 곡선

- Styled-Components를 사용할려면 Styled-Components에 공부를 해야합니다.

- 저는 CSS, SCSS를 알면 학습 곡선은 어려운 면은 아니라 생각합니다. Styled-Components에 제공하는 기능들은 공식문서로 쉽게 배울 수 있습니다.

3. 새로운 의존성

- 스타일을 컴포넌트화 하면서 새로운 의존성이 생깁니다.

- 인터렉션이 활발한 페이지에서 렌더링이 자주 일어날 수 있는 문제가 발생합니다.

> 의존성
>
> 다른 것에 의지하여 생활하거나 존재하는 성질

### Styled-components with babel

```bash
npm i styled-components

npm i -D @types/styled-components babel-plugin-styled-components cross-env
```

- `styled-components`: styled-components를 사용합니다.
- `@types/styled-components`: styled-components를 사용할때 Typescript(타입스크립트)를 사용하기 위한 라이브러리.
- `babel-plugin-styled-components`: styled-components의 class명을 쉽게 알 수 있게 해주는 라이브러리.
- `cross-env`: Mac과 Windows에서 동일한 명령어로 환경 변수를 설정하기 위해 사용합니다.

#### .babelrc

```json
 "env": {
    "development": {
      "plugins": ["babel-plugin-styled-components"]
    }
  }
```
