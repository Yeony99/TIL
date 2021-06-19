# styled-components란?
styled-coponents는 **CSS-in-JS** 스타일링을 위한 프레임워크이다.
대개 style을 특정 요소에 주고자 할 때 css, scss 등의 스타일 속성 파일에서 html tag나, id, class 등의 선택자를 통해 접근한다.   
하지만 이런 외부 파일 없이 동일한 컴포넌트에서 css와 같은 문법으로 스타일을 지정하는 것을 styled-components라고 부른다. 

## 장점
* styled-components 라이브러리를 사용해 보다 자유로운 리액트 컴포넌트를 만들 수 있다.
* 모바일을 지원한다(React Native에 사용)
* 스타일 스코프
* No-class policy 
  * styled-components는 class에서 props사용하는 것을 권장. 
```
<div className="wrapper"> Wrapper </div>

div.wrapper {
    background:pink;
    color:skyblue;
}
```
이런 코드를 아래와 같이 작성하는 것을 권장한다.
```
const Wrapper = styled.div`
    background:pink;
    color:${props => (props.primary ? "red" : "skyblue")};
`;
```
* 서버 사이드 렌더링
* css 테스팅


## 사용

* css 접근
```
<div className="wrapper"> Wrapper </div>
```
```
div.wrapper {
    background:pink;
    color:skyblue;
}
```

* 인라인 스타일링
대개 리액트에서 inline 스타일은 권장되지 않는다. 미디어 쿼리 등을 사용할 수 없고, camel case 사용 등의 이유 때문이다.   

```
const wrapperStyle = {
    background:pink;
    color:skyblue;
}

<div style={wrapperStyle}>인라인 스타일링</div>
```

이런 스타일 정의에서 styled-components를 사용하게 되면, 
```
import styled from 'styled-components';
const Wrapper = styled.div`
    background:pink;
    color:skyblue;
`;

<Wrapper>스타일드 컴포넌트</Wrapper>
```


## Reference
[8 reasons to use styled-components](https://blog.logrocket.com/8-reasons-to-use-styled-components-cf3788f0bb4d/)