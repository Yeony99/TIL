# Variables 변수

## 자바스크립트에서의 변수 선언
  * 자료형을 지정하지 않아도 된다. ex. 자료형 지정 : 자바의 String a; int b; 와 같은 식.
  * 선언 방법에는 var, let, const가 있다.
  * const는 constant 라는 뜻으로, **상수**이다. 즉, 변하지 않는 값이다.
  * var는 변수는 또다시 정의해도 오류가 발생하지 않는 등의 문제점이 있기 때문에, let과 const를 쓰는 것이 더 바람직하다.
```
let a = 10;
let b = "nayeon";

a = 15; 
let a = 15; //SyntaxError: Identifier 'a' has already been declared

let name = "Kim"
console.log(name) // Kim

let name = "NaYeon"
console.log(name) // Uncaught SyntaxError: Identifier 'name' has already been declared
```
위와 같이 이미 변수가 존재한다고 오류가 뜬다. 

```
const c = 22;
const d = "yeony99";

const c = 23; //Identifier 'a' has already been declared
```
let을 사용할 때에는 변수의 값을 **재할당**할 수 있었지만,   
const는 재할당하면 오류가 발생한다.    

cf) Atom 에디터에서는 이와 같이 오류를 표시해준다.   
![image](https://user-images.githubusercontent.com/76241233/108617582-01719900-745b-11eb-937d-eff53783cd22.png)
