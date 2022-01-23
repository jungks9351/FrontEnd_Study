# Transition

**transition은 CSS 프로퍼티의 값이 변화할 때, 표시의 변화에 즉시 영향을 미치게 하는 대신 그 프로퍼티 값의 변화가 일정 시간(duration)에 걸쳐 일어나도록 하는것이다.**

상태 변화에 따라 CSS 프로퍼티가 변경되면 프로퍼티 변경에 따른 표시의 변화(transition)는 즉시 발생한다.
transition은 상태 변화에 동반하여 변경되는 CSS프로퍼티 값에 의한 표시의 변화를 부드럽게 하기 위해 애니메이션 속도를 조절한다.

Transition의 프로퍼티

프로퍼티|설명|기본값
:---:|:---|:---:
transition-property|트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다. | all
transition-duration|트랜지션이 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 포 단위(ms)로 지정한다.|0s
transition-timing-function|트랜지션 효과를 위한 수치 함수를 지정한다.|ease
transition-delay|프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다.|0s
transition|모든 트랜지션 프로퍼티를 한번에 지정한다. shorthand syntax

## transition-property

트랜지션의 대상이 되는 CSS 프로퍼티 명을 지정한다. 복수의 프로퍼티를 지정하는 경우 ,쉼표로 구분한다.

모든 CSS 프로퍼티를 지정할 수는 없다.
트랜지션의 대상이 될 수 있는 CSS프로퍼티는 다음과 같다.
```
- Box model
width height max-width max-height min-width min height
padding margin
border-color border-width border-spacing

- Background
background-color background position

- 좌표
top left right bottom

- 텍스트
color font-size font-weight letter-spacing line-height
text-indent text-shadow vertical-align word-spacing

- 기타
opacity outline-color outline-offset outline-width
visibility z-index
```
요소의 프로퍼티 값이 변화하면 브라우저는 프로퍼티 값의 변화에 영향을 받는 모든 요소의 기하값(위치와 크기)를 계산하여 layout 작업을 수행한다.

layout에 영향을 주는 트랜지션 효과는 회피하는 것이 좋다.

latout에 영향을 주는 프로퍼티
```
width hight padding margin border
display position float overflow
top left right bottom
font-size font-family font-weight
clear white-space
```

## tansition-duration

트랜지션에 일어나는 지속시간을 지정한다. 지정하지 않을 경우 0s가 적용되어 아떠한 트랜지션 효과도 볼 수 없다.

tranistion-duration 프로퍼티값은 transition-property 프로퍼티 값과 1:1 대응한다.
```css
div {
    transition-property: width, height;
    transition-duration: 2s, 4s;
}
/* shorthand syntax */
div {
    transition: width 2s, height 4s;
}

/* property 와 duration 갯수가 다를 때 */
div {
    transition-property: top, right, left, bottom;
    transition-duration: 2s, 1s; 
}

// 아래의 값과 동일하다.

div {   
    transition: top 2s, right 1s, left 2s, bottom 1s;
}
```

## transition-timing-function

트랜지션 효과의 변화 흐름, 시간에 따른 변화 속도와 같은 일종의 변화의 리듬을 지정한다.

대부분의 타이밍 함수는 큐빅 베이지어(cubic bezier)를 정의하는 네점에 의해 정의 되므로 상응하는 함수의 그래프로 제공해서 명시할 수 있다. transition-timing-function 프로퍼티 값으로 미리 정해둔 5개의 키워드가 제공된다. 기본값은 ease이다.

- ease

기본값, 느리게 시작하여 점점 빨라졌다가 느려지면서 종료한다.

![ease](https://poiemaweb.com/img/cubic-bezier-ease.png)

- linear

시작부터 종료까지 등속 운동을 한다.

![linear](https://poiemaweb.com/img/cubic-bezier-linear.png)

- ease-in

느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 운동한다.

![ease-in](https://poiemaweb.com/img/cubic-bezier-ease-in.png)

- ease-out

일정한 속도의 등속으로 시작해서 점점 느려지면서 종료한다.

![ease-out](https://poiemaweb.com/img/cubic-bezier-ease-out.png)

- ease-in-out

ease와 비슷하게 느리게 시작하여 느려지면서 종료한다.

![ease-in-out](https://poiemaweb.com/img/cubic-bezier-ease-in-out.png)

## transition-delay

프로터피가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간은 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다.

transtion-delay 로 대기 시간을 지정하여 프로퍼티 값이 변화하여도 즉시 트랜지션이 실행되지 않고, 일정 시간 대기한 후 트랜지션이 실행되도록한다.

## transition

```
transition: property duration function delay;

//기본값: all 0 ease 0

```
