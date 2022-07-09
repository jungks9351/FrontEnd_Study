# Styled-components with babel

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

추가



