# JSX
JSX는 Javascript와 XML의 합성어로, 자바스크립트 내에서 HTML 문법으로 view 구성할 수 있게끔 하는 **자바스크립트** 문법이다.

## JSX를 사용하는 이유
리액트 개발은 자바스크립트를 이용한다.
자바스크립트이기 때문에, 원래는 자바스크립트 문법으로 작성해야 하지만, JSX는 HTML 문법의 모습을 띄고 있다.
자바스크립트 문법으로 작성하다보면 개발에 어려움이 있기 때문에,  HTML처럼 작성을 하면 이를 `BABEL`이 React.createElement 를 사용하는 자바스크립트 형태로 바꿔준다.

## JSX 작성 규칙
1. `<tag></tag>` 혹은 `<tag/>` 처럼 태그가 닫혀야 한다.
2. 2개 이상의 element는 하나의 element로 감싸야 한다.

```
<div>
    <div>

    </div>
    <div>

    </div>
</div>
```
- 잘못 작성된 예
```
<div>

</div>
<div>

</div>

```
3. 단순히 무언가를 감싸기 위한 용도로 태그를 사용할 경우에는 `<Fragment>` 태그 사용
    - `<Fragment>` 태그는 HTML 상에서 노출되지 않는다.
    - v16.2에 도입되었다고 한다.
```
<Fragment>
    <div>

    </div>
    <div>

    </div>
</Fragment>

```

4. 자바스크립트 값 사용
    - jsp에서 자바의 값을 가져오는 것과 유사한 방식이다.
    - `{javascript}` 형식
```
<div>
    hey, {name}
</div>
```

5. if문을 사용할 수 없다
    - 삼항 연산자를 대신 사용하자
6. if문을 반드시 사용해야 하는 조건이라면 즉시 실행 함수(IIFE)를 사용한다.
```
{
    (function () {
        if(조건) 실행;
        if(조건2) 실행2;
    })()
}
```
혹은 화살표 함수를 사용할 수 있다.
```
{
    (() => {
        if(조건) 실행;
        if(조건2) 실행2;
    })()
}
```
7. 즉시 실행 함수 대신 switch문을 사용할 수 있다.
8. style 은 `{}` 안에 사용한다.

* 컴포넌트 내부
```
const deco = {
    color : 'black',
    padding : '10px',
    backgroundColor : 'gray' 
};

return (
    <div style={deco}>
        contents
    </div>
)
```

* css 파일
    - JS처럼 class 가 아니라 **className**으로 클래스를 호출한다.
    - class로 작성해도 적용은 되나, 경고가 뜬다.
```
.decoClass {
    color : 'black',
    padding : '10px',
    backgroundColor : 'gray' 
}

```
```
return (
    <div className="decoClass>
        contents
    </div>
)
```
