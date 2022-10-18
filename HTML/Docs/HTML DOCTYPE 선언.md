# HTML DOCTYPE 설정

DOCTYPE 선언은 HTML 문서에서 \<html> 태그를 정의하기 전에 가장 먼저 선언되어야만 합니다.

DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문으로, 대소문자를 구분하지 않습니다. 하지만 DOCTYPE의 경우 강조를 위해 대문자로 많이 사용합니다.

HTML5 이전에서 DOCTYPE 선언을 SGML을 기반으로 하기 때문에 DTD를 참조해야 합니다.

DTD는 브라우저가 콘텐트를 정확하게 표현하도록 마크업 언어에 대한 큐칙을 명시합니다.

HTML5는 SGML 기반으로 하지 않기 때문에 DTD를 참조할 필요가 없습니다.

> SGML(Standard Generalized Markup Language)은 문서용 마크업 언어를 정의하기 위한 메타 언어이다.

> DTD (Document Type Definition)
> 문서 형식 정의는 컴퓨터 용어로, SGML 계열의 마크업 언어에서 문서 형식을 정의하는 것이다.
> SGML을 비롯해 HTML, XHTML, XML 등에서 쓰인다.

```html
<!-- DOCTYPE 선언 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML Document</title>
  </head>
  <body>
    <h1>HTML 문서입니다.</h1>
  </body>
</html>
```

## HTML4.1과 HTML5에서의 DOCTYPE 선언

HTML4.1에서는 DOCTYPE을 세가지 방법으로 선언할 수 있었습니다.

1. 엄격 모드(strict mode)
   HTML4.1 문법을 정확히 따르기 위해서 선언합니다.
   문법을 엄격히 따지기 때문에 실수가 있는 경우 오류가 발생합니다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

2. 호환 모드(transitional mode)
   문법에 일부 실수가 있어도 허용합니다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

3. 프레임세트 모드(frameset mode)
   프레임세트를 사용할 경우 선언합니다.
   HTML5에서는 \<frameset> 태그를 더이상 지원하지 않습니다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

**HTML5에서는 단 한가지 방법으로 DOCTYPE을 선언할 수 있습니다.**

```html
<!DOCTYPE html>
```

## 정리

DOCTYPE 선언은 HTML 태그는 아니지만 HTML문서를 정의하기 위해서 선언해주어야만 합니다.
HTML5 이전에는 SGML 기반으로 하기 때문에 DTD를 정의해주어야만 했습니다.
하지만 HTML5에서는 \<!DOCTYPE html>만으로 DOCTYPE을 선언할 수 있습니다.

### Reference

- http://www.tcpschool.com/html-tags/doctype

- https://ko.wikipedia.org/wiki/SGML

- https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%ED%98%95%EC%8B%9D_%EC%A0%95%EC%9D%98

- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=heartflow89&logNo=221179486614
