# CSS의 그리드   
CSS에서는 그리드라는 일종의 레이아웃을 만들 수 있도록 기능을 제공한다.   
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      #grid{
        border:5px solid skyblue;
        display:grid;
        grid-template-columns: 150px 1fr; /* 1fr은 자동으로 화면에 맞추어 조절되게 하는 단위.*/
      }
      div {
        border:5px solid #0b2c54; 
      }
    </style>
  </head>
  <body>
    <div id="grid">
      <div>NAVIGATION</div>
      <div>ARTICLE</div>
    </div>
  </body>
</html>

```
div는 block level이기 때문에 여러 개 사용시 자동으로 줄 바꿈이 된다.   
span은 div와 비슷한 기능이나, inline이기 때문에 줄바꿈이 되지 않는다.   

작년 겨울에 아무것도 배우지 않고 무작정 블로그를 만들어 보려다가 발견한 건,    
#000000과 같이 헥스 색상 코드로도 나타낼 수 있다는 점이었다.   
보다 정확한 색상을 나타내려면 blue, red 등을 사용하는 것보다 [헥스 코드](https://www.google.com/search?sxsrf=ALeKk00T0yYvBPxZXe7HW15CEKuVLZU4Dg%3A1613219713739&ei=gccnYODPLPuQr7wPgPO6yAs&q=%23000000&oq=%23&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQkxVYkxVgqjBoAHAAeACAAckBiAGPA5IBBTAuMS4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz) 를 사용하는 게 나을 듯 싶다.
