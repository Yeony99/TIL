# Event

## 작성 규칙
1. 카멜케이스로 작성
```
onClick={activeclick} /* (x) */
onClick={activeClick} /* (o) */
```

2. 문자열이 아닌 **함수**를 전달
```
onClick="functionName()" /* (x) */
onClick={functionName}  /* (o) */
```

## 작성하기
* 이벤트에 직접 함수 작성
```
const App = () => (
  <input type="text" onChange={event => {
    const nickname = event.target.value
    console.log(nickname)
    console.log('nickname length : ', nickname.length)
  }}/>
)
```

* 함수명 작성해 이벤트에 전달
```
const App = () => {
  //기명 함수
  const printNickname = event => {
    const nickname = event.target.value
    console.log(nickname);
    console.log('nickname length : ', nickname.length);
  }
  return (
    <input type="text" onChange={printNickname} />
  )
}
```