# React Hooks
React v16.8 이후에 Function 컴포넌트에도 State를 설정할 수 있다.   
React Hooks는 React 함수 중 use-로 시작하는 것들을 일컫는다.

## 사용 규칙
1. 선택적 실행 금지   
if문 등, 어떠한 특정 조건에 따라 실행된다면, React Hooks는 정상적인 작동을 보장하지 않는다.   
2. Function 컴포넌트에서만 사용 가능하다.

## 기본 Hook
### useState
    - return : 배열
    - [넘겨준 값, 값 변경 함수]
    - 한 번 실행하며, 실행한 함수의 return 값이 State가 된다.
#### State 
State는 props처럼 App 컴포넌트의 렌더링에 변화를 줄 수 있는 데이터를 갖고 있는 객체이다.    
다만 리액트의 props는 상속의 개념처럼 부모의 값을 자식에게 전달해주는 것이라면, State는 컴포넌트가 지니고 있는 값이다. 영어설명이 좀더 이해하기 좋다. built-in 된 값이다. (함수 내 변수 개념처럼)   

#### State를 사용하는 이유
사용부/구현부를 나누어 관리하기 위함이다.   
리액트는 DOM에 접근해 달라진 부분을 스스로 찾아 바꾼다. 
> When the state object changes, the component re-renders.
State가 바뀌면? 컴포넌트가 re-render된다. 이렇게 바꾸는 과정을 원활하게 하기 위해 State가 필요하다고 생각했다. 
```
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count-1)}> -1 </button>
      <button onClick={()=>setCount(count+1)}> +1 </button>

    </div>
  )
}

```
함수에 이름주기
```
const Counter = () => {
  const [count, setCount] = useState(0)
  const decrease = ()=>setCount(count-1)
  const increase = ()=>setCount(count+1)
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrease}> -1 </button>
      <button onClick={increase}> +1 </button>

    </div>
  )
}
```
컴포넌트 내에서 useState는 여러번 사용된다. 다시 말해 여러번의 State를 가지게 된다. 

### useEffect
컴포넌트의 연산이 끝난 후 함수가 실행된다.   
~~(제이쿼리에서 ready 와 같은 느낌인가?)~~   
   
아래코드는 count된 결과를 기반으로 title을 바꾼다.
```
const Counter = () => {
  const [count, setCount] = useState(0)
  const decrease = ()=> {
    setCount(count-1) 
    document.title = count-1 
  }
  const increase = ()=> {
    setCount(count+1)
    document.title = count+1 
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrease}> -1 </button>
      <button onClick={increase}> +1 </button>

    </div>
  )
}
```
다만 초기값은 React App으로 고정되어 있다.   
이를 useEffect를 사용해 수정할 수 있다.   

```
 const [count, setCount] = useState(0)
  const decrease = ()=> {
    setCount(count-1)
  }
  const increase = ()=> {
    setCount(count+1)
  }
  useEffect(() => {
    document.title = count
  })
```

## 추가 Hook
기본 Hook의 변경 혹은 특수한 상황에서 필요한 것들이다.
### useRef
useReference 이다. JS에서는 DOM 선택 시 `getElementById` 나 `querySelector` 등의 DOM selector를 이용한다.   
리액트에서도 DOM을 선택해야 하는데, 위의 선택자를 이용할 수도 있지만, 리액트에서는 ref를 사용한다.   
```
const ClickBtn = () => {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current}times`);
  };
  console.log('I rendered');
  return <button onClick={handle}>Click me</button>
}
```
처음에 콘솔을 보면 `I rendered`이 뜨고, 클릭을 하면 클릭 수만 증가한다. 이것은 즉 re-rendering이 되지 않는다는 것을 의미한다.   
useRef는 자바스크립트 객체로 heap 영역에 저장된다. 따라서 참조 주소는 어플리케이션이 종료되거나 하지 않으면 같은 메모리 주소를 가진다. 즉, 렌더링할때 지속적으로 동일한 ref 객체를 제공한다.   
이것이 useState랑 가장 큰 차이이기도 하다.   
1. useState는 계속해서 구성요소를 다시 렌더링 한다. 
2. useState는 비동기적. useRef는 동기적.

### useMemo
* useState, useEffect만 이용해 글자수 세기
```
const CountText = () => {
  const [text, setText] = useState('');
  const [nicknameLength, setTextLength] = useState(0);

  const updateTextLength = () => {
    setTextLength(text.length);
  };
  useEffect(updateTextLength, [text])
  
  const updateNickname = event => {
    const text = event.target.value

    setText(text)
  }
  return (
    <div>
      <textarea onChange={updateNickname}/>
      <p>{nicknameLength}</p>
    </div>
  )
}
```

* useMemo도 이용해 글자수 세기
```
const CountText = () => {
  const [text, setText] = useState('');
  const nicknameLength = useMemo(() => text.length, [text])
  
  const updateNickname = event => {
    const text = event.target.value
    setText(text)
  }
  return (
    <div>
      <textarea onChange={updateNickname}/>
      <p>{nicknameLength}</p>
    </div>
  )
}
```

### useReducer
  - return 배열 [State, State 변경함수]
  - useState 의 setState 함수를 여러번 사용하지 않아도 된다.
  - reducer로 로직을 분리해 다른 곳에서도 재사용이 가능하다.



## Reference
[react-useref-guide](https://dmitripavlutin.com/react-useref-guide/)
[public_danuel.log - trendy React](https://velog.io/@public_danuel/series/trendy-react)
