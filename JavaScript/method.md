# method
자바스크립트에서는 함수를 properties처럼 object에 추가할 수 있다.   
이것을 **메소드**라고 부른다.

## method란?
예시를 보면 이해가 쉽다.
```
const calculator = {
  plus : function(x, y) {
    return x+y;
  },
  minus : function(x, y) {
    return x-y;
  }
};
```
자바스크립트의 변수는 자료형이 정해져 있지 않다. 따라서 사용자는 변수 안에 무엇이든 넣을 수 있는데, 변수 = {함수, 함수} 를 정의한 것을 메소드라고 부른다.   

## method의 사용
```
const calculator = {
  plus : function(x, y) {
    return x+y;
  },
  minus : function(x, y) {
    return x-y;
  }
};
```

##### 크롬 개발자도구(f12) 콘솔
```
calculator.plus(3,4) //7
calculator.minus(3,4) //-1
```
이렇게 호출하면 된다.

## 단축
```
const calculator = {
  plus(x, y) {
    return x+y;
  },
  minus(x, y) {
    return x-y;
  }
};
```
이렇게 단축해 사용할 수도 있다. 
