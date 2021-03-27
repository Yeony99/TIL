# hover
커서를 위로 가져가면 특정한 동작이 수행되도록 설정할 수 있다.

## 예시
```
<!DOCTYPE html>
<html>
<head>
<style>
h1:hover {
  background-color: yellow;
}
</style>
</head>
<body>

<h1>Welcome!</h1>
```

## 활용
* <a> 태그

```
<!DOCTYPE html>
<html>
<head>
<style>
/* 방문하지 않은 상태 */
a:link {
  color: black;
}

/* 방문한 후 */
a:visited {
  color: blue;
}

 /* 마우스를 가져다 대면 */
a:hover {
  color: red;
}

 /* 마우스를 누르는 순간 */
a:active {
  color: yellow;
} 
</style>
</head>
<body>

<p>클릭해보세요! <a href="https://github.com/Yeony99/TIL">github.com/Yeony99/TIL</a></p>

</body>
</html>
```

### 결과
![hover](https://user-images.githubusercontent.com/76241233/111799295-395ee580-890e-11eb-9336-cf96c60881eb.gif)

