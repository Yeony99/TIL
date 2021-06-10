# 비동기 - Promise
Promise는 비동기(async)작업의 최종 완료 또는 실패를 나타내는 객체이다. 제작코드(producing code)와 소비코드(consuming code)를 연결해준다.

## 프로미스 사용 이유
JS가 처음 나온 시기에는 이벤트 발생 -> 콜백 함수 호출 정도의 간단한 작동을 수행했다면, 이제는 callback hell이라 불릴 만큼 콜백이 중첩되기도 한다.    
이를 해결하기 위해 `Promise`라는 패턴을 활용한다. 프로미스를 활용하면, 비동기 작업들을 순서대로 수행할 수 있게끔 하거나, 병렬로 진행하는 등 함수 조작이 수월해진다.   


## 제작코드 & 소비코드
먼저 제작코드란, 시간이 걸리는 일련의 작업을 의미한다.    
소비코드는 제작코드의 결과를 기다렸다 사용하는 코드이다. 제작코드를 사용하는 소비코드는 여러 개가 될 수 있다.    

## 비동기
비동기란 무엇인가? 특정한 연산1 이 끝날 때까지 다른 코드를 실행하지 않고 대기하는 것이 아니라, 연산1이 실행되는 중에도 연산2, 3, ... 과 같은 방식으로 다음 코드를 먼저 실행하는 JS의 특성이다.   
<br>   
간단하게 `setTimeout()`으로 확인해보자.    
```
console.log('A');

setTimeout(function(){
    console.log('B');
}, 5000);

console.log('C');
```
내가 배운 다른 프로그래밍 언어 중 하나인 JAVA. 자바의 함수는 위에서부터 아래로 순차적으로 내려오는 진행방식을 가졌다.    
꼭 굳이 다른 언어를 배우지 않았더라도, 순서대로 작성된 함수라면 각각의 함수가 실행되고 그 다음에 작성된 함수가 실행될 것이라고 받아들인다.   
따라서 위에 작성된 코드는 A-B-C의 순서를 가질 것이라 생각할 수 있다. 그러나, 자바스크립트의 비동기 특성은 A-B-C의 순서를 갖게 하지 않는다.   아래의 결과를 보자. <br>

![비동기](https://user-images.githubusercontent.com/76241233/121538785-0412f100-ca40-11eb-9816-3fcdc6b5873e.gif)

`setTimeout()`을 설정한 `console.log('B')`가 가장 나중에 실행되는 것을 볼 수 있다.    
지금은 2개는 명확하게 즉시 실행되고, setTimeout()이 나중에 실행되기 때문에 순서를 알 수 있었지만, 비동기 처리가 많아지면 어떤 코드가 가장 먼저 실행될 지 확신할 수 없다.    


## 프라미스

### 프로미스의 상태
프로미스는 상태를 갖는다. `fulfilled` 상태는 `resolve()`, `rejected` 상태는 `reject()`를 실행한다.   

### 작성
```
let promise1 = new Promise(function(resolve, reject) {
    executor(제작코드); 
});
```
프라미스가 만들어지면 executor 함수는 자동으로 실행된다.

```
let promise2 = function(param) {
    return new Promise(function(resolve, reject) {
        if(param) {
            resolve("해결");
        } else {
            reject("땡!");
        }
    });
}

//실행
promise2(true).then(function(result){
    console.log(result); // 해결
}, function(err) {
    console.log(err); //땡!
})
```
`Promise <fulfilled>` 상태가 되며 `해결`을 반환한다.

### 예제
```
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("해결"), 10000)
});
promise.then(); 
```
![Promise1](https://user-images.githubusercontent.com/76241233/121522559-3583c080-ca30-11eb-8c3e-512eb23c7ea4.gif)

10초 후에 fulfilled (이행)된 것을 확인할 수 있다.    
`then()` 메소드는 promise의 콜백을 수행하고, `reject`된 경우를 대비해 `catch()`를 사용할 수 있다.    

## async & await
promise의 이행을 위해 `then()` 메소드를 사용했다. then, async, await는 기본적으로 promise의 값을 reslove하는 역할이다.    
다만, then을 사용하면 불가능한 로직이 있기 때문에, async와 await를 사용할 수 있다.    

* then을 쓸 때의 callback hell
    - 불필요하게 구문이 중첩된다.
    - 콜백 형태로 데이터를 resolve하면 해당 스코프에서만 그 데이터를 사용할 수 있다
    - 등등... 

여러 문제점이 있기 때문에, async와 await를 사용한다.   

### async & await 예제
기본적으로 `async`와 `await`는 세트다. 같이 사용하며, promise 객체에서만 사용한다.   
```
function signIn() {
    let user = fetchUser('blabla.com/users/123');
    if(user.id === 123) {
        console.log(user.nickname);
    }
};
```
서버에서 user.id 가 123인 유저의 nickname을 가져오고자 한다.   
`fetchUser()`가 user의 정보가 있는 HTTP 통신 코드로 가정 시.
```
function signIn() {
    let user = fetchUser('blabla.com/users/123');
    if(user.id === 123) {
        console.log(user.nickname);
    }
};
```
콜백 사용해 비동기 처리 코드 작성.    
일반적으로 JS 비동기 처리는 아래처럼 콜백을 사용해야 코드의 실행 순서를 보장받을 수 있다.
```
function signIn() {
    let user = fetchUser('blabla.com/users/123', function(){
        if(user.id === 123) {
            console.log(user.nickname);
        }
    });
}
```
콜백 사용하지 않고 async await 이용해 비동기 처리
```
async function signIn() {
    let user = await fetchUser('blabla.com/users/123');
    if(user.id === 123) {
        console.log(user.nickname);
    }
};
```


## 참고
https://joshua1988.github.io/web-development/javascript/js-async-await/

