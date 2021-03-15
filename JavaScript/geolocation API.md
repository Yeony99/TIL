# How to get a user's location in JS 자바스크립트로 사용자의 위치 가져오기
> Geolocation API

## geolocation API
* 사용자의 위치정보를 반환한다.

![위치정보](https://user-images.githubusercontent.com/76241233/111158812-d1da2a80-85db-11eb-8497-103b3f82b3bb.png) ![Coords](https://user-images.githubusercontent.com/76241233/111159173-2aa9c300-85dc-11eb-9f19-89bf63c25027.png)
  - 크롬 f12키 -> Application 에서 확인




## 코드
```
const COORDS = 'coords' // 좌표

function save(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function geoSuccess(position) { // 위치정보 수락했을 때
  const latitude = position.coords.latitude; // 위도
  const longitude = position.coords.longitude; // 경도
  const coordsObj= {
    latitude,
    longitude
  };
  save(coordsObj); // 사용자의 위치 정보 -> save 함수 : localStorage에 저장
}

function geoError() { // 위치 정보 수락하지 않았을 때
  console.log('Cant access Geo Location');
}

function askForCoords() { // 사용자의 브라우저에 geolocation 지원 여부 확인
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const returnCoords= localStorage.getItem(COORDS); // localStorage에 저장된 좌표 get
  if(returnCoords === null){ // 좌표값이 null이면
    askForCoords(); // 위치정보수락 요청 보내기
  }
}

function exec() {
  loadCoords();
}
exec();
```
