# flex

flex는 요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법을 제공한다.

flex는 두개의 개념으로 정의된다.

1. container : item을 감싸는 부모요소이며 item을 정렬하기 위해선 conrtainer가 필수이다.

2. items(요소)

container 에는 display, flex-flow, justify-content 속성을 사용할 수 있으며, items 에는 order, flex, allign-self 등의 속성을 사용할 수 있다.

## display

flex container를 정의한다.

display : flex; = block 특성의 flex container를 정의

display : inline-flex; = inline 특성의 flex container를 정의

## justify-content

flex 요소들을 가로선 상에서 정렬한다.

- flex-start : 요소들을 컨테이너 왼쪽으로 정렬한다.
- flex-end : 요소들을 컨테이너의 오른쪽으로 정렬한다.
- center : 요소들을 컨테이너의 가운데로 정렬한다.
- space-between : 요소들 사이에 동일한 간격을 둔다.
- space-around : 요소들 주위에 동일한 간격을 둔다.

## align-items

flex 요소들을 세로선 상에서 정렬한다.

- flex-start : 요소를 컨테이너의 꼭대기로 정렬한다.
- flex-end : 요소를 컨테이너의 바닥으로 정렬한다.
- center : 요소들을 컨테이너의 세로선 상의 가운데로 정렬한다.
- baseline : 요소들을 컨테이너의 시작 위치에 정렬한다.
- stretch : 요소들을 컨테이너에 맞도록 늘린다.

## flex-direction

- row : 요소들을 텍스트의 방향과 동일하게 정렬한다.
- row-reverse : 요소들을 텍스트의 반대방향으로 정렬한다.
- column : 요소들을 위에서 아래로 정렬한다.
- column-reverse : 요소들을 아래에서 위로 정렬한다.

## order

flex 요소의 순서를 지정한다.
기본값은 0이며, 양수나 음수로 바꿀수 있다.

## align-selft

지정된 align-items를 무시하고 flex요소를 세로선 상에서 정렬한다.

## flex-wrap

flex 요소들을 한 줄 또는 여러 줄에 걸쳐 정렬한다.

- nowrap : 모든 요소들을 한줄에 정렬한다.
- wrap : 요소들을 여러 줄에 걸쳐 정렬한다.
- wrap-reverse : 요소들을 여러 줄에 걸쳐 반대로 정렬한다.

## flex-flow

flex-direction 과 flec-wrap이 자주 같이 사용된다. flex-flow는 이를 대신할수 있다.

flex-flow : flex-direction flex-wrap;

## align-content

세로선 상에 여분의 공간이 있는 경우 flex 컨테이너 사이의 간격을 조절한다.

- flex-start : 여러 줄들을 컨테이너의 꼭대기에 정렬한다.
- flex-end : 여러 줄들을 컨테이너의 바닥에 정렬한다.
- center : 여러 줄들을 세로선 상의 가운데에 정렬한다.
- space-between : 여러 줄들 사이에 동일한 간격을 둔다.
- space-around : 여러 줄들 주위에 동일한 간격을 둔다.
- stretch : 여러 줄들을 컨테이너에 맞도록 늘린다.

## gap

flex 박스 아이템 사이의 크기를 지정해 줄 수 있다.
