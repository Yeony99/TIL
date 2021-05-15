# CORS
> Cross-Origin Resource Sharing

## CORS란?
다른 도메인에 리소스를 요청하기 위한 수단.   

`CORS`는 **서로 다른 origin**을 가진 사이트 사이에서 `origin(host)`를 가로질러, HTTP 요청을 받아 자원을 공유할 수 있게끔 하는 요청과 응답 과정이다.    

* 많은 웹 어플리케이션은 css, 폰트, 이미지 등의 resource를 댜양한 출처에서 갖고 온다. 이때 완전히 다른 도메인, 프로토콜, 포트에서 리소스를 요청한다. 이때 cross-origin HTTP요청을 실행하는 것이다.    
* 브라우저는 기본적으로 보안상 이유로 cross-origin HTTP요청을 제한한다.   
* same-origin request은 항상 허용된다. (SOP, Same Origin Policy) 말그대로 같은 출처인 HTTP요청만. 
    - 주로 자바스크립트에 의한 데이터 접근에 해당하는 정책.
    - HTML 태그로 요청하는 것은 SOP으로 제한되지 않는다. (ex.`<img>`, `,<style>`, `<script>`)
<br/>
여기서 origin(출처)은 도메인과는 다른 개념인데, 프로토콜, 포트번호, 도메인이 포함된 것이 origin이다.   
포트가 다른 경우에도 다른 origin이다.   

* origin : `https://www.google.com/PORT`
    - `https://` : protocol
    - `google.com` : domain

## CORS 동작 방식 - 3가지 시나리오
1. Simeple Request (단순 요청)
CORS의 preflight를 trigger하지 않고 단순 요청하는 것. 이하는 조건(모두 충족)
* `GET`, `HEAD`, `POST` 중 하나에 해당하는 HTTP 메소드
* 조건 : 이하와 같은 Request 헤더만 존재할 경우
    - Accept : 서버에 자원 요청한 클라이언트가 이해가능한 컨텐츠 타입이 무엇인지 알려준다. 
    - Accept-Language : 어떤 언어를 클라이언트가 이해할 수 있는지, 지역 설정 중 어떤 것이 선호되는지 알려준다. (프로그래밍 언어 x)
    - Content-Language : 사용자가 선호하는 언어에 따라 사용자를 구분하게 해준다. 단, 선호하는 언어로 쓰여진 것을 보장하진 않는다. 지정되지 않았으면 모든 사용자를 위해 만들어진 내용이라 간주.
        - 예를 들어 `Content-Language: kr-Ko`일 경우일지라도, 내용이 독일어로 작성되었을 가능성이 있다. 한국인 대상으로 독일어를 가르치는 페이지일 수도 있기 때문.
    - Content-Type : 아래 값들만 허용
        - application/x-www-form-urlencoded
        - multipart/form-data
        - text/plain
* 요청에 `ReadableStram`객체가 사용되지 않은 경우

2. preflight 요청
`OPTIONS`메소드를 통해 다른 도메인 리소스에 HTTP요청을 보낸다. 일종의 테스트 요청. 실제 전송이 안전한지 미리 확인한다.   

* 조건 
    - Content-Type 
        - application/xml
* 리다이렉트
    - 모든 브라우저가 preflight 후 리다이렉트를 지원하지는 않음.
    - 
3. Credentialed 요청 (인증정보를 포함한 요청)
Credential requests는 HTTP Cookies와 HTTP Authentication 정보를 인식한다.   
`CORS` 기본 방법이라기보다는, 다른 origin 간에서 통신을 보완하고자 할 때 사용.   
기본적으로 Cross-site에 대한 XMLHttpRequest 혹은 FetchAPI 요청에서 브라우저는 인증에 대한 정보를 보내지 않기 때문에, 특정한 정보를 담을 수 있도록 옵션을 설정해주어야 한다. 그것이 바로 `Credentials`옵션.   

* Credentials 옵션
    - same-origin(기본값) : 같은 출처간 요청에만 인증정보 담기 가능
    - include : 모든 요청에 인증정보 담기 가능
    - omit : 모든 요청에 인증정보 담지 않음

## reference
[Cross-Origin Resource Sharing (CORS) - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS])
[CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)