# TypeScript wirh React,Webpack,Babel

## 1. 의존성 초기화



```bash
npm init -y
```



## 2. Webpack, Babel 설치

- Babel 설치



```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
or
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```



- Webpack 설치



```bash
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-bundle-analyzer webpack-merge
or
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-bundle-analyzer webpack-merge
```



### 2.1. Babel 설정

```bash
touch .babelrc
```



```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}

```



## 3. React, TypeScript 설정

```bash
npm i react react-dom
or
yarn add -D react react-dom

npm i -D typescript @types/react @types/react-dom
or
yarn add -D typescript @types/react @types/react-dom

tsc --init
or
yarn tsc --init
```

### .babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}

```



### .index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

#### .App.tsx

```tsx
const App = () => {
  return <h1>Hello World</h1>;
};

export default App;

```





## 4. Eslint, Prettier 설정

- 모듈 설치

```bash
npm i -D eslint prettier
or
yarn add -D eslint prettier

npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
or
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm i -D eslint-config-prettier eslint-plugin-prettier
or
yarn add -D eslint-config-prettier eslint-plugin-prettier

npm i -D eslint-plugin-react eslint-plugin-react-hooks
or
yarn add -D eslint-plugin-react eslint-plugin-react-hooks

npm i -D eslint-plugin-jsx-a11y eslint-plugin-import
or
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-import
```



- `@typescript-eslint/eslint-plugin` : Typescript 관련 린팅규칙을 설정하는 플러그인
- `@typescript-eslint/parser` : Typescript 를 파싱하기 위해 사용



- `eslint-config-prettier` : prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config
- `eslint-plugin-prettier` : Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력



- `eslint-plugin-react` : React에 관한 린트설정을 지원
- `eslint-plugin-react-hooks` : React Hooks의 규칙을 강제하도록 하는 플러그인



- `eslint-plugin-jsx-a11y` : JSX 내의 접근성 문제에 대해 즉각적인 AST 린팅 피드백을 제공
- `eslint-plugin-import` : ES2015+의 import/export 구문을 지원하도록 함



#### .eslintrc

```json
{
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["prettier", "@typescript-eslint", "import", "jsx-a11y"],
  "extends": [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-console": 0,
    "camelcase": "off",
    "prettier/prettier": 0,
    "no-unused-vars": "warn",
    "no-plusplus": "off",
    "no-shadow": "off",
    "react/prop-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/no-noninteractive-element-interactions": 0
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    }
  }
}

```



### .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "arrowParens": "always"
}

```

#### webpack.common.js

```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, 'public')}/index.html`,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
      emitWarning: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
};

```



#### webpack.dev.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    liveReload: true,
  },
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
    clean: true,
  },
});

```

