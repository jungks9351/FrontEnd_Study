# width / height

- width 와 height 는 요소의 너비와 높이를 지정한다.
- 콘텐츠 영역을 대상으로 한다.
- width 와 height를 지정하기 위해서는 px,%등의 크기 단위를 사용한다.

width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 영역을 넘치게 된다. 
이 경우 **overflow: hidden;** 을 지정하면 넘친 콘텐츠를 감출 수 있다.

**전체너비**

width + left padding + right padding + left border + right border + left margin + right margin

**전체높이**

height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

block 요소의 경우 width는 부모 요소의 100%, height는 콘텐츠의 높이(약간의 여분)가 지정된다.

inline 요소의 경우 width 와 height 0% 로 시작하여 콘텐츠의 width와 height는 auto로 지정된다.