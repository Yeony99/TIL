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
  * 생성 함수
  * ES6의 클래스