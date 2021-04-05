# 정규 표현식
문자열에서 나타나는 특정 문자조합과 대응시키기 위해 사용되는 패턴.
> 정규식으로 할 수 있는 것?
* 특정 패턴과 일치하는 문자열 검색, 치환, 추출 가능

## 문자 클래스 패턴
* . 
  - \n, \r 등을 제외한 모든 단일 문자와 일치
* \d
  - 하나의 숫자 0-9와 동일
  - \d{1,3} : 1~3자리 숫자
* \D
  - \d 제외 문자
  - \d와 반대로 동작. 
  - 숫자가 아닌 문자와 일치. 
  - ^0-9와 동일

<table>
  <tr>
    <td>문자</td>
    <td>내용</td>
  </tr>
  <tr>
    <td> . </td>
    <td> \n, \r 등을 제외한 모든 단일 문자와 일치 </td>
  </tr>
  <tr>
    <td> \d </td>
    <td> 하나의 숫자 0-9와 동일<br> \d{1,3} : 1~3자리 숫자 </td>
  </tr>
  <tr>
    <td> \D </td>
    <td> \d 제외 문자<br>\d와 반대로 동작.<br>숫자가 아닌 문자와 일치. <br>^0-9와 동일 </td>
  </tr>
  <tr>
    <td> \w </td>
    <td> 하나의 영문자+숫자와 밑줄과 동일. <br> A-Za-z0-9 와 일치 </td>
  </tr>
  <tr>
    <td> \W </td>
    <td> \w 제외 문자<br> ^A-Za-z0-9 </td>
  </tr>
  <tr>
    <td> \t, \v </td>
    <td> 탭 / 수직탭 </td>
  </tr>
  <tr>
    <td> \r, \n, \f </td>
    <td> carrage return, 줄바꾸기, 페이지 나누기 </td>
  </tr>
  <tr>
    <td> [\b] </td>
    <td> backspace와 일치 </td>
  </tr>
  <tr>
    <td> c[A-Z] </td>
    <td> ctrl 키와 일치. <br> cS : ctrl + S 와 일치 </td>
  </tr>
  <tr>
    <td> c[A-Z] </td>
    <td> ctrl 키와 일치. <br> cS : ctrl + S 와 일치 </td>
  </tr>
  
## etc
`<form>`태그로 접근할 경우
1) form 태그에 name 속성이 있을 경우
```
var f = document.formName;
```
2) form 태그에 name 속성이 없을 경우
배열로 접근한다.
```
var f = document.forms[0]; 
```

  
## 정규 표현식 활용 예시
* 아이디 (영어+숫자만 가능, 5~10자 사이)
```
!/^\w{5,10}$/.test(f.userId.value)
```
test 함수 안에 들어간 것은 `(form 태그 접근 변수).(접근할html요소의 name).value`

* 비밀번호 (영문자, 하나 이상의 숫자 or 특수문자가 포함된 5~10자 사이)
```
!/^(?=.*[a-z])(?=.*[~!@#$%^&*-+=]|.*[0-9]).{5,10}$/i.test(f.userPwd.value)
```

* 이름 (한글 2~5자이거나 영문 이름은 (2~10자)(공백)(2~10자)
```
!/^([가-힣]{2,5})|([a-zA-Z]{2,10}\s[a-zA-Z]{2,10})$/.test(f.userName.value)
```

* 학번 (4~10자 사이 숫자)
```
!/^\d{4,10}$/.test(f.hakbeon.value)
```
