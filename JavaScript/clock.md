# How to make clock in JS 자바스크립트에서 시계 만들기
to-do list의 첫 번째 과정으로 전자시계를 만들었다.   

## 결과
![clock](https://user-images.githubusercontent.com/76241233/111034959-59e4f680-845b-11eb-9ab2-ef820651cfd2.gif)



## 코드
* html 파일
  - 시간과 날짜를 출력하는 형식 지정
```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>clock</title>
  <link rel="stylesheet" href="clock.css">
</head>

<body>
  <div class="js-clock">
    <h1 id="time">00:00</h1>
    <h2 id="date">YYYY MM DD day</h2>
  </div>

  <script src="clock.js"></script>
</body>

</html>
```

* JS 파일

```
const clockContationer = document.querySelector(".js-clock"),
  clockTitle = clockContationer.querySelector("h1"),
  dateTitle = clockContationer.querySelector("h2");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hours< 10 ? `0${hours}` : hours}:${minutes<10? `0${minutes}` : minutes}:${sec < 10 ? `0${sec}` : sec}`;
}

function getDays() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth();
  const wdate = date.getDate();
  const day = date.toLocaleString('en-us', {  weekday: 'short' });

  dateTitle.innerText = `${years}-${months+1}-${wdate} ${day}`
}

function exec() {
  getTime();
  getDays();
  setInterval(getTime, 1000);
}

exec();
```

* CSS 파일
```
body{
  background-color: white;
}

h1 {
  text-align: center;
  color : #bad7ff;
  transition: color 0.5s ease-in-out;
  cursor: pointer;
}
h2 {
  text-align: center;
  color : #91bfff;
}
```

## 사용
* setInterval()
  - 두 인자(실행할 함수, 함수를 실행할 시간)을 받는 함수

* Date()
  - 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초)을 위한 메소드 제공
```
// Long 날짜
new Date("Mar/13/2021"); 
new Date("Mar-13-2021"); 
new Date("13 Mar 2021");
new Date("13 March 2021"); 
new Date("13 MARCH 2021");

// Short 날짜
new Date("03/13/2021"); 
new Date("03-13-2021"); 
new Date("03 13 2021");
```

## 참고
[Date - JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
