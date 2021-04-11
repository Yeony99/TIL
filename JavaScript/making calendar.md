# making calendar with plain JS 바닐라 자바스크립트로 달력 
- todolist에 넣을 달력을 만드는 과정.
- Date() 함수에 대한 정리를 겸해 작성

## 요구사항
1) 이전 달, 다음 달 달력도 가져올 수 있어야 한다.
2) 요일과 달은 영문으로 표시한다.
3) **오늘** 날짜에 **특정한 표시**가 있어야 한다.
4) ~~특정한 일자를 클릭할 때, **클릭된 요일이 표시**되어야 한다.~~
5) ~~**오늘 날짜로** 간편하게 돌아올 수 있는 버튼이 있어야 한다.~~
6) 한 가지 일정을 자세하게 적을 수 있도록 한다.

## 달력 만들기 과정

### Date() 함수
Date() 함수는 **오늘**날짜를 가져온다.
보다 정확히 말하면, 시스템의 날짜이다.
```
// 오늘 날짜의 Date 객체 생성
const today = new Date();
```

### object에 달력 구성에 필요한 요소 작성
달력을 작성할 때 필요한 요소를 생각해보았다.

* 연도, 월, 일, 요일
  - 연도와 일자는 숫자로 표시
  - 월과 요일은 영문으로 표시

한 가지 유의할 점은 Date 함수에서 "월"과 "요일"은 배열처럼 0부터 시작한다는 점이다.   
연도와 일자는 그대로 숫자로 표시되니 상관없지만, 월(0~11), 요일(0~6)로 표시된다.   
일요일을 0 으로 표시하고 싶지 않다면 바꿔주어야 한다.   

* 해당 월의 첫 번째 날, 마지막 날
  - 월의 1일부터 마지막 날까지 달력에 출력

```
// 크롬에서 확인
// 첫 번째 날
const firstDay = (y,m) => new Date(y,m,1)

firstDay(2021, 3) // Thu Apr 01 2021 00:00:00 GMT+0900 (대한민국 표준시) {}
```
확인을 위해 작성해보았다.   
`new Date(y,m,1)`은 연도, 월, 해당 월의 첫 번째 날짜이다.   
그 결과 2021년 4월 1일이 출력되는 것을 볼 수 있다.   

```
//마지막 날
const lastDay = (y,m) => new Date(y,m+1, 0)

lastDay(2021,3)
```

## 작성 - 20210411 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mytodos.css">
    <title>today your plan</title>
</head>
<body>
    <div class="container">
        <div id="calendar-box">
            <div class="control">
                <button type="button" class="btn-ctrl" id="prev">◀</button>
                <div id="showMonth"></div>
                <button type="button" class="btn-ctrl" id="next">▶</button>
            </div>
            <div class="calendar-table">
                <div id="weekdays">
                    <div style="color: #e76b6b;">Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div style="color: #6ba5e7;">Sat</div>
                </div>
                <div id="calendar">
                    <!-- contents will be here from JS-->
                </div>
            </div>
        </div>    
        <div id="modalBackDrop"></div>
        <div id="newEventModal">
            <h2>New</h2>
            <input id="eventTitleInput" placeholder="Event Title">
            <button id="saveBtn">save</button>
            <button id="cancelBtn">cancel</button>
        </div>        
        <div id="clicked-date">
            <!-- <div id="clickedDay"></div> -->
            <div id="clickedDate"></div>
            <div id="todolist">
                <div id="deleteEventModal">
                    <h4>How's your day</h4>
                    <p id="eventText"></p>
                    <button id="deleteBtn">delete</button>
                    <button id="closeBtn">close</button>
                </div>
            </div>
        </div>
    </div>
    <script src="mytodos.js"></script>
</body>

</html>
```
```
* {
    padding: 0;
    margin: 0;
    font-family: 'MapoPeacefull';
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    background-color: #414141;
}

.container {
    display: flex;
    padding: 50px;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
}

button {
    width: 30px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #ffffff00;
}

.today {
    background-color: #5edee7;
    border-radius: 50%;
}

#showMonth {
    font-size: 15px;
}

.calendar-table {
    max-width: 350px;
}

.control {
    display: flex;
    width: 100%;
    padding : 10px 0;
    color: #000;
    font-size: 20px;
    justify-content: space-evenly;
}

#newEventModal {
    display: none;
    z-index: 20;
    padding: 25px;
    background-color: aliceblue;
    box-shadow: 0px 0px 3px black;
    border-radius: 5px;
    width: 350px;
    top: 100px;
    left: calc(50%-175px);
    position: absolute;
}

#deleteEventModal {
    display: none;
    padding: 25px;
}

#eventTitleInput {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 25px;
    border-radius: 3px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 3px gray;
}

#ebentTitleInput.error {
    border: 2px solid red;
}

#cancelBtn, #deleteBtn {
    text-align: center;
    border: 2px solid rgb(243, 79, 79);
    background-color: rgb(243, 79, 79);
    margin-right: 5px;
    padding-right: 10px;
}

#saveBtn, #closeBtn {
    text-align: center;
    border: 2px solid  rgb(255, 234, 234);
    background-color: rgb(255, 234, 234);
}

#eventText {
    margin-top: 25px;
    font-size: 15px;
    word-break: break-all;
}

#modalBackDrop {
    display: none;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #5c5c5c9c;
}

#clicked-date {
    min-width: 350px;
    max-width: 350px;
    background-color: white;
    height: 380px;
    border: 1px solid rgb(252, 228, 225);
    border-radius: 10%;
    padding: 10px;
    margin: 10px;
}

#weekdays {
    width: 100%;
    display: flex;
    color: rgb(61, 61, 61);
}
#weekdays div {
    width: 40px;
    padding: 10px;
}

#calendar {
    width: 100%;
    padding-top: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}

#calendar-box {
    background-color: white;
    height: 380px;
    border: 1px solid rgb(252, 228, 225);
    border-radius: 10%;
    padding: 10px;
    margin: 10px;
}

.day {
    width: 50px;
    padding: 10px;
    height: 50px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.day:hover {
    background-color:  #ffdd93;
    border-radius: 50%;
}

.blank {
    width: 50px;
    cursor: default;
}

.event {
    font-size: 0px;
    padding: 3px;
    background-color: aquamarine;
    border: 5px;
    max-height: 10px;
    overflow: hidden;
}

#clicked-date {
    display: flex;
    flex-direction: column;
}

#todolist {
    width: 90%;
    height: 70%;
    font-size: 2rem;
    margin-top: 10px;
    margin: 1rem;
    border: 3px solid #ffdd93;
    border-radius: 15px;
}

#clickedDate {
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    margin-left: 1rem;
    background-color: #ffdd93;
    border-radius: 50%;
    padding: 10px;
}
#clickedDay {
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    margin-left: 1rem;
    background-color: #ffdd93;
    border-radius: 50%;
    padding: 10px;
}
@font-face {
    font-family: 'MapoPeacefull';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoPeacefullA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
```

```
let ctrMonth = 0; // ctrl month 
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop')
const eventTitleInput = document.getElementById('eventTitleInput')

function openModal(date) { 
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if(eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventModal.style.display = 'block';
        // console.log('Event already exists');
    } else {
        newEventModal.style.display = 'block';
        backDrop.style.display = 'block';
    }
}

function calLoad() {
    const dt = new Date();
    if (ctrMonth !== 0) {
        dt.setMonth(new Date().getMonth() + ctrMonth)
    } else {
        dt.setMonth(new Date().getMonth())
    }
    const m = dt.getMonth();
    const y = dt.getFullYear();

    const firstDay = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0).getDate();

    const dateStr = firstDay.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    //날짜 앞에 빈공간
    const blankDays = weekdays.indexOf(dateStr.split(', ')[0]);

    //console.log(blankDays); //비는 공간이 얼만큼인지 확인
    document.getElementById('showMonth').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${y}`;

    calendar.innerHTML = '';


    for (let i = 1; i <= blankDays + lastDay; i++) {
        const dayblock = document.createElement('div');
        dayblock.classList.add('day');
        const dayString = `${m+1}/${i-blankDays}/${y}`;

        if (i > blankDays) {
            dayblock.innerText = i - blankDays;
            const eventForDay = events.find(e=> e.date === dayString);
            dayblock.addEventListener('click', () => openModal(dayString));
            
            if(eventForDay) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = eventForDay.title;
                dayblock.appendChild(eventDiv);
            }
        } else {
            dayblock.classList.remove('day');
            dayblock.classList.add('blank');
        }
        const today = new Date();
        if (i == today.getDate() + blankDays && m == today.getMonth() && y == today.getFullYear()) {
            dayblock.classList.add('today');
        }
        calendar.appendChild(dayblock);
    }
}
calLoad();

function closeModal() {
    eventTitleInput.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.nodeValue='';
    clicked =null;
    calLoad();
}

function saveEvent() {
    if(eventTitleInput.value) {
        eventTitleInput.classList.remove('error');

        events.push({
            date:clicked,
            title:eventTitleInput.value,
        });
        localStorage.setItem('events', JSON.stringify(events));
    } else {
        eventTitleInput.classList.add('error');
    }   
}
function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}
function changeMonth() {
    document.getElementById('next').addEventListener('click', () => {
        ctrMonth++; //increase this and it'll add a month 
        calLoad(); //call next month calendar
    });

    document.getElementById('prev').addEventListener('click', () => {
        ctrMonth--; //decrease 
        calLoad(); //call next month calendar
    });

    document.getElementById('saveBtn').addEventListener('click', saveEvent);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('deleteBtn').addEventListener('click', deleteEvent);
    document.getElementById('closeBtn').addEventListener('click', closeModal);
}
changeMonth();
```

## 20210411 중간 점검
- 요구사항 중 5번 삭제 : 버튼의 필요성 찾지 못함. 여타 다른 웹사이트처럼 달력이 부가 기능이라면 재로딩할 필요없도록 넣는 것이 좋을 듯 하나, 여기서는 반드시 필요한 기능은 아니라 판단.
- 요구사항 중 4번 보류 : 오류가 발생해 확인 중. 
