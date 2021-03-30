# 자바스크립트 기본

##변수
### let은 지역변수, var는 전역변수에 사용
```
var k = 5; //전역변수
function sub() {
  m = 10; //전역변수 
  if (true) {
    var a = 10; // a변수의 범위=> if문의 블럭이 아닌 a가 선언된 함수 
  }
  console.log();

  if (true) {
    let x = 10; // x변수의 범위는 if문
  }
  console.log(x); //referenceError : x is not defined
}
sub(); //함수 호출
```
### 변수 호이스팅 variable hoisting
: 함수보다 나중에 선언된 변수 참조
```
console.log(x);
var x = 10;
```
위의 코드는 아래의 코드와 같다.
```
var x;
console.log(x);
x = 10;
```

## 자료형
### 자료형과 결합
```
var a;
var b = null;

console.log(typeof(a)); // undefined
console.log(typeof(b)); //object
console.log(10+a); // NaN : 숫자가 아님
console.log(typeof(10+a)); // Number

a=a+"korea";
console.log(a); // undefinded +"korea" = undefinedkorea
console.log(typeof(a)); //String

console.log(typeof("서울")); // string
console.log(typeof(300)); //number
console.log(typeof(true)); // boolean
console.log(function(){}); //function 
console.log({}); //object

var x = {name:"홍길동", score:85};
console.log(x.name);
console.dir(x); //log보다 자세하게 출력

a="10+20"; //string
console.log(a); // 10+20

a=10+20; //number
console.log(a); //30

a='10'+20; //string (문자열 결합. 문자열과 + 의 결과는 문자열이 됨)
console.log(a); //1020
    
a='10'*20; //number
console.log(a);

const PI =3.14 //상수
console.log(PI); //3.14

PI = 3.141592 // uncaught TypeError. 상수는 값 변경 불가능.
```

```
var a = "10";
var b = 5;
var c;

c=a+b;
console.log(c); //105 (string)

c=parseInt(a)+b; // int로 변환 후 연산
console.log(c); //15

c=parseInt("12korea")+30; // 12+30 변환할 수 있는 데까지 변환.
console.log(c); //42

c=parseInt("korea12")+30; //NaN + 30
console.log(c); //NaN

console.log(parseInt("10.5")); // parseInt는 정수이기 때문에 10
console.log(parseInt("0x5A")); //90
console.log(parseInt("0x5A", 16)); //90

console.log(parseInt("010")); //10
console.log(parseInt("010", 8)); //8진수라는 것을 명시

console.log("korea",8); //NaN. korea는 8진수로 표현되는 숫자가 아님.

console.log(parseFloat("10.5")); //10.5

a= "1.1"+"1.1";
console.log(a); //1.11.1 문자열 결합

a= +"1.1" + + "1.1"; //단항 연산자로서의 "양수"의미하는 + 기호가 앞에 사용되어 float형으로 연산.
console.log(a); //2.2

a = parseInt("100a");
console.log(a); //100

a=Number("100a"); // *많이 사용하지 않는다.
console.log(a); //NaN

a= Number(" ");
console.log(a); // 0

a = Number(null);
console.log(a); //0

a="10a";
b="10";
console.log(isNaN(a)); //true
console.log(isNaN(b)); //false

a="10+5";
b = eval(a); //코드 실행 함수
console.log(b); //15
```

### Boolean
JS에서는 Boolean 객체를 선언하지 않더라도, 자료형에 관계없이 각각의 값에 따라 true, false가 나뉜다.

- 1이면 true, 0이면 false
- 문자열이 1자 이상이면 true, ''혹은 "" 등 공백이면 false
- 변수가 선언되고 값 할당이 되지 않으면 false

아래는 결과가 false인 예시
```
var a = false;

var b = new Boolean(false);

var c; // undefined 는 조건문에서 false로 취급
console.log(c); 

var d = "";
```
## 인코딩
### 인코딩

```
var a = "subject=java&score+=10";
var b;

b = escape(a); //일부 특수문자를 제외한 문자만 인코딩
console.log(b); 

b = encodeURI(a); //인터넷 주소에 사용하는 일부 특수문자를 제외하고 인코딩
console.log(b); // =, +, & 출력

b = encodeURIComponent(a); //영문자, 숫자를 제외하고 모두 인코딩 하지 않음.
console.log(b);

a = decodeURIComponent(b); //디코딩
console.log(a);
```

## 함수
### 함수 작성 방식

1) 함수 선언 방식
```
function sub1(x, y) {
    return x+y;
}

//함수 호출
var x = sub1(10,5);
console.log(x);
```

2) 함수 표현식 방식
```
var sub2 = function(x,y) {
    return x*y;
}

//타입 확인
var mul = sub2;
console.log(typeof(mul));
console.log(typeof(sub2));

//함수 호출
console.log(mul(10, 5));
console.log(sub2(10, 5));
```

3) 기명함수 표현식 방식
: 주로 재귀호출에서 사용된다.
```
var sub3 = function sum(x, y) {
    return x+y;
}

console.log(sub3(3,4)); // 7
// console.log(sum(3,4)); 
// error. 함수 표현식에서 사용된 함수명은 외부에서 사용불가.


//재귀호출
var sub4 = function factorial(n) {
    return n>1 ? n * factorial(n-1) : 1;
}
console.log(sub4(3)); //6 = 3*2*1

```

4) Function() 생성자 이용
```
var sub5 = Function("x", "y", "return x+y");
console.log(sub5(5,7)); //12

```

5) 함수 선언문에서의 함수 호이스팅 (선언 전 호출)
```
console.log(sub6(10, 20)); //30
function sub6(x,y) {
    return x+y;
}
```

6) 함수 표현식에서의 호이스팅
```
//console.log(sub7(3,9)); //에러
var sub7 = function(x,y) {
    return x+y;
}
console.log(sub7(3,9)); // 밑에 놓으면 에러발생하지 않음.
```

7) 즉시 실행 함수
```
(function(x,y) {
    console.log(x/y);
})(10, 5);
```
