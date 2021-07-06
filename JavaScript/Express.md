# Express 설치 - VSCode

## 설치
Node.js 가 먼저 설치되어 있어야 한다.   

1. Express-generator 설치
   - express 프로젝트의 기본 형식을 만들어주는 커멘드 모듈
    - 패키지를 통해 프레임워크에 필요한 package.json과 기본 구조도 설정된다.
```
C:\nodejs > npm install express-generator -g
```
`-g` 명령어를 통해 글로벌로 설치한다.   
설치된 파일은 `C:\Users\사용자명\AppData\Roaming\npm\node_modules\express-generator`에서 확인 가능.   

2. 프로젝트 생성
```
C:\nodejs > express myapp --view=ejs --css sass
```
C:\nodejs 폴더 아래 `myapp` 폴더가 생성된다.   
웹 템플릿으로 `ejs`모듈 사용하고, css모듈로 `sass`사용   

3. 필요한 모듈 다운로드, 설치   
```
cd myapp
C:\nodejs\myapp > npm install
C:\nodejs\myapp > npm start
```
메인 스크립트인 `app.js`로 서버가 실행된다.   
`localhost:3000/`에서 확인 가능.   


## 예제
`app1.js`를 만들어본다.   

```
//app1.js
var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Hello World!');
});
var server = app.listen(3000, function(){
    console.log('Server is now running!');
});
```
`app1.js`를 실행하기 위한 명령어는 아래와 같다.
```
> node app1.js
```
콘솔에서 메시지를 확인 가능하며, `localhost:3000`에서 `Hello World`를 볼 수 있다.

`app2.js`도 만들어보자.   

```
var express = require("express");
var app = express();
var ejs = require("ejs");

app.engine("ejs", ejs.renderFile);

app.get("/", function(req, res){
    res.render("test.ejs", {title:"express 예제", content: "첫번째 예제"});
})
var server = app.listen(3000, function(){
    console.log("server starttt");
})
```
`view` 폴더에 `test.ejs`를 생성한다.
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= title %></title>
    <style>
      body {
        font-size: 14px;
        color:#333;
      }

    </style>
  </head>
  <body>
    <header>
      <h1><%= title %></h1>
    </header>
      <main>
        <%- content %>
      </main>
  </body>
</html>
```
마찬가지로 `node app2.js`로 실행할 수 있다.    
실행 후 localhost:3000에 접속하면 EL로 넣은 데이터들이 반영된 것을 볼 수 있다.   
