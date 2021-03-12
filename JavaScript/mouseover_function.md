## function 사용
여러 기능을 정의해 웹에 사용할 수 있다.
아래는 커서를 올릴 때마다 색상이 바뀌는 기능.


* html 파일
```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Today Yeony Learned</title>
    <link rel="stylesheet" href="blog.css">
    <meta charset="utf-8">
  </head>
  <body>
    <h1 id = "test">Today Yeony Learned</h1>
    <ul>
      <li>TIL</li>
      <li>YEONY</li>
    </ul>
  </body>
    <script src="blog.js"> </script>
</html>

```
* JS 파일
  - 마우스 커서가 지나갈 때마다 색상이 바뀌는 효과를 준다.
```
const test = document.getElementById("test");

const BASE_COLOR = "rgb(186, 215, 255)"; 
const OTHER_COLOR = "rgb(255, 226, 186)";
test.addEventListener("mouseover", mouseOver);

function mouseOver() {
  const currentColor = test.style.color;
  if(currentColor === BASE_COLOR) {
    test.style.color = OTHER_COLOR;
  } else {
    test.style.color = BASE_COLOR;
  }
}
```

* css 파일
```
body{
  background-color: white;
}
h1 {
  color : #bad7ff;
}
```

![](https://user-images.githubusercontent.com/76241233/110942665-7a3e8380-837d-11eb-9881-a5819feb5974.gif)


