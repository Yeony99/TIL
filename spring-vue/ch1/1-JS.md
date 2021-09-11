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


### this
* 자바의 this
  * 항상 **현재 객체**를 참조
* 자바스크립트의 this
  * 현재 실행 컨텍스트 (current execution context)를 참조.
  * 또한 이 context도 하나의 객체.
  * ~~자바가 저맥락 언어라면 자스는 고맥락... 한국어와 같은 느낌일까~~


#### 실행 가능한 코드 (Review!!!!)
스코프가 `접근성`이라면, 실행 컨텍스트는 runtime 중인 실행 가능 코드의 `소유권`

* 전역 코드 : JS 프로그램이 시작되는 곳부터 수행되는 코드.
  * 브라우저의 경우 : window 객체
  * 크롬 콘솔창에 `var foo = new Foo()` 입력시 전역 코드 작성한 것
* Eval 코드 : eval() 함수의 인자로 전달되는 문자열 값.
  * 실행할 작업에 대해 정확히 모른다면 eval()함수를 사용하지 말아야 한다
* 함수 코드 : 함수의 본문 코드. (!= 함수 내부의 작성된 모든 코드)

#### call, apply, bind
* call() 메소드 : 리스트의 형태의 인자 전달 받음
* apply() : 배열 형태의 인자 전달 받음
* bind() : 새로운 함수의 실행 컨텍스트로 전달받은 첫 번째 인자와 바인딩될 새로운 함수 생성.


#### 함수 호출하는 방법
1. 생성자 함수 호출 : new Fn()
2. 직접 함수 호출 : fun()
3. 메소드 호출 : foo.fun()
4. 컨텍스트 변경 호출 : bar.call(this), bar.apply(this)


### 호이스팅
**끌어올린다** 라는 의미.   
함수, 변수 선언을 그 선언이 속한 스코프의 최상단으로 끌어올리는 것.   

1. 자바스크립트 인터프리터는 함수선언을 최상위로 이동시키고,
2. 그 다음으로 변수 선언을 이동시킨다

```
var gogo = function() {} //  함수표현식은 변수 선언에 속하기 때문에 최상단으로 끌어올려지지 않는다.
```

```
function test() {
  gogo();

  var gogo = function() {
    console.log('a')
  }
  return;

  function gogo() {
    console.log('B')
  }
}

test();
```
위와 같이 코드가 작성되면 `B`가 출력된다.   
1. 함수를 끌어올리고
2. 변수 선언을 끌어올린다
3. 함수가 실행되고
4. 선언한 변수에 함수 표현식이 대입 = 실행되지 않은 상태


## ES6 기본

### 블록 스코프, let, const
**호이스팅이 적용되지 않는** 선언

* 변수 : let
* 상수 : const

### 클래스
~~사실 자바스크립트의 클래스는 잘 모르겠다~~
* 클래스 구문으로 생성자를 생성한다
* 상위 클래스로부터 확장하고 정적 메소드 생성이 가능하다
* getter, setter 생성 가능하다

```
class User {
  constructor(name, favorites) {
    this.name = name;
    this.favorites = favorites;
  }
  introduce() {
    console.log(this.name +' likes '+ this.favorites.length + 'things')
  }

  get favoritesCount() {
    return this.favorites ? this.favorites.length : 0;
  }
}
```

* `_task` 와 같이 언더바 프로퍼티를 정의하면, `private` 프로퍼티로 간주되어 외부에서 직접 변경할 수 없음을 암시
  * 단, 약속일 뿐 접근가능하다
```
class Mate extends User {
  constructor(name, favorites) {
    super(name, favorites);
    this._task = [];
  }

  introduce() {
    console.log(this.name +' likes '+ this.favorites)
  }

  work() {
    console.log('I have '+this._task.length + ' tasks');
  }
}

let result = new Mate('Yeony', ['apple','music','mandarin']);
result.introduce(); // Yeony likes 3 things
result.task = ['go home', 'eat dinner'];
result.work(); // I have 2 tasks
```

* User 클래스에 메소드 추가 시
1. 부모 클래스의 프로토타입 객체에 추가(상속 가능)
```
User.prototype.eat = function() {
  console.log('Hungry......')
};

result.eat();
```

2. User 객체에 직접 추가 - 상속 불가능
```
User.drink = function() {
  console.log('Thirsty......')
};

result.drink(); // is not a function
```
`drink`는 User 클래스의 `정적 메소드`가 되었기 때문에 상속 불가능 한 것


### 화살표 함수
* 반환하는 값는 표현식의 결과
```
const fruits =[ {name: 'apple', price: 100}, {name: 'melon', price: 200}, {name: 'banana', price: 300} ];

// 인자가 없을 때
var count = () => fruits.length //ES6
var count = function() { //ES5
  return fruits.length;
}

// 인자가 하나일 때 - 괄호 생략 가능
fruits.filter(fruit => fruit.price > 200);

fruits.filter(function(fruit.price) {
  return fruit.price > 200;
})


// 함수가 객체 리터럴 반환시 - 괄호로 감싸기
var bag = fruits.map(fruit => ({
  name: fruit.name, storage: 1
  })
);

var bag = fruits.map(function(fruit) {
  return {
    name: fruit.name,
    storage: 1
  }
})

// 구문들로 이뤄져 있고 결과 반환해야 할 시는 return 필요
var bag = fruits.map(fruit => {
  console.log('ok')
  return { name: fruit.name, storage: 1 };
  });

var bag = fruits.map(function(fruit) {
  console.log('ok')
  return {
    name: fruit.name,
    storage: 1
  }
})
```

### 매개 변수 기본 값
```
const countries = [];

function addCountries(name, cityCount = 1) {
  countries.push({name : name, cities : cityCount})
}

addCountries('Singapore'); // cityCount 기본 값 1로 설정됨
```

