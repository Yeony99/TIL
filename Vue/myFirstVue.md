# Vue 시작하기
자바스크립트를 배우고 리액트를 주로 사용하였다. 하지만 리액트는 jsx로 파일을 구성해 기본 html에서 사용하는 style 등의 태그를 사용할 수 없었다.    
그래서 프론트단에서 또 많이 사용하는 Vue 프레임워크를 사용해보고자 했다.   

## Vue랑 React가 다른 점
1. 코드 형태
리액트는 `jsx`(JavaScript XML) 형태로 코드를 작성한다. 이 말은 코드 작성에 있어 **자바스크립트만** 사용한다는 것이다. 리액트는 가상 돔을 이용해 UI 화면 단에서 바뀐 부분만을 가져와 로딩하는 방식을 차용하는 `UI 라이브러리`이다.   
반면 뷰는 자바스크립트 `프레임워크`이다. 이는 코드를 프레임에 맞춰서 개발한다는 것인데, 리액트처럼 JS만 사용하는 것이 아니라 HTML, CSS, JS의 코드 영역을 분리한다. 마치 기존에 알고 있던 웹같다...!    

## Vue 시작
1. install vue-cli
뷰를 global로 설치한다.
```
> npm install --global vue-cli
```

2. `webpack` template을 이용해 새로운 프로젝트 생성
```
> vue init webpack [project_name]
```
다운로드가 다 되고 나면 project 이름과 author 등을 물어보고, 각종 Vue build에 관한 설정을 할 수 있다. 
![vueStart](https://user-images.githubusercontent.com/76241233/123222923-61607500-d50b-11eb-8dbb-eedabb0af1b1.png)

3. npm install
```
> cd [project_name]
> npm install
```

4. 실행
```
> npm run dev
```

5. 결과
localhost:8080으로 접속해보면 아래와 같이 Vue 프레임워크가 실행된 것을 볼 수 있다.
![Vue](https://user-images.githubusercontent.com/76241233/123223588-f9f6f500-d50b-11eb-97c4-38a1ae7f3297.png)