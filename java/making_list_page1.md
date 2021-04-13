# 간단한 리스트 게시판 페이지 만들기 with JSP & oracle (1)

## JSP 결정
1. 리스트 jsp  
/bbs/list.jsp

2. 글쓰기 폼 jsp      
/bbs/created.jsp

3. 글쓰기 완료 jsp   
: 글 리스트로 리다이렉트되도록   
/bbs/created_ok.jsp

4. 글보기 jsp    
/bbs/article.jsp

5. 글수정 폼 jsp   
/bbs/update.jsp

6. 글수정 완료 jsp     
: 글리스트로 리다이렉트되도록   
/bbs/update_ok.jsp

7. 글삭제 jsp     
: 글리스트로 리다이렉트되도록   
/bbs/delete.jsp


## 흐름도 & 파라미터
1. 리스트
  - 글목록 번호 : `페이지 번호` 클릭 시 => (페이지번호 [, 검색키, 검색값])
  - 검색 : `검색` 시 => (검색키, 검색값)
  - 글 작성폼 : `글 올리기` 클릭 시 => /bbs/created.jsp 로 이동
  - 글 보기 : `게시글 제목` 클릭 시 => (글번호, 페이지번호 [, 검색키, 검색값]) 
     - 페이지 번호를 가져가야 일정한 작업 수행 후 돌아갔을 때 원래 있던 페이지(ex.3페이지 글 클릭 -> 글 목록으로 다시 돌아감 -> 3페이지 출력)가 나옴.
     - 리스트에서 검색해 글을 본 경우, 검색키와 검색값을 파라미터로 가져가지 않으면 검색도 풀린다.

2. 글쓰기 폼
  - 글저장 완료 : 폼 => 제목, 글 내용, 작성자, 패스워드
     - num : 시퀀스 처리
     - ipAddr <- request.getRemoteAddr()로 클라이언트의 ip주소 받기
     - 테이블에 저장
     - 리스트로 redirect
3. 글 보기
  - 글 리스트(페이지 번호 [, 검색키, 검색값])
  - 글 수정폼 (글 번호, 페이지 번호)
    - 테이블에서 해당 게시글 가져오기
  - 글 삭제 (글 번호, 페이지 번호 [,검색키, 검색값])
    - 해당 게시글 삭제
    - 리스트로 리다이렉트(페이지번호 가져가기)
  - 글 보기(이전(혹은 다음글 번호), 페이지 번호 [,검색키, 검색값])
4. 글 수정 폼
  - 글 수정 완료 : 폼 => 제목, 글 내용, 작성자, 패스워드, 글 번호, 페이지 번호
    - 테이블의 게시글 수정
    - 리스트로 리다이렉트(페이지 번호 가져가기)
  - 글 삭제 
    - 리스트로 리다이렉트(페이지 번호 [, 검색키, 검색값])

## oracle table 작성
```
CREATE TABLE bbs (
    num NUMBER NOT NULL
    ,name VARCHAR2(50) NOT NULL
    ,pwd VARCHAR2(50) NOT NULL
    ,subject VARCHAR2(255) NOT NULL
    ,content VARCHAR2(4000) NOT NULL
    ,ipAddr VARCHAR2(50) NOT NULL
    , hitCount NUMBER DEFAULT 0
    ,created DATE DEFAULT SYSDATE
    , CONSTRAINT pk_bbs_num PRIMARY KEY(num)
);
SELECT * FROM tab;
```

## oracle sequence 작성
```
CREATE SEQUENCE bbs_seq
    INCREMENT BY 1
    START WITH 1
    NOMAXVALUE
    NOCYCLE
    NOCACHE;

SELECT * FROM seq;
```

## jsp 폼 만들기

* article.jsp
* list.jsp
* created.jsp 
위 세가지 jsp에서 대략적인 html, css 작업을 한다.

## DB connection 클래스 작성
sql과 connection할 수 있는 클래스를 작성한다.   
다른 jsp에서도 이 클래스를 import해서 사용할 수 있도록 작성.

```
package com.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConn {
	private static Connection conn;
	
	private DBConn() {
	
	}
	public static Connection getConnection() {
		String url = "jdbc:oracle:thin:@//(ip주소):포트번호/xe";
		String user = "오라클계정명";
		String pwd = "오라클계정비밀번호";
		
		if(conn==null) {
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver");
				conn = DriverManager.getConnection(url, user, pwd);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return conn;
	}
	public static void close() {
		conn = null;
		if(conn!=null) {
			try {
				if(!conn.isClosed())
					conn.close();
			} catch (Exception e) {
				
			}
		}
		conn = null;
	}
}
```

## 페이징 처리 클래스 작성
```
package com.util;

public class MyUtil {
	/**
	 * 전체 페이지수 구하기
	 * @param rows 		한 화면에 표시할 데이터 개수
	 * @param dataCount 전체 데이터 개수
	 * @return		 	총페이지수
	 */
	public int pageCount(int rows, int dataCount) {
		if(dataCount <= 0) {
			return 0;
		}
		return dataCount / rows + (dataCount % rows > 0?1 : 0);
	}
  
	/**
	 * GET 방식 페이징 처리. <a>태그의 주소를 만드는 부분.
	 * @param current_page	현재 화면에 표시할 페이지 번호
	 * @param total_page	전체 페이지 수
	 * @param list_url		링크를 설정할 url
	 * @return				페이징 처리 결과
	 */
	public String paging(int current_page, int total_page, String list_url) {
	
		StringBuilder sb = new StringBuilder();
		
		int numPerBlock = 10;
		int currentPageSetup;
		int n, page; 
		
		if(current_page <1 || total_page <1)
			return "";
		if(list_url.indexOf("?") != -1) {
			list_url += "&";
		} else {
			list_url += "?";
		}
		
		//currentPageSetup :표시할 첫 페이지 -1
		currentPageSetup = (current_page / numPerBlock) * numPerBlock;
		if(current_page % numPerBlock ==0) {
			currentPageSetup = currentPageSetup - numPerBlock;
		}
		
		sb.append("<div id ='paginate'>");
		
		//처음 페이지(1페이지), 이전 (ex. 10페이지 전)
		n = current_page - numPerBlock;
		if(total_page > numPerBlock && currentPageSetup >0) {
			sb.append("<a href ='"+list_url+"page=1'>[처음]</a>");
			sb.append("&nbsp;<a href='"+list_url+"page="+n+"'>[이전]</a>");
		}
		//페이징 처리
		page = currentPageSetup +1;
		while(page <=total_page && page <= (currentPageSetup+numPerBlock)) {
			if(page == current_page) {
				sb.append("&nbsp;<span style = 'color:Fuchsia;'>" +page+"</span>");
				
			} else {
				sb.append("&nbsp;<a href='"+list_url+"page="+page+"'>"+page+"</a>");				
			}
			page++;
		}
		
		//다음(10페이지 후), 마지막 페이지
		n = current_page+numPerBlock;
		if(n > total_page) n = total_page;
		if(total_page - currentPageSetup > numPerBlock) {
			sb.append("&nbsp;<a href = '"+list_url+"page="+n+"'>[다음]</a>");
			sb.append("&nbsp;<a href = '"+list_url+"page="+total_page+"'>[끝]</a>");
		}
		sb.append("</div>");
		return sb.toString();
	}
}
```

## DTO(Data Transfer Object) 작성
계층간 데이터 교환을 위한 자바빈즈이다. 교환에 필요한 변수들을 작성하고, getter, setter를 만든다.
```
/**
 * int num  : 게시글이 추가될 때 자동으로 count되는 번호. 오라클에서 sequence로 작성한 것.
 * int listNum : 검색 후 특정 조건에 맞는 게시글끼리의 정렬 번호
 * String suject : 게시글 제목
 * String content : 게시글 내용
 * String name : 작성자
 * String pwd : 게시글을 삭제하거나 수정하기 위해 사용하는 비밀번호. 입력하지 않으면 게시글 작성 불가능
 * String ipAddr : 사용자의 ip주소를 자동으로 가져온다. (request.getRemoteAddr() 이용)
 * String created : SYSDATE
 * @author Nayeon
 *
 */
public class BoardDTO {
	private int num; 
  private int listNum;
	private String subject;
	private String content;
	private String name;
	private String pwd;
	private String ipAddr;
	private String created;
	private int hitCount;
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public int getListNum() {
		return listNum;
	}
	public void setListNum(int listNum) {
		this.listNum = listNum;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getIpAddr() {
		return ipAddr;
	}
	public void setIpAddr(String ipAddr) {
		this.ipAddr = ipAddr;
	}
	public String getCreated() {
		return created;
	}
	public void setCreated(String created) {
		this.created = created;
	}
	public int getHitCount() {
		return hitCount;
	}
	public void setHitCount(int hitCount) {
		this.hitCount = hitCount;
	}
}

```

## 
DAO작성부터 기타 jsp 작성은 [2번째 글]()에서.
