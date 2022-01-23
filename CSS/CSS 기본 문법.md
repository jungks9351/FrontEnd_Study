# CSS 기본 문법

CSS(Cascading Style Sheets)는 HTML이나 XML과 같은 구조화 된 문서를 화면, 종이 등에 어떻게 랜더링할 것인지를 정의하기 위한 언어이다.

HTML는 정보의 구조화, CSS는 styling의 정의라고 할수 있다.

HTML과 CSS는 각자의 문법을 갖는 별개의 언어이며 HTML은 CSS를 포함할 수 있다.
그러나 HTML 없이 단독으로 존재하는 CSS는 의미가 없다.

CSS는 스타일을 적용하고자 하는 HTML 요소를 선택할 수 있어야 한다.

## HTML 과 CSS의 연동

### Link style
HTML 외부에 있는 CSS 파일을 로드하는 방식이다.

```
 <link rel ="stylesheet" href="css/style.css">
 ```

### Embedding style
HTML 내부에 CSS를 포함시키는 방식이다. Link style을 더 추천한다.
```
<style>
    h1{color : red;}
</style>
```

### Inline style
HTML 요소의 style 프로퍼티에 CSS를 기술하는 방식이다.
```
<h1 style="color : red">Hello World</h1>
```

## Reset CSS 사용하기
모든 웹 브라우저는 디폴트 스타일을 가지고 있어 CSS가 없어도 작동한다. 그런데 웹브라우저에 따라 디폴트 스타일이 상이하고 지원하는 tag난 style도 제각각이어서 주의가 필요하다.

Reset CSS는 기본적인 HTML요소의 CSS를 초기화하는 용도로 사용한다. 즉, 브라우저 별로 제각각인 디폴트 스타일을 하나의 스타일로 통일시켜 주는 역할을 한다.
