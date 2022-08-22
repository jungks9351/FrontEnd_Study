# HTML Attribute vs Property

> HTML문서내에서는 Attribute는 정적인 속성을 뜻하지만 HTML DOM에서는 Property로 동적인 속성입니다.

## HTML Attribute

Attribute는 HTML 문서에서의 정적인 속성을 뜻합니다.

```html
<div class="jungjin">Hello</div>
```

- div : element
- class : attribute
- "jugnjin" : value

## HTML Property

attribute는 HTML 문서에서의 정적인 속성을 의미하지만 Property는 이와 반대로 HTML DOM에서의 동적인 속성을 뜻합니다.

JavaScript는 HTML을 동적으로 작동시키기 위한 것이기 때문에 **동적인 속성을 부여하는 것이 Property입니다.**

```html
<div class="jungjin">Hello</div>
```

html 문서 안에서는 class가 Attribute를 의미하지만 html DOM 안에서는 property를 의미한다고 볼 수 있습니다.

## 정리

사전적으로 속성이란 뜻을 가진 둘의 차이가 없어보이지만 Attribute는 HTML문서내에서 의미가 있는 것이고 Property는 JavaScript의 동적인 영역인 DOM에 의미가 있는 것입니다.
