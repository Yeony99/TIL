# State 
State는 props처럼 App 컴포넌트의 렌더링에 변화를 줄 수 있는 데이터를 갖고 있는 객체이다.    
다만 리액트의 props는 상속의 개념처럼 부모의 값을 자식에게 전달해주는 것이라면, State는 컴포넌트가 지니고 있는 값이다. 영어설명이 좀더 이해하기 좋다. built-in 된 값이다. (함수 내 변수 개념처럼)   

## State를 사용하는 이유
사용부/구현부를 나누어 관리하기 위함이다.   
리액트는 DOM에 접근해 달라진 부분을 스스로 찾아 바꾼다. 
> When the state object changes, the component re-renders.
State가 바뀌면? 컴포넌트가 re-render된다. 이렇게 바꾸는 과정을 원활하게 하기 위해 State가 필요하다고 생각했다. 

## React Hooks
React v16.8 이후에 Function 컴포넌트에도 State를 설정할 수 있다.   
React Hooks는 React 함수 중 use-로 시작하는 것들을 일컫는다.

### useState
    - return : 배열
    - [넘겨준 값, 값 변경 함수]
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
(제이쿼리에서 ready 와 같은 느낌인가?)   
   
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

## Ref

[public_danuel.log - trendy React](https://velog.io/@public_danuel/series/trendy-react)
