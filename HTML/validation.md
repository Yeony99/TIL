# validation 확인
웹 상에서 흔히 알림창을 볼 수 있다.   
특히 사이트에 가입할 때, 특수문자 포함 등의 제약조건이 있다. 이를 만족하지 못하면 "필수입력사항입니다" 등 여러 메시지가 뜬다.   

다음은 html 에서 그러한 validation을 추가할 수 있는 방법.

## required
* boolean 속성. 입력할 시 true, 입력하지 않으면 false
* tag에 여러 값을 주고 required 를 붙이면 된다.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>something...</title>
</head>
<body>
    <!-- <h1>something...</h1> -->
    <form action="/lala">
    
        <h2>Validations</h2>
        <label for="first">Enter Fist Name</label>
        <input type="text" name="first" id="first" required>
        <label for="username">Username</label>
        <input type="text" id = "username" name = "username" minlength="2" maxlength="10" required >
        <button>Submit</button>

    </form>
</body>
</html>
```

## 결과
* 마지막 오류는 action에서 지정된 url 이 유효하지 않기 때문에 발생.

![validations](https://user-images.githubusercontent.com/76241233/111645899-84acc180-8844-11eb-926f-a44de53d7e45.gif)
