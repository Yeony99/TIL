# 웹에서의 BOX처리   
CSS로 box를 만들어 콘텐츠를 구분할 수 있다.   
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>

      h1{
        border:5px solid red;
        padding: 30px; /*컨텐츠와 박스와의 간격*/
        /*margin:20px 은 박스가 여러개일 때 테두리 간의 간격*/
        display: block;
        width:500px; /*설정한 pixel 크기만큼 화면을 차지한다 */
      }
      
      /*
      h1과 a 태그를 따로 나누어 할 수도, 혹은 h1, a {} 처럼 합쳐서 설정할 수도 있다.
      */
      a{
        border-width:5px;
        border-color:red;
        border-style: solid;
        display:block;
      }
      */
    </style>
  </head>
  <body>
    <h1>Yeony99</h1> Hi there! (<a href="https://github.com/Yeony99">here</a>) is my github.
  </body>
</html>
```
##결과   

크롬에서 html 파일을 열면 이와 같은 결과를 볼 수 있다.   
   
![CSS_Box](https://user-images.githubusercontent.com/76241233/107848640-606e5700-6e38-11eb-96d6-de53cf856743.png)
