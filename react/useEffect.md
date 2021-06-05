# useEffect
리액트에서 우리는 useEffect라는 hook을 이용할 수 있다.    `useEffect`는 컴포넌트가 **렌더링 될 때마다** 특정한 작업을 실행할 수 있도록 하는 hook이다.    
이 hook은 **항상 함수를 반환**해야 한다. 

## 작성
```
useEffect(() => {
    console.log("call useEffect");
})
```

useEffect 에서 설정한 함수가 처음 렌더링 될 때만 사용되고, re-render시에는 실행되지 않게 하려면, 함수의 두번째 파라미터로 비어있는 배열을 반환하면 된다. 
```
useEffect(() => {
    console.log("call useEffect");
}, [])
```

## 사용
1. 버튼 클릭시 횟수 카운트하는 예제

* App.js
```
import React, { useState, useEffect } from 'react';
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

    /*
    //불가능. Hook은 조건부 실행할 수 없기 때문에.
    if(value > 0) {
        useEffect(() => {
            console.log('call useEffect);
            document.title = `New Mail(${value})`; 
        })
    }
    */

  useEffect(() => {
    console.log('call useEffect'); // 컴포넌트 렌더링될 때마다 useEffect 호출
    if (value > 0) { // 조건을 useEffect hook 안에 넣기
      document.title = `New Mail(${value})`;
    }
  });

  console.log('render component'); //컴포넌트 랜더링 확인
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
                                // 클릭할 때마다 setValue를 invoke
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
```
![useEffect1](https://user-images.githubusercontent.com/76241233/121053166-084bce00-c7f6-11eb-8b5b-a18770201c46.gif)


2. clean up 예제
cleanup function은 렌더링 후 useEffect가 업데이트되기 전, 특정한 작업을 수행하고 싶을 때 사용한다.   

```
import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect'); // 2번째 실행
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup'); // useEffect가 업데이트 되기 전 cleanup
      window.removeEventListener('resize', checkSize);
    };
  });
  console.log('render'); // 최초 실행
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
```
![useEffect2](https://user-images.githubusercontent.com/76241233/121201413-799b8780-c8af-11eb-859d-b30154330deb.gif)

3. fetch data 예제
`useEffect`에서는 `async await`를 사용하지 못한다. 정확히는 이렇게 사용하지 못한다.   
```
useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);
```
async가 반환하는 promise를 useEffect는 반환할 수 없기 때문이다.    
useEffect가 반환하는 것은 함수이기 때문에 promise 객체를 반환할 수 없다. 

사용할 수 있는 방법은 이러하다.   

```
useEffect(() => {
async function fetchAndSetUser() { 
	const data = await fetchUser(userId); // useEffect 내에서 async await 함수 작성
	setUser(data);
   }
   fetchAndSetUser(); // async await 함수 바로 호출
},[userId]);
```

만약  async await 함수가 다른 곳에서도 재사용된다면, hook 밖으로 빼내면 된다.    

