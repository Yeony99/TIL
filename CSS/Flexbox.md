# Flexbox

## Flexbox
Flexbox는 뷰포트나 요소의 크기가 명확하지 않고, 지속적으로 변하더라도 자동적으로 요소를 배치, 정렬할 수 있도록 하는 CSS3의 레이아웃 방식이다.   

![box](https://user-images.githubusercontent.com/76241233/113468991-e09e5980-9484-11eb-8397-dab98624c190.png)   

* HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="flexbox.css">
    <title>Document</title>
</head>
<body>
    <h1>Flexbox</h1>
    <section id="container">
        <div style="background-color: #a2d2ff;"></div>
        <div style="background-color: #bde0fe;"></div>
        <div style="background-color: #ffafcc;"></div>
        <div style="background-color: #ffc8dd;"></div>
        <div style="background-color: #cdb4db;"></div>

    </section>
</body>
</html>
```
* CSS
```
body {
    font-family: 'Segoe UI';
}

h1 {
    text-align: center;
}

#container {
    background-color: black;
    width: 90%;
    height: 500px;
    margin: 0 auto; /*center*/
    border: 5px solid black;
}

#box div {
    width: 100px;
    height: 100px;
}
```
flex 상태를 만드는 것은 간단하다.   
다른 요소를 포함하는 부모 요소(#container)에 display : flex; 효과를 주면, 
![display:flex](https://user-images.githubusercontent.com/76241233/113469110-f3655e00-9485-11eb-9d79-0b4cf6e4050e.png)
이처럼 모든 div 요소가 가로로 정렬된다.   
#container는 부모요소, #container div 는 flex-item 요소가 된다.

## flex-container attribute 
* flex-direction
* justify-content
* flex-wrap
* align-items
* align-content
위 5가지가 **container**, 즉 부모에 적용할 수 있는 속성이다.

### flex-direction
flex-direction은 말 그대로 flex의 방향을 설정할 수 있다.   

* flex-direction : row;
  - 위에는 이미 row(행)으로 정렬되어 있기 때문에 row는 변화가 없다.   
* flex-direction : column;
![flex-direction:column](https://user-images.githubusercontent.com/76241233/113468991-e09e5980-9484-11eb-8397-dab98624c190.png)   
* flex-direction : column-reverse;
![flex-direction:column-reverse](https://user-images.githubusercontent.com/76241233/113469523-26f5b780-9489-11eb-973c-fab032c04571.png)
* flex-direction: row-reverse;
![flex-direction:row-reverse](https://user-images.githubusercontent.com/76241233/113469433-5952e500-9488-11eb-9e9d-8efa43a90756.png)

---

### justify-content
부모 안에 있는 자식 요소들에 대한 정렬을 설정할 수 있다.
* justify-content: center;
![justify-content: center](https://user-images.githubusercontent.com/76241233/113469618-de8ac980-9489-11eb-862d-3f70de44624a.png)

* justify-content : flex-start;
![justify-content : flex-start](https://user-images.githubusercontent.com/76241233/113469653-4e994f80-948a-11eb-823e-6941a3dee7c1.png)

* justify-content: flex-end;
![justify-content: flex-end](https://user-images.githubusercontent.com/76241233/113469665-6a9cf100-948a-11eb-872f-609148b436d7.png)

* justify-content: space-around;
  - 자식 요소 하나하나에 일정한 공백을 둔다. 요소(공백)(공백)요소와 같다.
![justify-content: space-around](https://user-images.githubusercontent.com/76241233/113469684-8dc7a080-948a-11eb-9840-af89f12f1f36.png)

* justify-content : space-between
  - 자식 요소가 부모 container를 가득 채우도록 공백이 생긴다.
![justify-content : space-between](https://user-images.githubusercontent.com/76241233/113470322-c158f980-948f-11eb-90e5-a2ea11973f67.png)

* justufy-content : space-evenly
  - 자식 요소의 좌우 공백을 같게 설정한다.
![justufy-content : space-evenly](https://user-images.githubusercontent.com/76241233/113470374-04b36800-9490-11eb-920f-992ecfc0bb72.png)

---

### flex-wrap
wrap은 wrapping하는 설정이다. 부모 크기보다 자식이 더 클 때, 다음 단락에 이어서 나열해주는 속성이다.
wrap 설정을 적용할 만큼 div의 크기가 크지 않아 css 속성을 바꾸었다.
```
#container {
    background-color: black;
    width: 90%;
    height: 500px;
    margin: 0 auto; /*center*/
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

#container div {
    width: 200px;
    height: 200px;
}
```
위와 같이 flex-direction을 수직정렬하고 width와 height를 늘리면, flex-item(div)의 높이가 200px이 유지되지 못하고 직사각형이 된 것을 확인할 수 있다.

* flex-wrap : nowrap;
  -wrapping하지 않은 상태. flex-item의 크기가 flex-container보다 커져도 줄바꿈하지 않고, 일렬로 배치한다.

* flex-wrap : wrap;
  - flex-item의 본래 속성이 flex-container를 벗어났을 때 **줄바꿈**하는 속성이다.
  - white-space 속성과 유사하다.
(참고를 위해 div요소에 번호를 주었다.)
![flex-wrap : wrap](https://user-images.githubusercontent.com/76241233/113470671-565cf200-9492-11eb-8bea-c5a3fa90ba00.png)

* flex-wrap : wrap-reverse;
![flex-wrap : wrap-reverse](https://user-images.githubusercontent.com/76241233/113470698-899f8100-9492-11eb-9fea-672757e333ef.png)

예시로는 flex-direction:column으로 설정해놓았기 때문에 요소가 세로 -> 가로로 넘어간다.   
width를 줄이고 flex-direction:row로 설정한 후, flex-wrap:wrap 설정을 주면
![가로](https://user-images.githubusercontent.com/76241233/113470780-0b8faa00-9493-11eb-98ec-c9474b48ef4e.png)

이렇게 123 // 45 로 정렬되는 것을 볼 수 있다.


---
### align-items
container 속 자식 요소들을 정렬하는 속성이다.   

```
#container {
    background-color: black;
    width: 90%;
    height: 500px;
    margin: 0 auto; /*center*/
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
```
* align-items : center;
![align-items : center](https://user-images.githubusercontent.com/76241233/113471208-e486a780-9495-11eb-88b8-33a3cf554102.png)

* align-items : baseline;
![align-items : baseline](https://user-images.githubusercontent.com/76241233/113471220-0122df80-9496-11eb-991c-6329274d733d.png)

* align-items: flex-end;
  - 만약 wrap 속성을 같이 주게 된다면, 그것에 따라서 flex-end 와 flex-start 속성이 바뀔 수 있다.
![align-items: flex-end](https://user-images.githubusercontent.com/76241233/113471236-2879ac80-9496-11eb-9075-7334dbdbd44c.png)


---
### align-content
flex-wrap : wrap 속성일 경우, flex-item은 다음 줄로 넘어간다. 이때 여러 줄이 된 item들을 정렬하는 속성이다.   
기본값을 stretch로, 높이를 채운다.   
CSS를 다시 설정했다.
```
#container {
    background-color: black;
    width: 90%;
    height: 500px;
    margin: 0 auto; /*center*/
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
}
```

* align-content : center;
  - 모든 content들이 container의 가운데에 모인다. 
![align-content:center](https://user-images.githubusercontent.com/76241233/113471570-37615e80-9498-11eb-8601-d9ad05f9e7d5.png)

* align-content: space-between;
  - justify의 between 속성처럼, container를 꽉 채우도록 공백이 생긴다.   
![align-content: space-between](https://user-images.githubusercontent.com/76241233/113471622-8a3b1600-9498-11eb-8c52-1f256be40a76.png)

* align-content : space-around;
![align-content : space-around](https://user-images.githubusercontent.com/76241233/113471645-aa6ad500-9498-11eb-8512-1664548e104b.png)


+) 
align-self 속성을 div 에 줄 수 있다.
```
#container {
    background-color: black;
    width: 90%;
    height: 500px;
    margin: 0 auto; /*center*/
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

#container div {
    text-align: center;
    font-size: 35px;
    width: 200px;
    height: 200px;
}

div:nth-of-type(2n) {
    align-self: flex-start;
}

div:nth-of-type(2n-1) {
    align-self: flex-end;
}
```
위와 같이 작성하면 이런 결과가 나온다.
![align-self](https://user-images.githubusercontent.com/76241233/113471813-ece0e180-9499-11eb-934e-3e0a7732ed78.png)


---

## flex-item attribute 
flex-item에 적용할 수 있는 속성들이다.

* flex-basis
* flex-grow
* flex-shrink
* flex

### flex-basis
먼저 CSS 설정을 바꾼다. height에 준 크기를 주석처리하면, 좀더 인터랙티브하게 각 요소가 화면에 맞게 조정된다.
```
#container {
    background-color: black;
    width: 90%;
    /* height: 500px; */
    margin: 0 auto; /*center*/
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

#container div {
    text-align: center;
    font-size: 35px;
    width: 100px;
    height: 100px;
}
```

* flex-basis
  - flex-item의 기본 크기를 결정하는 속성이다. 기본값은 auto.
  - width, height의 크기를 설정하는 모든 단위를 사용할 수 있다(px, %, em, rem ...)
  - flex-direction이 column인지, row인지에 따라 늘어나는(줄어드는) 방향이 결정된다(column : 세로 / row : 가로)   
  - `flex-basis:0`은 absolute flex item이다. flex-container를 기준으로 item의 크기가 결정된다.
  - 단, flex-basis속성을 0으로 선언할 경우에는 `flex-basis:0px` 혹은 `flex-basis:0%`와 같이 단위를 명시해야 한다. 
   
`flex-basis: 200px;`는 flex-item의 기본 크기를 300px로 설정하겠다는 의미이다.   
따라서 div의 크기가 늘어난다. 
![flex-basis](https://user-images.githubusercontent.com/76241233/113477857-f7ae6d00-94bf-11eb-91ab-bef3354ce5cd.png)

* flex-grow
  - flex-item의 확장을 결정한다. 0 혹은 양의 정수를 값에 할당하여 사용한다.   
  - `flex-grow:0`이면 container의 크기가 커지더라도 item의 크기는 고정된다.
  - `flex-grow:1`(혹은 1이상의 양의 정수)이면 container의 크기가 커질 때 item 또한 container에 꽉 맞도록 크기가 맞춰진다.
  
![flex-grow:1](https://user-images.githubusercontent.com/76241233/113478010-1e20d800-94c1-11eb-81a5-d9e769ad3195.png)
* flex-shrink
  - flex-item의 축소를 결정한다. 0 혹은 양의 정수를 값에 할당하여 사용한다.
  - 기본값은 1이다.
  - `flex-shrink:0`이면 container의 크기가 item 크기보다 작아져도 item의 크기는 원래 크기로 고정된다.
  - `flex-shrink:1`(혹은 1이상의 양의정수)이면 container의 크기가 작아져도 container의 크기에 맞춰 줄어든다


flex-basis 속성을 주지 않고, flex-grow와 flex-shrink를 적용하였다.
![flexbox](https://user-images.githubusercontent.com/76241233/113478237-94720a00-94c2-11eb-91d3-d38f0c422857.gif)

* flex 
  - 위에 살펴본 flex-basis, flex-grow, flex-shrink를 축약해 표현할 수 있는 속성이다.
  - `flex : 1, 1, 0`과 같은 형식으로 작성한다. 
  - 순서대로 grow, shrink, basis 형식이다. 
