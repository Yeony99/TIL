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
