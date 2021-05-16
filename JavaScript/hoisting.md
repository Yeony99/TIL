# Hoisting
코드를 작성하면 위->아래로 순차적으로 진행되는 것이 일반적이다. 그러나 자바스크립트에서는 함수가 변수보다 위에 작성되었더라도 함수를 사용하는 것이 가능하다.    
간단히 말해, `Hoisting`은 모든 선언(var, let, const, function 등)을 가장 위로 끌어오는 것이며, 이 과정에서 선언과 할당은 **분리**된다.

## 동작
변수의 `범위`에 따라 다르게 동작할 수 있다.    
1. 전역 (global scope)
: 스크립트 최상단으로 변수가 끌어올려진다.
2. 함수 (function scope)
: 함수의 최상단으로 변수가 끌어올려진다.   

최상단으로 변수가 끌어올려지더라도, `변수의 선언`만 끌어올리는 것이다.   
```
//console.log(hhh); // Reference Error
console.log(hoisting); // undefined
var hoisting = "Hi";
console.log(hoisting); // 'Hi'
```
선언되지 않은 변수와 달리 오류가 발생하지는 않지만, 변수의 내용은 가져오지 못해 `undefined`가 반환되는 것을 볼 수 있다.   

## 적용 여부
1. 함수표현식 function express
Hoisting 작동 안된다.   
```
foo(); // Error. undefined 호출 안됨

var foo = function() {
    console.log("foobar");
};

foo();
```
`foo`변수가 선언된 후, `foo`변수의 값은 `foo = function()`에서의 function이다. 그러나 첫 번째 호출에서 `foo()`는 함수를 할당받지 못한 상태이므로 error가 발생한다.   

2. new Function 객체 생성
Hoisting 작동 안된다.   
```
bar(); //Error
var bar = new Function("", console.log("foobaaaar"));
```

3. 함수선언식 function declaration
Hoisting 된다.   
```
bar(); 

function bar() {
    console.log("foobar");
};

bar();
```
변수에 함수를 선언하는 형태가 아닌, 함수 자체로 선언했기 때문에 호이스팅이 작동한다.   

4. `const`와 `let`은 Hoisting되지 않는다.

## const, let Hoisting
호이스팅은 끌어올려지는 것이기 때문에, **범위**가 영향을 미치는 중요한 요소이다.   
따라서 각각의 TDZ(Temporal Dead Zone)을 알아볼 필요성이 있다.   
TDZ는 `스코프의 시작점`부터 `초기화 시작점`까지의 구간을 일컫는 개념이다.   
만약 console.log로 테스트하는 도중 `ReferenceError`가 발생했다면 이 TDZ에 의해 제한이 걸린 것이다.   
### TDZ에 영향을 받는 구문
* `const` 변수
```
pi; // ReferenceError
//여기까지 TDZ

const pi = 3.14; //선언부
```
* `let` 변수
```
foobar; // ReferenceError
//여기까지 TDZ

let foobar = 12345; //선언부
```

### 결론
`let`과 `const`변수는 호이스팅되지 않는 것이 아니라, 정확히는 TDZ에 의해 제한되는 것이다. 

