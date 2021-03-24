# CSS table 스타일 적용

## CSS style
* CSS는 HTML 파일 안에서 style 태그로 각 요소의 스타일을 설정할 수 있다.

### 적용되는 요소

* \* {} : 전체
* body {} : body 태그 요소 전체
* h1 {} : h1 태그 요소 전체
* #idName {} : idName라는 id를 가진 요소
* .className{} : className라는 class를 가진 요소
* #idName #idName 하위요소 {} : id를 가진 태그와 그것의 자식 태그 요소에 한 번에 적용

### CSS로 할 수 있는 것들
* 레이아웃, 정렬, 색상 적용, 폰트 적용 등...


## 예시

* 결과
![ex](https://user-images.githubusercontent.com/76241233/112330037-0ac08080-8cfb-11eb-9d4a-c1ec538f4e10.png)

* 코드
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
        }

        main {
            width: 600px;
            margin: 30px auto 10px;
        }

        h3 {
            margin: 0 0 10px 0;
        }

        .btn {
            border: 1px solid gray;
            border-radius: 4px;
            background-color: white;
        }

        #write {
            float: right;
        }

        #t1 {
            margin: 10px 0 0 0;
            font-size: 13px;
            width: 600px;
        }

        #t1,
        #t1 td {
            text-align: center;
            border: 1px solid gray;
            border-left: none;
            border-right: none;
            font-size: 13px;
            border-spacing: 0;
            border-collapse: collapse;
            height: 30px;
        }

        #t1 th {
            height: 30px;
            background-color: #72a7e8;
            color: white;
        }

        .title {
            text-align: left;
            width: 300px;
        }
    </style>
</head>

<body>
    <main>
        <h3>
            <span>| </span>게시판
        </h3>
        <div>
            <select class=btn>
                <option>제목</option>
                <option>작성자</option>
                <option>글내용</option>
            </select> <input class=btn type="text">
            <button class=btn>검색</button>
            <button class=btn id="write">글쓰기</button>
        </div>
        <table id=t1>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
            </tr>
            <tr>
                <td>2</td>
                <td class="title">제목2...</td>
                <td>스프링</td>
                <td>2015-10-10</td>
                <td>10</td>
            </tr>

            <tr>
                <td>1</td>
                <td class="title">제목1...</td>
                <td>홍길동</td>
                <td>2015-10-10</td>
                <td>5</td>
            </tr>
        </table>
        <div style="text-align: center; margin: 5px auto;">
            <h6>1 2</h6>
        </div>
    </main>
</body>

</html>
```
