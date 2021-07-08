# CSS 기본

## 단위
* em : `1em = 부모의 폰트 크기`
  * 부모 폰트 크기가 16px -> 1em = 16px
* rem : `root em`으로, 최상위 폰트 사이즈를 기준으로 하는 단위
  * root element는 `<html>`요소이다.
  * `<html>` 폰트 사이즈가 12px이면, 1rem = 12px
* vh/vw : `viewport`를 기준으로 하는 height, width
  * 브라우저의 **화면**의 크기에 따라 결정된다.
  * width가 1200px인 경우, 100vw = 1200px
* vmin/vmax : `viewport`를 기준으로 width, height 값에 따라 최소/최대값을 지정할 수 있다.
  * `height: 100vmin` 형식으로 작성.
* ex : 현재 폰트의 `'x' 높이값`(소문자 x) 혹은 `em`의 절반 값.
  * 폰트의 중간 지점을 알아내기 위해 자주 사용.
  * 참고 👉🏻 [The Anatomy of Web Typography](https://webdesign.tutsplus.com/articles/the-anatomy-of-web-typography--webdesign-10533)
* px : 픽셀. 모니터 해상도를 나타낼 때 쓰인다.

##