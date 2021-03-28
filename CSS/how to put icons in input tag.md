# input 태그 안에 icon 넣기

## background-image css element
* style의 background 이미지를 이용해 input 태그 안에 이미지를 삽입할 수 있다.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #search {
            background-image: url(https://raw.githubusercontent.com/Yeony99/icons/d2880565e8804a3cbf1086e9d7e9e10e85ae9b79/magnifying.svg);
            background-size: 1rem;
            background-repeat: no-repeat;
        }
    </style>
</head>

<body>
    <div>
        <h3>input에 이미지 삽입 : background-image</h3>
        <input type="search" name="search" id="search" autocomplete="off">
    </div>
</body>

</html>
```
* background-repeat : no-repeat;
  - background에 이미지를 삽입했을 때, 배경이 삽입될 div 등의 크기가 이미지보다 크면 패턴처럼 자동 반복된다.
  - no-repeat을 주면 한번만 삽입된다.

여기까지는 문제 없는 듯 보이나, 막상 input태그에 입력해보면 커서와 입력된 단어가 배경이미지랑 겹쳐서 나타난다.   
이것은 style 태그에 적절한 padding을 주면 해결된다.  
```
<style>
        #search {
            background-image: url(https://raw.githubusercontent.com/Yeony99/icons/d2880565e8804a3cbf1086e9d7e9e10e85ae9b79/magnifying.svg);
            background-size: 1rem;
            background-repeat: no-repeat;
            padding-left: 30px;
        }
 </style>

```

## 결과
![iconEx](https://user-images.githubusercontent.com/76241233/112745303-40f34e00-8fe2-11eb-88ea-ac3651cc1735.png)


## 사용 아이콘
[나연의 github - icons](https://github.com/Yeony99/icons/blob/main/magnifying.svg)
