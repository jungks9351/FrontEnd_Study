# Webpack Babel Polyfill

## Webpack 웹팩

> [webpack](https://webpack.kr/)

웹팩은 JS 모듈 번들러입니다. ES6문법을 ES5문법으로 번들링을 해줍니다.

### 0. 폴더 생성

```bash
mkdir [폴더이름]
```

### 1. npm 의존성 초기화

> [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init)

```bash
npm init -y
```

-y 플래그는 생성기에 질문 대신 기본값을 사용하도록 지시

npm이 명령줄에 인쇄할 수 있는 모든 프롬프트에 자동으로 "예"라고 대답합니다.

### 2. 바벨 설정

> [babel](https://babeljs.io/)

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

> @babel/core babel
> 코어 제공
>
> @babel/preset-env
>
> 대상 환경에 필요한 구문 변환(및 선택적으로 브라우저 폴리필)을 세세하게 관리할 필요 없이 최신 JavaScript를 사용할 수 있는 스마트 사전 설정
>
> @babel/preset-react
>
> react 사전 설정

- 바벨이란 자바스크립트 컴파일러입니다.

- Babel은 현재 및 이전 브라우저 또는 환경에서 ECMAScript 2015+ 코드를 이전 버전의 JavaScript로 변환하는 데 주로 사용되는 도구 체인입니다.
  - ES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜줍니다. (크로스 브라우징)

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 3. 웹팩 설정

[webpack-github](https://github.com/webpack/webpack)

```bash
npm i -D webpack webpack-cli webpack-dev-server
```

- [webpack](https://github.com/webpack/webpack#install) : 모듈을 위한 번들러입니다.

- [webpack-cli](https://www.npmjs.com/package/webpack-cli) : 웹팩 프로젝트를 설정할 때 속도를 높일 수 있는 유연한 명령을 제공해줍니다.

- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) : 라이브 재로딩을 제공하는 개발 서버를 제공합니다.

  - 개발용으로만 사용합니다.
  - webpack-dev-server는 항상 전역 설치보다 로컬 설치를 사용합니다.

```js
module.exports = {
  // mode 설정
  mode: 'development',
  // 진입 포인트 설정
  entry: './src/index.js',
  output: {
    // output으로 번들된 파일이름 지정
    filename: 'bundle.[hash].js',
  },
};
```

### 4. loader

```js
module.exports = {
  //...

  module: {
    rules: [
      {
        test: '빌드할 파일 확장자 정규식'
        exclude: '제외할 파일 정규식'
        use: {
          loader: '사용할 로더 이름'
          option: '로더 옵션'
        }
      }
    ]
  },
};
```

```bash
npm i -D babel-loader html-loader
```

- babel-loader : ES6문법을 ES5로 바꿀수 있는 바벨을 웹팩에서 사용을 지원합니다.
- html-loader : 웹팩이 html을 읽을 수 있게 지원합니다.
  - option
    ```js
    minimize: true; // 코드 최적화 옵션
    ```

### 5. plugins

```js
...

plugins: [
  //plugin 추가
]
```

#### html-webpack-plugin

html plugin
템플릿을 지정하거나 favicon을 설정할 수 있습니다.

```
npm i -D html-webpack-plugin
```

### 6. 개발 서버 설정

```js
const port = process.env.port || 3000;

module.exports = {
  //...

  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  },
};
```

```js
devServer: { // 개발 서버 설정
    port: 3000, // 포트 설정
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true, // 압축 유무
    open: true, // 기본 브라우저에서 실행
    historyApiFallback: true, // connect-history-api-fallback error 방지
}
```

### 7. resolve

#### resolve.extensions

컴포넌트를 jsx를 만들어서 import 했을 때 webpack에서 오류가 났습니다.

웹팩에서 제공하는 resolve.extensions에 확장자를 추가함으로써 해결할 수 있습니다.

```js
module.exports = {
  //...
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
```

## Webpack with React

- 모듈 설치

```bash
npm i react react-dom
```

## Webpack with formatting

- Eslint, Prettier

- 모듈 설치

```bash
npm i -D eslint prettier
```

## Babel 바벨

바벨은 자바스크립트 컴파일러로 새로운 방식의 자바스크립트로 개발 후,

배포할 때에는 예전 방식의 자바스크립트로 변환해서 배포하려고 씁니다.

최신 버젼의 자바스크립트가 실행이 안되는 구버젼 웹브라우저를 대응하기 위해서입니다.

ES6 코드를 ES5 코드로 변환해주는 일에서 리액트의 JSX문법, 타입스크립트, 코드 압축, Proposal 까지 처리해줍니다.

## Polyfill 폴리필

폴리필(Polyfill)은 최신 ECMAScript 환경을 만들어 준다. 바벨은 ES6 => ES5로 변환할 수 있는 것들만 변환을 하는데,

ES6에서 비동기 처리를 위해 등장한 Promise와 같이 ES5에서 변환할 수 있는 대상이 없는 경우 에러가 발생합니다.

이러한 경우 우리는 Polyfill을 이용해서 이슈를 해결할 수 있습니다.

바벨 폴리필(babel polyfill)이 전역 스코프에 삽입되어 전역 오염 이슈가 있었습니다.

Babel7과 corejs@3를 사용해 적절한 바벨 설정을 하면 전역 스코프도 오염시키지 않는 환경을 만들 수 있습니다.
