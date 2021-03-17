# input
회원 가입 창 등을 보면 박스에 여러 정보를 입력받을 수 있다.   
이를 html로 만드는 방법

## form 
* action : form data를 서버로 보낼 때 해당 데이터가 도착할 URL 기입
* name : form 식별을 위한 이름 지정
* accept-charset : 폼 전송에 사용할 인코딩 지정
* method : GET 혹은 POST. 폼을 서버에 전송할 http 메소드 지정
  - GET : 데이터를 **읽을 때** 사용. 외부에 데이터 노출 위험 높음
  - POST : 데이터 **작성, 수정, 삭제**시 사용. 보안처리된다.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form-input</title>

</head>
<body>
    <h1>Form and Input</h1>
    
    <form action="/url" name = firstForm accept-charset="utf-8" method="GET" target>
    
    </form>
</body>
</html>
```

## input 태그
* 데이터를 입력받을 수 있는 박스
* type 지정할 수 있다
  - text
  - color : 컬러팔레트 (RGB, HSL, HEX)
  - password : 비밀번호 ****** 표시
  - [<input>입력요소 참고](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form-input</title>

</head>
<body>
    <h1>Form and Input</h1>
    
    <form action="/blabla" accept-charset="utf-8" method="GET">
        <fieldset style="width:150">
        <input type="text" placeholder="name">
        <input type="password" placeholder="password">
        <input type="color">
        <input type="text" placeholder="something"> 
        심심해요 : 심심<input type="radio" name = "rd1"> 
                   심심이<input type="radio" name = "rd1"><br>
        뭐하지 : 공부<input type="checkbox" name = "cb1">
                 베이킹<input type="checkbox" name = "cb2">
                 코딩 <input type="checkbox" name = "cb3">
    </fieldset>
    </form>
</body>
</html>
```
* 결과
![form n input](https://user-images.githubusercontent.com/76241233/111482861-a0966180-8777-11eb-8868-3ffe77d8fce7.png)
