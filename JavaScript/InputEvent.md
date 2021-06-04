# input event
`<input>`에 입력하는 `value`에 따라 heading의 값을 변화시키고 싶을 때.

```
<!DOCTYPE html>

<head>
    <title>Input Event</title>
    <script src="app.js"></script>
</head>

<body>
    <h1>Enter Your Username</h1>
    <input type="text" id="username">
</body>

</html>
```

```
const input = document.getElementById("input");
const title = document.querySelector("h1");

input.addEventListener("input", function(e){
  if(!this.value) {
      title.innerHTML =`Enter Your Username`;
  } else {
      title.innerHTML = `Welcome, ${this.value}`;
  }
})
```