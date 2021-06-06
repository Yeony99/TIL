# useState
리액트에서 우리는 useState 라는 hook을 이용할 수 있다.   
원래 React에서 상태관리를 하려면, 클래스를 기반으로한는 컴포넌트로 작성했어야 했다. 그러나 `useState`를 사용하게 되며, 함수를 기반으로 상태를 관리할 수 있게 되었다. 


## 작성
```
const [상태 값 저장하는 변수, 상태 값 갱신 함수] = useState(상태 초기값);
```
이때 갱신 함수를 사용하지 않고, 변수를 다른 상태 값으로 할당하면 함수가 제대로 적용되지 않는다. 


## 사용

1. 버튼을 클릭하면 title을 바꾸는 예제

* App.js
```
import React, { useState } from 'react';
const UseStateBasics = () => {

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
```

* index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

![useState1](https://user-images.githubusercontent.com/76241233/120924292-ea0aa300-c70d-11eb-8273-ea4cbc038634.gif)

2. Array 사용 예제
배열을 받아와 요소를 삭제하는 예제.

* data.js 
```
export const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
];
```
`data`라는 배열을 선언한 후 export 한다.

* index.js 는 위와 동일
* App.js
```
import React from 'react';
import { data } from '../src/data';

const UseStateArray = () => {
                            // import 하는 대신 React.useState() 같은 형식 가능
  const [people, setPeople] = React.useState(data); // useState 작성

  const removeItem = (id) => { // data 배열의 id를 파라미터로 갖는 함수 작성
    let newPeople = people.filter((person) => person.id !== id); // 일치하는 id가 없으면 
    console.log(id); //삭제된 id 반환
    setPeople(newPeople); // 새로운 상태를 반영하도록 할당
    console.log(newPeople); // 삭제된 후의 새로운 배열 반환
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person); // data의 배열이 출력되는지 확인
        return (
          <div key={id} className='item'> // 식별 key를 id로
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
                            //빈 배열로 set 하면 모두 clear 하는 것.
                            //바로 invoke되면 안되기 때문에, () => setPeople([])
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
```
![useState2](https://user-images.githubusercontent.com/76241233/120925764-00682d00-c715-11eb-8ec2-bc6edf598e17.gif)


3. Object 사용 예제
Object에 담은 name, age, message 중 message만 바꾸는 예제.

```
import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Yeony',
    age: 24,
    message: 'random message',
  });

  //위 Object는 아래의 선언을 한 번에 한 것. multiple smaller state values 로 선언 가능.
  // const [name,setName] = useState('Yeony')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' }); // 추가 설명 아래에.
    // setMessage('hello world')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
```
![useState3](https://user-images.githubusercontent.com/76241233/120926960-15938a80-c71a-11eb-8b27-40e26233fc6b.gif)

`changeMessage`함수의 `setPerson({ ...person, message: 'hello world' });`의 의미는 이러하다.    
`...person`은 상태 값을 저장한 변수 person을 복사, `message : `는 이후에 적힌 것으로 해당 Object의 요소를 변경한다는 것이다.   
만약 `...person`을 작성하지 않는다면, message가 변경됨과 동시에 Object의 message를 제외한 요소는 사라진다. 

