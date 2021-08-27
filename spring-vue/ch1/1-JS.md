# 자바스크립트

## 자바 개발자의 관점에서 바라 본 자바스크립트

### 함수와 메소드
* 자바스크립트의 함수는 JS 내 내장 객체인 `Function` 생성자로 생성된 객체.
* 자바의 method와는 완전히 다르다.
* 자바스크립트에서 메소드란, `함수가 객체의 프로퍼티일 때`
    - 즉, `메소드 = 함수` 이지만, `함수 != 메소드`이다.
    - 프로퍼티란 **어떠한 값**이다. **다른 값과 연관되어 있는 일종의 값**인 것.
    - MDN에서 property를 설명할 때 `property가 object reference`를 가지고 있다고 말한다. 
    - JS에서는 object에 함수를 넣을 수 있다. = 값으로 취급된다.


### 객체와 클래스
* 자바스크립트에서 객체를 생성하는 방법
  * Obejct() 생성자
```
var test = new Object();
test.name = 'Yeony';
```
  * 객체 리터럴
```
var test = {
    name : 'Yeony',
    favorite: ['strawberry', 'grape', 'lemon'],
    sayHello : function() {
        console.log('Hi!');
    }
}
```
  * 접근자 프로퍼티 getter, setter
```
var test = {
    name: 'Nayeon',
    surname: 'Kim',

    get fullname() {
        return `${this.surname}${this.name}`
    },
    set fullname(myName) {
        [this.surname, this.name] = myName
    }
};

test.fullname = 'Yeony Kim' // set 실행
```
  * 생성자 함수 - 자바 문법과 유사
    > 생성자 호출 시 var test = new Test 처럼 괄호를 빼먹으면 생성자에 아무 인자도 전달하지 못한다.
```
function Test(name, favorite) {
    this.name = name;
    this.favorite = favorite;
}

var test = new Test('Yeony', ['strawberry', 'grape', 'lemon'])
```
  * Object.create()
    * 
```
function Test(name, favorite) {
    this.name = name;
    this.favorite = favorite;
    this.sayHello = function() {
        console.log('Hi!');
    }
}

var test = Object.create(Test.property, {
    name : { value: 'Yeony' },
    favorite: { value : ['strawberry', 'grape', 'lemon'] }
})

//test.sayHello(); // Uncaught TypeError : test.sayHello() is not a function
                   // Object.create()메소드는 생성자의 프로토타입 객체로 새로운 객체를 생성.

// 사용법
// 1. 인자에 전달

var fn = { //함수
    sayHello:function() {
        console.log('Hi!');
    }
}

var test = Object.create(fn, { //함수를 인자로 전달
    name : { value: 'Yeony' },
    favorite: { value : ['strawberry', 'grape', 'lemon'] },
})


// 2. 프로토타입 객체에 함수 추가
Test.prototype.sayHello = function() {
        console.log('Hi!');
    }

```


### 객체, 프로퍼티, 프로퍼티 속성
* 데이터 프로퍼티 
  * value : 자바스크립트의 모든 자료형 가능
  * writable : 데이터 프로퍼티의 변경 가능 여부를 정의
  * enumerable : for-in 구문을 이용해 열거 가능 여부를 정의
  * configurable : 제거 가능 여부, 접근 프로퍼티 변경 여부, 쓰기 불가 여부, enumerable 속성의 수정 가능 여부 정의

* 접근 프로퍼티
  * get 접근자 (get accessor) - Function 객체 혹은 undefined 지정
  * set 접근자 (set accessor) - Function 객체 혹은 undefined 지정
  * enumerable : for-in 구문을 이용해 열거 가능 여부 정의
    * `false`이면 수정 불가능
  * configurable : 제거 가능 여부, 데이터 프로퍼티의 변경 가능 여부, 다른 속성들의 수정 가능 여부 정의

> 자바스크립트에서 Object.defineProperty 혹은 Object.defineProperties 를 사용해 객체의 프로퍼티 수정

### 프로토타입과 상속
* 자바스크립트의 프로토타입
  * 다른 객체에 공유 프로퍼티(shared properties)를 제공하는 객체.
  * **함수객체만** 프로토타입을 가진다. (특별히 설정하지 않아도 모든 함수는 프로토타입을 자동적으로 가짐)
    * why? 함수 객체만 호출 가능
    * why? 함수 객체만 다른 객체를 생성할 수 있음.
    * 단, 화살표 함수는 프로토타입을 가지지 않음.

> 참고 [자바스크립트 함수 properties](https://javascript.info/function-prototype)

> 기본 프로퍼티인 "prototype"은 constructor 프로퍼티 하나만 있는 객체를 가리킨다. 이 constructor 프로퍼티는 함수 자신을 가리키는 것.


### 스코프, 클로저
#### 스코프(scope)
> 변수의 접근성에 관한 개념

* 자바의 스코프
  * 기본적으로 중괄호 `{}`를 이용
  * 클래스 레벨 스코프
  * 메소드 레벨 스코프
  * 블록 레벨 스코프

* 자바스크립트의 스코프
  * 전역 스코프 (global scope)
  * 함수 스코프 (function scope)
  * 블록 스코프(block scope)
    * const, let 키워드 이용

* 클로저란?
  * 클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합
  * **렉시컬**은 렉시컬 범위 지정이 변수가 사용 가능한 위치를 결정하기 위해 소스 코드 내에서 변수가 선언된 위치를 사용한다는 사실을 나타낸다
  * 클로저는 외부 함수가 반환된 후에도 외부 함수의 변수 범위 체인에 접근할 수 있는 함수
  * 그러니까, `함수 속에 중첩된 함수`이다.

* 왜 클로저를 사용하는지?
  * 함수를 얼마나 깊게 중첩시키는지와는 관계없이 **부모 함수 스코프**에 접근 가능하고, 전역 스코프(=최상위 스코프)까지 접근 가능!
  * 클로저로 데이터 프라이버시 / private method를 모방. 일반적으로 [모듈 패턴](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)에 사용된다.
  * ~~자바의 private 메소드?~~


