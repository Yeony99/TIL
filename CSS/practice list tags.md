# list 태그 연습

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
	color : #333;
	font-weight: 500;
	border: 1px solid #ccc;
	background-color : #fff;
	text-align: center;
	padding: 3px 10px;
	border-radius: 5px;
}

.btn:hover, btn:focus, .btn:active {
	background-color: #e6e6e6;
	border-color: #adadad;
	color: #333;
	cursor: pointer;
}

.board {
	margin: 30px auto;
	width: 600px;
}

.board .board-title {
	height: 45px;
	line-height:45px;
	font-weight: 700;
	font-size: 15px;
}

.board .board-article{
	margin: 10px auto 0;
	border-top: 3px solid #507cd1;
	border-bottom : 1px solid #507cd1;
}

.board .article-header {
	height: 35px;
	line-height: 35px;
	border-bottom: 1px solid #507cd1;
	text-align: center;
}

.board ul {
	clear: both;
	list-style: none;
	padding:0;
}

.board ul li {
	float: left;
}

.board .col-title {
	width: 80px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: #eee;	
}

.board .col-content {
	width: 210px;
	padding-left:10px;
	height: 35px;
	line-height: 35px;
	text-align: left;
}

.board .bottom-line {
	height: 35px;
	line-height: 35px;
	border-bottom: 1px solid #ccc;
	clear: both;
}

.board .no-line {
	height: 35px;
	line-height: 35px;
	clear: both;
}

.board .article-content {
	padding: 20px 30px 20px 30px;
	min-height: 150px;
	border-bottom: 1px solid #507cd1;
	text-align: left;
	word-break: break-all;
}

.board .article-footer {
	padding: 10px 0;
}

.board .article-footer .left {
	float: left;
	width: 50%;
	text-align: left;
}

.board .article-footer .right {
	float: right;
	width: 50%;
	text-align: right;
}
</style>

</head>
<body>
	<div class="board">
		<div class="board-title">
			<h3>
				<span>|</span> 게시판
			</h3>
		</div>
		<div class="board-article">
			<div class="article-header">게시물 제목</div>


			<ul class="bottom-line">
				<li class="col-title">작성자</li>
				<li class="col-content">홍길동</li>
				<li class="col-title">줄수</li>
				<li class="col-content">10</li>
			</ul>

			<ul class="bottom-line">
				<li class="col-title">등록일</li>
				<li class="col-content">2021-03-25</li>
				<li class="col-title">조회수</li>
				<li class="col-content">10</li>
			</ul>

			<div class="article-content">게시글 내용</div>
			<div class="bottom-line">이전글 : 이전글입니다.</div>
			<div class="no-line">다음글 : 다음글입니다.</div>
      
		</div>
		<div class="no-line" style="text-align: right;">From :127.0.0.1
		</div>
		<div class="article-footer">
			<div class="left">
				<button type="button" class="btn">수정</button>
				<button type="button" class="btn">삭제</button>

			</div>
			<div class="right">
				<button type="button" class="btn">리스트</button>
			</div>

		</div>
	</div>

</body>
</html>
```

## 결과
![list연습](https://user-images.githubusercontent.com/76241233/112660787-68ce9e80-8e88-11eb-8560-962e463b9ea3.png)

