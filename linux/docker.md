# docker 설치 및 세팅
> build 후 서버에 올리는 과정을 배우며 발생한 오류, 해결법, 도커란 무엇인지

## docker란
> 면접 때 도커를 써 본 적 있냐는 질문을 받았었다. 당연히 없었고...   
> 사실 도커가 뭔지도 제대로 몰랐다. 기본적인 개념을 잡고 넘어가야 할 듯 싶어 좀 더 알아보고 정리.

### 도커의 등장 배경
* 하나의 서버에 여러 개 프로그램을 설치하는 것도 문제
* 서로 사용하는 라이브러리가 다른 경우 || 동일 포트를 사용하는 경우
* 개발 주기는 짧아지고, 배포는 더 자주 이루어지는데 관리는 더욱 어려워짐

### 그래서 도커란?
`Docker is an open platform for developing, shipping, and running applications` 이라고 docker의 공식문서에는 적혀있다.    
Linux 컨테이너를 만들고 사용할 수 있도록 하는 기술이다.   
컨테이너를 만든다는 것은,
* 규격화
* 추상화
* 운송(shipping) -- 쉽게 옮길 수 있는 측면

이런 것을 가능케하면서 기존의 어려움을 해결할 수 있는 것이다.   