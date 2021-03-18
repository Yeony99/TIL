# Button and select (and so on...)
* 각각의 태그가 어떤 기능을 하는지는 [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input) 참고

## 코드
* form 밖에 위치한 outside button은 작동하지 않는다.
* form 안에 위치한 submit button은 form 안에 있는 내용을 전달한다. (결과 참조)
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>something...</title>

</head>

<body>
    <h1>something...</h1>
    <button type="button">outside button</button>

    <form action="/lala">
        <p>
            <label for="s">S</label>
            <input type="radio" name=size id="s" value="s">
            <label for="m">M</label>
            <input type="radio" name=size id="m" value="m">
            <label for="l">L</label>
            <input type="radio" name=size id="l" value="l">
        </p>
        <p>
            <label for="volume">volume: </label>
            <input type="range" min="1" max="100" step = "5" name = "level">
        </p>
        <p>
            what do you want:
            <select name="color" id="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>
        </p>
        <p>
            <label for="">What else do you want?</label><br>
            <textarea name="wedw" id="requests" cols="30" rows="2"></textarea>
        </p>
        <button>Submit</button>

    </form>

</body>

</html>
```


## 결과
![capture](https://user-images.githubusercontent.com/76241233/111632389-c3884a80-8837-11eb-9d90-8c61444065e9.png)
* submit 버튼을 누르면 "file:///C:/lala?size=s&level=16&color=blue&wedw=isn%27t+there+xs+size%3F" 와 같은 링크를 확인할 수 있다.
  - 링크를 보면 알 수 있듯, 고른 옵션이 모두 선택되어 있다.
