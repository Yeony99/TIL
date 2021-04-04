# Media Query 미디어 쿼리 사용
## 미디어 쿼리의 사용
반응형 웹을 만들기 위해 사용한다. 크롬의 개발자 도구(f12)로 확인할 수 있는 모바일 기기의 크기 등,   
웹 사이트를 각 단말에 맞게 적용하기 위해 사용한다.   

## 사용방법

1) css 내부 삽입
()괄호 안에 넣은 조건이 될 때 웹이 유동적으로 변한다.
```
<style>
@media (max-width:700px) {
  .container {
    margin: 0;
    padding 0;
  }
}
```

2) 링크 연결
```
<link rel="stylesheet" media = "mediatype [and|not|only|,] media feature)" href="*.css">
```

## 연산자
* and 
  - 여러 미디어 특징을 하나로 결합
* ,
  - 개별적인 미디어 쿼리

* not
  - 전체 미디어 쿼리를 부정
* only 
  - 미디어 쿼리를 지원하는 클라이언트만 미디어 쿼리를 해석하라는 명령어. 생략 가능.
  - 기본값은 only로 주어지기 때문에 일반적으로 명시해 작성하지 않음.


### Media Queries template
구독하고 있는 css-tricks에 미디어 쿼리에 대한 글이 있었다. 꾸준히 업데이트 되는 템플릿.
[Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
