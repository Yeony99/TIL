# DOM (Document Object Model)
DOM은 HTML 문서가 '객체 모델'로 변환되어 다양한 프로그램에서 사용되게끔 한 것이다. 

## js파일로 html 요소 변경하기 
* html, css, js 파일을 IDE에서 편집하고 인터넷의 콘솔창에서 결과를 확인

우선 아래 코드의 실행 결과이다.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Something</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 id ="berry">Hi there! :)</h1> <!--JS에서 berry 라는 객체를 생성할 수 있다. -->
    <script src="index.js"> </script>

  </body>
</html>
```
![image](https://user-images.githubusercontent.com/76241233/108715115-c1470f00-755d-11eb-915c-41ca156bb685.png)

* js 파일을 이용해 변경
```
console.log(document.getElementById('berry')); //'id'속성을 가진 요소를 찾아 객체로 반환
berry.innerHTML = "Hi! From JS"; //제목변경. 여전히 html 파일의 제목은 this work.
berry.style.color = 'black' //색상 변경
console.dir(document); //html 의 요소들 확인 가능
console.dir(berry); //h1의 id로, 적용된 요소들 확인 가능
document.title ="Guess what?" // 웹페이지의 title 변경됨
```
![image](https://user-images.githubusercontent.com/76241233/108716088-06b80c00-755f-11eb-8f46-51dbe0555b64.png)
![image](https://user-images.githubusercontent.com/76241233/108716314-4a127a80-755f-11eb-8759-d6f25cc6151f.png)

* index.js 로 웹사이트에 적용된 것을 확인할 수 있다.
