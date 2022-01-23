# 요소 정렬 float

float 프로퍼티는 주로 레이아웃을 구성 할 때 블록 레벨 요소를 가로 정렬하기 위해 사용되는 중요한 기법이다. flexbox 레이아웃을 사용한다면 더욱 간단하게 정렬을 구현할 수도 있지만 flexbox 레이아웃을 지원하지 않는 IE를 고려해야 한다면 float 프로퍼티를 사용해야한다.

float 프로퍼티는 해당 요소를 다음 요소 위에 떠 있게한다. 여기서 떠 있다는 요소가 기본 레이아웃 흐름에서 벗어나 요소의 모소리가 페이지의 안쪽이나 오른쪽에 이동하는 것이다.

float 프로퍼티를 사용할 때 요소의 위치를 고정시키는 position 프로퍼티의 absolute를 사용하면 안된다.

float = none; 요소를 떠 있게 하지 않는다.(기본값)

float = right; 요소를 오른쪽으로 이동시킨다.<br>
오른쪽부터 가로 정렬된다.

float = left; 요소를 왼쪽으로 이동시킨다.<br>
왼쪽부터 가로 정렬된다.

## float 선언된 요소와 선언 안된 요소 간 margin 사라짐
float 선언 안된 요소에 overflow : hidden; 프로퍼티를 선언

overflow : hidden; 은 자식 요소가 부모 요소의 영역보다 클 경우 넘치는 부분을 안보이게 해주는 역할을 하는데 여기서는 float 프로퍼티가 없어서 제대로 표현되지 못하는 요소를 제대로 출력해준다.

## float 선언된 자식 요소를 부모 요소의 높이가 정상 반영되지 않는 문제
- 부모 요소에 overflow : hidden; 선언하기
- 가상요소 선택자(::after) 사용
```html
<div class="parent clearfix">
    <div class="child"></div>
    <div class="child"></div>
</div>
```
```css
.clearfix::after {
    content: "";
    clear: both;
    display: blcok;
}
.child {
    float: left;
}
```

- float 프로퍼티 대신 display : inline-block; 선언
- 부모 요소에 font-size : 0; 선언 두 요소 사이에 정의하지 않은 공백 제거