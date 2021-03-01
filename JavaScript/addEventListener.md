# addEventListener

## EVENT
* 자바스크립트는 이벤트에 반응하기 위해 만들어졌다.
* 이전에 JS-event에서 적었던 것처럼, on-으로 시작하는 이벤트도 있다.
* click, resize, submit, change, load, closing, printing 등... 다양한 이벤트가 존재.

## addEventListener 사용
* resize가 될 때마다 알림이 뜬다

![image](https://im2.ezgif.com/tmp/ezgif-2-997669e09314.gif)

```
<!--html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Yeony99</title>
    <link rel="stylesheet" href="index.css">
  </head>

  <body>
    <h1 id ="title">Hi there! :)</h1>

  </body>
      <script src="index.js"> </script>
</html>
```
```
//js
function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
```

* (일회성) 클릭할 때 색깔이 바뀐다
```
const title = document.querySelector("#title"); //h1 아이디를 #으로 접근

function handle() {
  title.style.color = "blue";
}

title.addEventListener("click", handle);
```
