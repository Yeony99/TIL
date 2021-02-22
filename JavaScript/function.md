# function 

## 파라미터
* 자바스크립트의 파라미터는 **무엇이든** 괜찮다.
* 파라미터로 'strawberry'와 'chicken'을 파라미터로 주고, sayHello()에서 각각의 파라미터에 주고자 하는 값을 기입하면 된다.   
```
function sayHello(strawberry, chicken) { 
  console.log('Hello!', strawberry, chicken);
}

sayHello("yeony", 12);
```

## 출력
* 출력-1과 같은 형식은 작성도 어렵고 가독성이 떨어진다.
* 출력-2와 같은 형식을 사용하는 것이 더 편리하다.
```
//출력-1 
function sayHello(name, age) { 
  console.log('Hello!', name,+" you are"+ age+" years old");
}

sayHello("yeony", 15);
```
```
//출력-2
function sayHello1(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
const hiYeony = sayHello1("Yeony", 23) //hiYeony 는 sayHello1의 return값.

console.log(hiYeony);
```
* 출력-2의 function에서 return을 하지 않으면, 외부에서 내부 값을 활용할 수 없다.

```
function f(x) {
  //return x*10;
}

const ff = f(10)
console.log(ff);

```
return을 주석처리한 코드를 실행하면 "undefined" 로 에러가 발생한다.   
x는 함수 내에서 선언된 **지역변수**이기 때문에, 외부에서 접근하려면 반드시 return을 해주어야 한다.   

