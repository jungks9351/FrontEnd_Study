# React with Typescript

## Project Setting

### create-react-app with Typescript

```bash
npx create-react-app my-app --template typescript
```

or

```bash
yarn create react-app my-app --template typescript
```

공식사이트

[Create React App](https://create-react-app.dev/docs/adding-typescript)

### Formatting 설정

ESLint + Prettier

#### ESLint 설치 및 설정

```bash
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

##### 설정

- env
  - 사전 정의된 전역 변수 사용을 정의
- parser
  - ESlint는 구문 분석을 휘해 기본적으로 Espree parser를 사용
  - `@typescript-eslint/parser`는 Typescript의 구문 분석
- plugin
  - 원하는 규칙 집합을 확장해주는 역할
  - 플러그인 만으로는 규칙이 적용되지 않습니다.
  - ES6에서 제공되는 import를 추가
- extends
  - 추가한 플러그인에서 사용할 규칙을 설정
- globals
  - 선언되지 않은 전역변수를 사용하는 경우 ESLint 경고가 발생하지 않도록 사용자 전역 변수를 추가할 수 있습니다.
- parserOptions
  - ESLint 사용을 위해 지원하려는 JavaScript 언어 옵션을 지정할 수 있습니다.
  - ecmaVersion: 사용할 ECMAScript 버전을 설정
  - sourceType: parser의 export 형태를 설정
  - ecmaFeatures: ECMAScript의 언어 확장 기능을 설정(jsx)
- rules
  - ESLin에는 프로젝트에서 사용하는 규칙을 수정할 수 있습니다.
- settings
  - ESLint 구성 파일에 설정 개체를 추가할 수 있으며, 실행될 모든 규칙에 제공됩니다.

```json
{
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier", "import"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "camelcase": "off",
    "prettier/prettier": 0,
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-plusplus": "off",
    "no-shadow": "off",
    "vars-on-top": "off",
    "no-underscore-dangle": "off",
    "comma-dangle": "off",
    "func-names": "off",
    "prefer-template": "off",
    "no-nested-ternary": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "prefer-arrow-callback": "error",
    "require-await": "error",
    "no-param-reassign": ["error", { "props": false }],
    "max-len": "off",
    "no-unused-expressions": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect"
    }
  }
}
```

- https://eslint.org/docs/user-guide/configuring/
- https://eslint.org/docs/rules/

#### Prettier 설치 및 설정

Prettier Extension 설치

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSpacing": true
}
```

## Style

Styled-components

```bash
npm i styled-components
npm i -D @types/styled-components
```

- https://styled-components.com/docs/api#typescript
