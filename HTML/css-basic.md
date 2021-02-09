## 웹페이지에 css를 삽입하는 2가지 방법   
1. <style> </style> 태그를 쓴다.   
```
<style>
  a {
    color:black;
  }
</style>
```

2. html의 style 속성을 쓴다.   
```
<li><a href="index.html" style="color:blue">HTML</a></li>
```

## selector, declaration, property - 선택자, 선언, 속성   
선언으로 여러가지를 제어할 수 있다.   

1. 전체를 제어
```
<style>
  a { <!-- 선택자 -->
    color:black; <!--속성과 속성의 값-->
    text-decoration: none;  <!-- 선언. 웹페이지 전체의 a태그에 '밑줄'이 없어진다. -->
  }
</style>
```
2. 하나에 예외를 둘 때   
```
<li><a href="index.html" style="color:blue;text-decoration:underline">HTML</a></li>
```
