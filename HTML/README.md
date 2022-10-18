## HTML (Hyper Text Markup Language)

HTML은 웹 페이지를 만들기 위한 표준 마크업 언어입니다.

- [DOCTYPE 선언](https://github.com/jungks9351/FrontEnd_Study/blob/main/HTML/Docs/HTML%20DOCTYPE%20%EC%84%A0%EC%96%B8.md)
- [시멘틱 구조](https://github.com/jungks9351/FrontEnd_Study/blob/main/HTML/Docs/%EC%8B%9C%EB%A9%98%ED%8B%B1%20%EA%B5%AC%EC%A1%B0.md)
- [어트리뷰트, 프로퍼티](https://github.com/jungks9351/FrontEnd_Study/blob/main/HTML/Docs/attribute%20vs%20property.md)
- [블록, 인라인](https://github.com/jungks9351/FrontEnd_Study/blob/main/HTML/Docs/%EB%B8%94%EB%A1%9D%2C%EC%9D%B8%EB%9D%BC%EC%9D%B8.md)

## Basic Template

```html
<!-- DOCTYPE 선언 -->
<!DOCTYPE html>
<!-- <html> 태그 HTML 문서의 범위를 설정 -->
<html lang="en">
  <!-- <head> HTML 문서의 정보를 설정 -->
  <head>
    <!-- 메타 데이터 -->
    <!-- <meta> 기타 메타데이터요소로 나타낼 수 있는 메타데이터를 나타내기 위해 설정 검색엔진이나 브라우저에 정보를 제공-->

    <!-- charset 문자 인코딩 설정 -->
    <meta charset="UTF-8" />
    <!-- http-equiv 서버/클라이언트의 작동방식 변경에 대한 지시(HTTP 응답 헤더 제공) -->
    <!-- content name, http-equiv의 값 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 브라우저의 제목 표시줄이나 페이탭에 보여지는 문서의 제목을 설정 -->
    <title>HTML Document</title>
    <!-- 외부 리소스 연결 -->
    <link rel="stylesheet" href="./css" />
  </head>
  <!-- HTML 문서의 구조를 설정 -->
  <body>
    <!-- header -->
    <header>
      <hgroup>
        <h1>This is HTML Document</h1>
        <h2>SubTitle</h2>
      </hgroup>
    </header>
    <!-- nav -->
    <nav>
      <ul>
        <li><a href="#">Option 1</a></li>
        <li><a href="#">Option 2</a></li>
        <li><a href="#">Option 3</a></li>
      </ul>
    </nav>
    <!-- section -->
    <section>
      <!-- article1 -->
      <article>
        <header>
          <h3>Article #1</h3>
        </header>
        <section>This is the first article.</section>
      </article>
      <!-- article2 -->
      <article>
        <header>
          <h3>Article #2</h3>
        </header>
        <section>This is the second article.</section>
      </article>
    </section>
    <!-- aside -->
    <aside>
      <!-- figure -->
      <figure>
        <img src="#" alt="Image1" width="#" height="#" />
        <figcaption>My Image</figcaption>
      </figure>
      <!-- dettails -->
      <details>
        <summary>오늘의 환율</summary>
        <ul>
          <li>달러($) : 1,135.90</li>
          <li>유로(€) : 1,284.08</li>
          <li>엔(￥) : 1,014.88</li>
        </ul>
      </details>
    </aside>
    <footer>Footer Information</footer>
  </body>
</html>
```
