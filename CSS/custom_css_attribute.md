# 커스텀 CSS 속성
CSS에서 작성자가 정의한 속성을 사용할 수 있다. `CSS 변수`라고도 한다.   

## 정의하기
```
:root {
    --custom-name: value;
}
```
* root : 커스텀 속성을 전역으로 사용할 때 `:root {}`에 해당 속성을 정의한다.
* --custom-name : 커스텀 속성의 이름을 지정한다. `--` 이중 하이픈을 앞에 작성한다.
    - 어떤 작용을 하는지 명시하는 것이 좋다.
    - 대소문자를 구분한다.
* value : 속성의 값. CSS의 모든 속성이 들어갈 수 있다.

## 사용
```
.foo {
    color: var(--custom-name);
}
```

## 예시
* 스타일
```
<style>
:root {
    --main: pink;
}
.foo {
    color: var(--main);
}

</style>
```
* html
```
<body>
    <div class="foo">
        <h1>hi!</h1>
    </div>
</body>

```