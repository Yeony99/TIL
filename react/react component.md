# 리액트 컴포넌트 작성 - 함수

## 과정
* start npm (혹은 start yarn)
    - localhost:3030 이 실행되어야 한다.
* Hello.js에서 function 작성
    - Hello라는 컴포넌트를 만든다.
```
import React from 'react';

function Hello() {
    return <div>안녕?</div>;
}

export default Hello; 
```

* App.js에서 Hello 컴포넌트 import
    - import Hello from '/Hello.js'; 입력. .js 확장자는 생략 가능하다.
    - `<Hello/>`를 입력하면 Hello 컴포넌트가 React App 페이지에 노출된다.
```
import React from 'react';
import Hello from './Hello'; //상대경로 입력

function App() {
  const name = 'react';
  return (
    <div>
      <Hello/>
    </div>
  );
}

export default App;

```

