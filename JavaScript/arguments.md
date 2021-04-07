# arguments 인자

## 함수의 사용
```
function sayHi(person) {
    console.log(`Hi, ${person}`);
}
```
위 함수는 person이라는 인자를 가진다.
인자는 함수를 호출할 때 넘겨주는 값이다. 
사실 헷갈릴 때가 많은데, 간단하게 생각하면 된다

```
console.log('인자')
```
이것 또한 인자를 넘겨서 콘솔에 출력하는 것이다.

```
function sayHi(person) {
    console.log(`Hi, ${person}`);
}

sayHi('Nayeon');
```
위의 코드에 sayHi() 함수를 호출하였다. 
인자로는 `'Nayeon'`을 넘겼다.
이것을 호출하면 `Hi, Nayeon`의 결과가 나온다.



