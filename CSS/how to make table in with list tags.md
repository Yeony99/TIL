# list태그를 이용해 table 만들기
## table 태그
> 테이블 태그 사용은?   

table 태그를 이용하면 테이블을 간편하게 만들 수 있다. 그럼에도 list 태그를 이용해 테이블을 만드는 이유가 있다. **웹 표준**에 어긋난다는 말을 들었기 때문이다. 찾아보니, 기존 데스크탑을 이용하던 시대에서 세로로 긴 화면의 기기로 주 사용 기기가 바뀌다보니, table 태그 사용을 덜 한다는 것 같다.   

ul 태그로만 만들어본 소감(?)은... table 태그보다는 더 복잡한 듯 싶지만, 오히려 style 적용하기에는 list 태그 이용이 더 편리한 것 같다.

## 코드
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>

    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 맑은 고딕, 돋움, sans-serif;
            font-size: 15px;
        }

        .btn {
            color: #333;
            font-weight: 500;
            border: 1px solid #ccc;
            background-color: #fff;
            text-align: center;
            padding: 3px 10px;
            border-radius: 5px;
            margin: 0 auto;
        }

        .btn:hover,
        .btn:focus,
        .btn:active {
            background-color: #e6e6e6;
            border-color: #adadad;
            color: #333;
            cursor: pointer;
        }

        .board {
            margin: 30px auto;
            width: 600px;
        }

        .board .board-article {
            margin: 10px auto 0;
            border-top: 3px solid #507cd1;
            border-bottom: 3px solid #507cd1;
        }

        .board ul {
            clear: both;
            list-style: none;
            padding: 0;
        }

        .board ul li {
            float: left;
            font-size: 13px;
        }

        .board .col-title {
            width: 90px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            background: #eee;
        }


        .board .bottom-line {
            height: 35px;
            line-height: 35px;
            border-bottom: 1px solid #ccc;
            clear: both;
        }


        .lala {
            margin: 0 auto;
            text-align: center;
        }

        .put {
            width: 30%;
            margin: 0 0 0 10px;
            height: 70%;
            border-radius: 3px;
            border: 1px solid rgb(143, 143, 143);
        }

        #select {
            margin: 0 0 0 10px;
            width: 12%;
            height: 70%;
            border-radius: 3px;
            border: 1px solid rgb(143, 143, 143);
        }

        #tel {
            margin: 0 0 0 10px;
            width: 10%;
            height: 70%;
            border-radius: 3px;
            border: 1px solid rgb(143, 143, 143);
        }

        .address {
            width: 83%;
            margin: 0 0 0 10px;
            height: 35%;
            border-radius: 3px;
            border: 1px solid rgb(143, 143, 143);

        }

        #add {
            height: 70px;
            line-height: 35px;
        }
    </style>

</head>

<body>
    <div class="board">
        <div class="board-title">
            <h3>
                <span>|</span> 회원 가입
            </h3>
        </div>
        <div class="board-article">

            <ul class="bottom-line">
                <li class="col-title">아 이 디</li>
                <input type="text" class="put">
            </ul>

            <ul class="bottom-line">
                <li class="col-title">패스워드</li>
                <input type="password" class="put">
            </ul>

            <ul class="bottom-line">
                <li class="col-title">패스워드 확인</li>
                <input type="password" class="put">
            </ul>

            <ul class="bottom-line">
                <li class="col-title">이 름</li>
                <input type="text" class="put">
            </ul>

            <ul class="bottom-line">
                <li class="col-title">생년월일</li>
                <input type="date" class="put">
            </ul>
            <ul class="bottom-line">
                <li class="col-title">이메일</li>
                <select name="" id="select">
                    <option value="sel">선 택</option>
                    <option value="naver">naver.com</option>
                    <option value="google">gmail.com</option>
                    <option value="kakao">kakao.com</option>
                    <option value="nate">nate.com</option>
                    <option value="putit">직접입력</option>
                </select>
                <input type="email" class="put">
                <span> @</span>
                <input type="email" class="put">
            </ul>
            <ul class="bottom-line">
                <li class="col-title">전화번호</li>
                <select name="" id="tel">
                    <option value="sel">선 택</option>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="012">012</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                </select>
                <input type="text" class="put">
                <span> -</span>
                <input type="email" class="put">
            </ul>
            <ul class="bottom-line">
                <li class="col-title">우편번호</li>
                <input type="text" class="put">
                <button class="btn">우편번호검색</button>
            </ul>
            <ul class="bottom-line" id="add">
                <li class="col-title" id="add">주소</li>
                <input type="text" class="address">
                <input type="text" class="address">
            </ul>
            <ul class="bottom-line">
                <li class="col-title">패스워드</li>
                <input type="text" class="put">
                <li class="col-content" style="float: right;">
            </ul>
        </div>
    </div>
    <div class="lala">
        <button type="button" class="btn">회원가입</button>
        <button type="reset" class="btn">다시입력</button>
        <button type="button" class="btn">가입취소</button>
    </div>
    </div>
</body>
</html>
```

## 결과
![makingtablewithlist](https://user-images.githubusercontent.com/76241233/112493015-1f694b00-8dc5-11eb-819b-c5deffb32bdf.png)



## 참고
[웹표준을 지키려면 &lt;table&gt; 태그를 사용해서는 안된다는 오해](http://dev.epiloum.net/770)
