# props
리액트의 컴포넌트는 JS의 함수와 유사하다.

## props란?
props는 properties의 줄임말이다.
자바스크립트와 비교하면 props는 자바스크립트의 파라미터와 같은 개념으로,
부모 컴포넌트에서 자식 컴포넌트에게 건네주는 값이다.

* App.js
```
import React from 'react';
import Hello from './Hello'; 

function App() {
  return (
      <Hello name="react" color="red"/>
  );
}

export default App;
```

* Hello.js
```
import React from 'react';

function Hello(props) {
    console.log(props);
    return <div style={{
        color : props.color
    }}> Hey, {props.name}</div>;
}

export default Hello; 
```

props를 조회할 때마다 props를 작성하지 않을 수 있다.
(구조 분해 문법)
* Hello.js
```
import React from 'react';

function Hello({color, name}) {
    return <div style={{
        color : color
    }}> Hey, {name}</div>;
}

export default Hello; 
```

혹은 이렇게 작성도 가능하다.
```
import React from 'react';

function Hello({color, name}) {
    return <div style={{
        color
    }}> Hey, {name}</div>;
}

export default Hello; 
```

## props의 기본값 설정
props가 지정되지 않았을 때, 기본적으로 어떤 것을 출력할 지 결정하는 것이다.
`컴포넌트.defaultProps = {}` 형태이다.
Hello.js 의 함수 밑에 아래 코드를 작성한다.

```
Hello.defaultProps = {
    name : 'none'
};
```

App.js에서 Hello 컴포넌트를 한번 더 호출한다
```
function App() {
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="blue"/>
    </>
  );
}
```
두 번째 결과는 none 으로 나온다.

## Props 소개
다뉴님 강좌를 기반으로 추가한 내용. 보다 정확한 이해를 위해 + 헷갈리는 개념복습을 위해!   
index.js에서 작성.   

* 아래 두 개는 props를 전달하는 과정으로 동일한 결과
```
const User = props => (
  <h1>{props.nickname}</h1>
)
const App = () => (
  <div>
    <User nickname='Yeony99'/>
  </div>
)
```
```
const User = ({nickname}) => (
  <h1>{nickname}</h1>
)
const App = () => (
  <div>
    <User nickname='Yeony'/>
  </div>
)
```

* 반복 컴포넌트 multiple components 작성

```
const Fruits = () => {
  const FruitList = ['melon', 'strawberry', 'banana', 'apple' ]

  return (
    <ol>
      <li>
        <span>{FruitList[0]}</span>
      </li>
      <li>
        <span>{FruitList[1]}</span>
      </li>
      <li>
        <span>{FruitList[2]}</span>
      </li>
      <li>
        <span>{FruitList[3]}</span>
      </li>
    </ol>
  )
}

ReactDOM.render(<Fruits />, document.getElementById('root'));
```
List의 크기가 비고정적일 때는 이런 방식은 비효율적.   
아래처럼 map을 이용하여 처리할 수 있다.
```
const Fruits = () => {
  const FruitList = ['melon', 'strawberry', 'banana', 'apple' ]

  return (
    <ol>
      {FruitList.map((fruit, index) => (
        <li key={index}>
          <span>{fruit}</span>
        </li>
      ))}
    </ol>
  )
}

ReactDOM.render(<Fruits />, document.getElementById('root'));
```
##### cf) key란?
key는 React의 배열 map 메소드 이용해 반복 컴포넌트 작성할 때 반드시 필요한 속성
1. 유일한 값을 가지고 있어야 한다.(중복 불가)
2. string 혹은 number만 가능
3. key 속성에 지정한 값을 기준으로 **기존의 값**인지 or **바뀐 값**인지를 판단