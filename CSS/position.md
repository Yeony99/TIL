# position

## static
* `normal flow`, 기본 속성.
* 왼쪽에서 오른쪽으로 보여진다.

## relative
* 문서의 normal flow에 따라 위치가 결정되고, 상대적 위치로 이동

## absolute
* `div` 등 컨테이닝 블록의 offset 만큼 이동.
* top, right, bottom, left 값을 설정할 수 있다.

## fixed
* viewport를 기준으로 항상 같은 위치
* ~~스크롤해도 따라오는 위젯 등~~

#### 추가
일하면서 썼던 것
좌표 그리기 같은 것을 할 때(box위에 점 찍기), 배경이 되는 div가 `static`속성이면 그 위에 찍히는 점(absolute 속성)이 해당 div 기준이 되지 않는다.   
static 제외 속성이면 ok 