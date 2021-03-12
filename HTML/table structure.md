# table
기본적인 테이블 구조

## table 만들기

```<table>``` : 테이블 선언   
```<thead>``` : 열의 제목으로 구성된 행의 집합. tbody보다 먼저 선언되어야 한다. 테이블 요소에서 한번만 사용 가능.   
```<tbody>``` : 표의 본문(값) 영역. 여러번 선언 가능   
```<th>``` : 테이블 헤더   
```<tr>``` : 테이블의 행(row)
```<td>``` : 테이블의 값(date)
  
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
  <title>Table</title>
</head>

<body>
  <h1>hi</h1>
  <table> 
    <thead>
      <tr>
        <th>name</th>
        <th>city</th>
        <th>nationality</th>
        <th>old</th>
        <hr>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yeony</td>
        <td>Seoul</td>
        <td>South Korea</td>
        <td>23</td>
      </tr>
      <tr>
        <td>Anna</td>
        <td>Incheon</td>
        <td>South Korea</td>
        <td>21</td>
      </tr>
      <tr>
        <td>Nayeon</td>
        <td>YongIn</td>
        <td>SK</td>
        <td>22</td>
      </tr>
    </tbody>

  </table>

  <h2>ver2</h2>
  <table>
    <thead>
      <tr>
        <th rowspan="2">name</th>
        <!--rowspan에서 설정한 값부터 시작.-->
        <th>city</th>
        <th>Average</th>
        <hr>
      </tr>
      <tr>
        <th>시군</th>
        <th>평균</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yeony</td>
        <td>Seoul</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Anna</td>
        <td>Incheon</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Nayeon</td>
        <td>YongIn</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

![table](https://user-images.githubusercontent.com/76241233/110961264-f1cadd80-8392-11eb-8811-ed28c5df20b2.png)
