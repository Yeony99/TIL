# SCSS 기본
scss는 중첩, 변수 선언, 연산자 등을 활용할 수 있다.   

## CSS 코드와의 비교
* css 코드
```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

* scss 코드
```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

## `@use`와 `@import`의 차이
[Sass-lang](https://sass-lang.com/guide)을 보니 모듈을 불러오는 방식으로  `@use`를 사용하고 있었다.
`@import`와 무슨 차이지 싶어 찾아보니 
* @import는 다른 파일을 연결할 수 있는 것이고
* @use는 @import처럼 여러 스타일시트를 합칠 수 있다.
  * 하지만 @use의 경우, 컴파일되는 css파일에는 한번만 표시된다. 

## @import 시
* `_` 언더바를 `.scss` 파일 앞에 붙이면, 해당 파일은 css로 변환되지 않는다.
* scss 파일로서만 존재하고, 최종적으로 언더바를 붙이지 않은 파일만 css파일로 컴파일된다.
