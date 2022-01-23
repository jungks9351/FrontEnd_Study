# CSS Grid

2차원(행과열)의 레이아웃 시스템을 제공한다.

Flexible Box도 훌륭하지만 비교적 단순한 1차원 레이아웃을 위하며, 좀 더 복잡한 레이아웃을 위해 CSS Grid를 사용할 수 있다.

## Grid Properties

CSS Grid는 CSS flex와 같이 Container 와 Item이라는 두가지 개념으로 구분할 수 있다.

Container 는 Item을 감싸는 부모 요소이며, 그 안에서 각 item을 배치할 수 있다.
<br>
<br>

### Grid Container Properties
<br>

속성|	의미
|:--|:--
display	|그리드 컨테이너(Container)를 정의
grid-template-rows	|명시적 행(Track)의 크기를 정의
grid-template-columns|명시적 열(Track)의 크기를 정의
grid-template-areas|	영역(Area) 이름을 참조해 템플릿 생성
grid-template|	grid-template-xxx의 단축 속성
row-gap(grid-row-gap)|	행과 행 사이의 간격(Line)을 정의
column-gap(grid-column-gap)|	열과 열 사이의 간격(Line)을 정의
gap(grid-gap)|	xxx-gap의 단축 속성
grid-auto-rows|	암시적인 행(Track)의 크기를 정의
grid-auto-columns|	암시적인 열(Track)의 크기를 정의
grid-auto-flow|	자동 배치 알고리즘 방식을 정의
grid|	grid-template-xxx과 grid-auto-xxx의 단축 속성
align-content|	그리드 콘텐츠(Grid Contents)를 수직(열 축) 정렬
justify-content|	그리드 콘텐츠를 수평(행 축) 정렬
place-content|	align-content와 justify-content의 단축 속성
align-items|	그리드 아이템(Items)들을 수직(열 축) 정렬
justify-items|	그리드 아이템들을 수평(행 축) 정렬
place-items|	align-items와 justify-items의 단축 속성

<br>
<br>

### Grid Item Properties
<br>

속성|	의미
|:--|:--
grid-row-start|	그리드 아이템(Item)의 행 시작 위치 지정
grid-row-end|	그리드 아이템의 행 끝 위치 지정
grid-row|	grid-row-xxx의 단축 속성(행 시작/끝 위치)
grid-column-start|	그리드 아이템의 열 시작 위치 지정
grid-column-end|	그리드 아이템의 열 끝 위치 지정
grid-column|	grid-column-xxx의 단축 속성(열 시작/끝 위치)
grid-area|	영역(Area) 이름을 설정하거나, grid-row와 grid-column의 단축 속성
align-self|	단일 그리드 아이템을 수직(열 축) 정렬
justify-self|	단일 그리드 아이템을 수평(행 축) 정렬
place-self|	align-self와 justify-self의 단축 속성
order|	그리드 아이템의 배치 순서를 지정
z-index|	그리드 아이템의 쌓이는 순서를 지정

<br>
<br>

# Grid Container

## display

Grid Container를 정의한다.

정의된 컨테이너의 자식 요소들은 자동으로 Grid Item로 정의된다.

**grid를 사용하기 위해 컨테이너에 필수로 작성한다.**
```css
.container {
    /* block 특성의 Grid Container를 정의 */
    display: gird;
}

.container {
    /* inline특성의 Grid Container를 정의 */
    display: inline-gird; 
}
```

## gird-template-rows

명시적 행의 크기를 정의한다.

동시에 라인의 이름도 정의할 수 있다.

fr(fraction, 공간 비율) 단위를 사용할 수 있다.

repeat() 함수를 사용할 수 있따.

```css
.container {
    display: grid;
    grid-template-rows: 1행크기 2행크기 ...;
    grid-template-rows: [선이름] 1행크기 [선이름] 2행크기 [선이름] ...;
    /* 12개 행 반복 정의 */
    gird-template-rows: repeat(12, 100px);
}
```
라인에 중복된 이름을 지정할 수 있다. 꼭 필요한 경우가 아니면 이름을 지정할 필요는 없다.

## gird-template-cplumns

명시적 열의 크기를 정의한다.

동시에 라인의 이름도 정의할 수 있다.

fr(fraction, 공간 비율) 단위를 사용할 수 있다.

repeat() 함수를 사용할 수 있따.

```css
.container {
    display: grid;
    grid-template-columns: 1열크기 2열크기 ...;
    grid-template-columns: [선이름] 1열크기 [선이름] 2열크기 [선이름] ...;
    /* 12개 열 반복 정의 */
    grid-template-columns: repeat(12, 100px);

}
```
라인에 중복된 이름을 지정할 수 있다. 꼭 필요한 경우가 아니면 이름을 지정할 필요는 없다.

## grid-template-areas

지정된 그리느 영역 이름을 참조해 그리드 템플릿을 생성한다.

grid-area는 Grid Container가 아닌 Gird Item에 적용하는 속성이다.

```css
.container {
    diplay: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "header header header"
    "main main aside"
    "footer footer footer"
}
header {
    grid-area: header;
}
main {
    grid-area: main;
}
aside {
    grid-area: aside;
}
footer {
    grid-area: footer;
}
```
마침표 . 나 none을 입력해 빈역역을 정의할 수 있다.

## grid-template

grid-template-rows, grid-template-columns ,gird-template-areas 의 단축 속성이다.

```css
.container {
    grid-template: <grid-temolate-rows> / <grid-template-columns>;
    grid-template: <grid-areas>;
}
```
OR
```css
.container {
    gird-template:
    [1행시작선이름] "AREAS" 행너비 [1행끝선이름]
    [2행시작선이름] "AREAS" 행너비 [2행끝선이름]
    / <grid-template-columns>;
}
```
Exmaple

```css
.container {
  display: grid;
  grid-template:
    "header header header" 80px
    "main main aside" 350px
    "footer footer footer" 130px
    / 2fr 100px 1fr;
}
header { grid-area: header; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```
Equals

```css
.container {
  display: grid;
  grid-template-rows: 80px 350px 130px;
  grid-template-columns: 2fr 100px 1fr;
  grid-template-areas:
    "header header header"
    "main main aside"
    "footer footer footer";
}
```

## row-gap(grid-row-gap)

각 행과 행 사이의 간격을 지정한다.

```css
.container {
    row-gap: 크기;
}
```

## column-gap(grid-column-gap)

각 열과 열 사이의 간격을 지정한다.

```css
.container {
    column-gap: 크기;
}
```

## gap(grid-gap)

각 행과 행, 열과 열 사이의 간격을 지정한다.
```css
.container {
    gap: <row-gap> <column-gap>;
}
```

## grid-auto-rows

암시적 행의 크기를 정의한다.

아이템이 명시적 행 외부에 배치되는 경우 암시적 행의 크기가 적용된다.

```css
.container {
    grid-auto-rows: 크기;
}
```

## grid-auto-columns

암시적 열의 크기를 정의한다.

아이템이 명시적 열 외부에 배치되는 경우 암시적 열의 크기가 적용된다.

```css
.container {
    grid-auto-columns: 크기;
}
```

## grid-auto-flow

배치하지 않은 아이템을 어떤 방식의 '자동 배치 알고리즘'으로 처리할지 정의한다.

배치한 아이템은 grid-area를 사용한 아이템을 의미한다.

- row: 각 행 축을 따라 차례로 배치(기본값)
- column: 각 열 축을 따라 차례로 배치
- row dense(dense): 각 행 축을 따라 차례로 배치, 빈 영역을 메움
- columns dense: 각 열 축을 따라 차레로 배치, 빈 영역을 메움

## grid

grid-template-xxx 와 grid-auto-xxx 의 단축 속성이다.

```css
.container {
    grid: <grid-template>;
    grid: <grid-template-rows> / <grid-template-columns>;
    grid: <grid-auto-flow> <grid-template-rows> / <grid-template-columns>;
}
```

각 코드 블록은 같은 의미를 나타낸다.

```css
.container {
  grid: <grid-template-rows> / <grid-template-columns>;
}
.container {
  grid: 100px 200px / 1fr 2fr;
}
.container {
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}
```

```css
.container {
  grid: <grid-template>;
}
.container {
  grid:
    "header header header" 80px
    "main main aside" 350px
    "footer footer footer" 130px
    / 2fr 100px 1fr;
}
.container {
  grid-template:
    "header header header" 80px
    "main main aside" 350px
    "footer footer footer" 130px
    / 2fr 100px 1fr;
}
```

grid-auto-flow 작성시 auto-flow 키워드를 사용한다.

/로 row 와 column을 구분하여 위치하는 곳이 row 와 column을 의미한다. 따라서 row, column 값은 작성하지 않는다.

dense 값은 auto-flow 뒤에 붙여준다.

```css
.container {
  grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;
}
.container {
  grid: 100px 100px / auto-flow 150px;
}
.container {
  grid-template-row: 100px 100px;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
}
```

```css
.container {
  grid: auto-flow dense 150px / 100px 100px;
}
.container {
  grid-template-columns: 100px 100px;
  grid-auto-flow: row dense;
  grid-auto-rows: 150px;
}
```

## align-content

그리드 콘텐츠를 수직 정렬한다.

## jutift-content

그리드 콘테츠를 수평 정렬한다.

### align-content, justify-content 값

그리드 콘텐츠의 가로너비와 세로너비는 그리드 컨테이너보다 작아야한다.

값|의미
:--:|:--
normal|stretch와 같다(기본값)
start|시작점 정렬
center|가운데 정렬
end|끝점 정렬
space-around| 각 여백을 고르게 정렬
space-between| 콘테츠 각각 시작점과 끝점에 정렬되고 나머지 여백으로 고르게 정렬
space-evenly| 모든 여백을 고르게 정렬
stretch| 축을 채우기 위해 그리드 콘텐츠를 늘림
---

## place-content

align-content 와 justify-content 의 단축 속성이다.

```css
.container {
    place-content: <align-content> <justify-content>;
}
```

## align-items

그리드 아이템들을 수직 정렬합니다.

## justify-items

그리드 아이템들을 수평 정렬합니다.

### align-items, justify-items 값

값|의미
:--:|:--
normal|stretch와 같다(기본값)
start|시작점 정렬
center|가운데 정렬
end|끝점 정렬
stretch| 축을 채우기 위해 그리드 콘텐츠를 늘림

## place-items

align-items 와 justify-items 의 단축 속성이다.

```css
.container {
    place-items: <align-items> <justify-items>
}
```

# Grid Items

정의된 컨테이너의 자식 요소들은 자동으로 Grid Items로 정의된다.

그리드 아이템을 배치하기 위해 그리드 선의 시작 위치와 끝위치를 지정해야한다.

숫자, 선 이름을 지정하거나 span 키워드를 사용한다.

span 키워드와 숫자를 조합하면 숫자만큼 라인을 확장하는 + 개념이다.

명시하지 않으면 span 1이 기본값이다.

## grid-row

grid-row-start 와 grid-row-end의 단축 속성이다.

```css
.item {
    grid-row: <grid-row-start> / <grid-row-end>;
}
```

## grid-column

grid-column-start 와 grid-column-end의 단축 속성이다.

```css
.item {
    grid-row: <grid-column-start> / <grid-column-end>;
}
```

## grid-area

grid-row-start 와 grid-row-end 와 grid-column-start 와 grid-column-end의 단축 속성이다.

혹은 grid-template-areas가 참조할 영역 이름을 설정할 수도 있다.

```css
.item {
    grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>;
    /* 시작 / 시작 / 끝 / 끝 임에 주의한다. */
    grid-area: 영역이름;
}
```

## align-self

단일 그리드 아이템을 수직 정렬한다.

## justify-self

단일 그리드 아이템을 수평 정렬한다.

## place-self

align-self 와 justify-self 의 단축 속성이다.

- Edge(IE) 브라우저에서는 지원하지 않는다.

```css
.item {
    place-self: <align-self> <justify-self>
}
```

## order

그리드 아이템이 자동 배치되는 순서를 변경할 수 있다.

기본값: 0

## z-index

z-index 속성을 이용해 아이템이 쌓이는 순서를 변경할 수 있다.