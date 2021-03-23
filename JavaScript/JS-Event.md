# JavaScript 알아보기

## JavaScript의 특징
* 연산이 된다
  - html은 1+1을 적었을 때 그대로 1+1을 출력하지만, JavaScript는 2를 출력한다.
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>JavaScript</h1>
    <script>
      document.write(1+1);
    </script>
    <h1>html</h1>
    1+1
  </body>
</html>
```
## JavaScript의 사용   
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="hi" onclick="alert('hi')">
    <input type="text" onchange="alert('changed')">
    <input type="text" onkeydown="alert('key down')">
  </body>
</html>
```
위처럼 on- 으로 시작하는 기능을 제공하는데,   
이러한 기능들을 JavaScript의 이벤트라 한다. 
