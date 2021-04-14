# 간단한 리스트 게시판 페이지 만들기 with JSP & oracle (2)

## DAO (Data Access Object) 작성
DB에 접근하는 객체를 작성한다. (BoardDAO.java)
각각의 기능이 작동하는 jsp를 만들면서 하나씩 테스트하는 것이 좋다.
```
//DB작업

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.util.DBConn;

public class BoardDAO {
	private Connection conn = DBConn.getConnection();

	public int insertBoard(BoardDTO dto) throws SQLException {
		int result = 0;
		// 쿼리 실행하는 객체 preparedStatemt 객체 생성
		PreparedStatement pstmt = null;
		String sql;

		try {
			sql = "INSERT INTO bbs(num, name, subject, content, pwd, ipAddr, created, hitCount) VALUES(bbs_seq.NEXTVAL, ?, ?, ?, ?, ?, SYSDATE, 0)";
			// default로 SYSDATE를 넣어준다. -> 작성한 시점의 시스템 날짜 자동 기록

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, dto.getName());
			pstmt.setString(2, dto.getSubject());
			pstmt.setString(3, dto.getContent());
			pstmt.setString(4, dto.getPwd());
			pstmt.setString(5, dto.getIpAddr());

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (pstmt != null) { // 객체가 살아있을 때
				try {
					pstmt.close(); // 리소스를 닫아준다.
				} catch (Exception e2) {
				}
			}
		}

		return result;
	}

	public int dataCount() {
		int result = 0;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql;

		try {
			sql = "SELECT COUNT(*) FROM bbs"; //
			pstmt = conn.prepareStatement(sql);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				result = rs.getInt(1); //컬럼명 대신 1 쓰는 것. 만약 SELECT COUNT(*) cnt FROM bbs 였으면 cnt를 써야 한다.
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (Exception e2) {
				}
			}
			if (pstmt != null) {
				try {

				} catch (Exception e2) {
				}
			}
		}
		return result;
	}

	public List<BoardDTO> listBoard(int offset, int rows) {
		List<BoardDTO> list = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql;
		
		try {
			sql = "SELECT num, name, subject, hitCount, TO_CHAR(created, 'YYYY-MM-DD') created FROM bbs ORDER BY num DESC OFFSET ? ROWS FETCH FIRST ? ROWS ONLY";
		
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, offset);
			pstmt.setInt(2, rows);
			
			rs = pstmt.executeQuery();
			while(rs.next()) {
				BoardDTO dto = new BoardDTO();
				
				dto.setNum(rs.getInt("num"));
				dto.setName(rs.getString("name"));
				dto.setSubject(rs.getString("subject"));
				dto.setHitCount(rs.getInt("hitCount"));
				dto.setCreated(rs.getString("created"));
				
				list.add(dto);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (Exception e2) {
				}
			}
			if (pstmt != null) {
				try {

				} catch (Exception e2) {
				}
			}
		}

		return list;

	}

	//검색에서 검색된 전체 데이터 개수 구하기.
	public int dataCount(String condition, String keyword) {
		int result = 0;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql;

		try {
			if(condition.equalsIgnoreCase("created")) {
				keyword = keyword.replaceAll("(\\-|\\/|\\.)", "");
				sql = "SELECT COUNT(*) FROM bbs WHERE TO_CHAR(created, 'YYYYMMDD') = ? ";
			} else if(condition.equalsIgnoreCase("name")) {
				sql = "SELECT COUNT(*) FROM bbs WHERE INSTR(name, ?) = 1";
			} else { //subject, content 검색. (=> condition). 입력받은 condition이 어디에 있든 상관없다. 
				sql = "SELECT COUNT(*) FROM bbs WHERE INSTR("+condition+",?) >=1";
			}
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, keyword);
			
			rs = pstmt.executeQuery();
			if(rs.next()) {
				result = rs.getInt(1); //컬럼명 대신 1 쓰는 것. 만약 SELECT COUNT(*) cnt FROM bbs 였으면 cnt를 1대신 써야 한다.
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (Exception e2) {
				}
			}
			if (pstmt != null) {
				try {

				} catch (Exception e2) {
				}
			}
		}
		return result;
	}


	//검색된 리스트
	public List<BoardDTO> listBoard(int offset, int rows, String condition, String keyword) {
		List<BoardDTO> list = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql;
		
		try {
			sql = "SELECT num, name, subject, hitCount, TO_CHAR(created, 'YYYY-MM-DD') created FROM bbs";
			if(condition.equalsIgnoreCase("created")) { //equalsIgnoreCase : 대소문자 구분 x
				keyword = keyword.replaceAll("(\\-|\\/|\\.)", "");
				sql += " WHERE TO_CHAR(created, 'YYYY-MM-DD') = ? ";
			} else if(condition.equalsIgnoreCase("name")) {
				sql += " WHERE INSRT(name, ?) = 1 ";
			} else {
				sql += " WHERE INSTR("+condition+", ?) >= 1";
			}
			sql += " ORDER BY num DESC"
				+ " OFFSET ? ROWS FETCH FIRST ? ROWS ONLY";
		
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, keyword);
			pstmt.setInt(2, offset);
			pstmt.setInt(3, rows);
			
			rs = pstmt.executeQuery();
			while(rs.next()) {
				BoardDTO dto = new BoardDTO();
				
				dto.setNum(rs.getInt("num"));
				dto.setName(rs.getString("name"));
				dto.setSubject(rs.getString("subject"));
				dto.setHitCount(rs.getInt("hitCount"));
				dto.setCreated(rs.getString("created"));
				
				list.add(dto);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (Exception e2) {
				}
			}
			if (pstmt != null) {
				try {

				} catch (Exception e2) {
				}
			}
		}

		return list;

	}
	
	//글 조회수 증가
	public int updateHitCount(int num) throws SQLException {
		int result = 0;
		PreparedStatement pstmt = null;
		String sql;
		
		try {
			sql = "UPDATE bbs SET hitcount = hitcount+1 WHERE num = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, num);
			
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(pstmt!=null) {
				try {
					pstmt.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
		}
		return result;
	}
	
	public BoardDTO readBoard(int num) {
		BoardDTO dto = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql;
		
		try {
			sql = "SELECT num, name, subject, content, pwd, hitCount, ipAddr, created FROM bbs WHERE num=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, num);
			
			rs = pstmt.executeQuery();
			if(rs.next()) {
				dto = new BoardDTO();
				dto.setNum(rs.getInt("num"));
				dto.setName(rs.getString("name"));
				dto.setSubject(rs.getString("subject"));
				dto.setContent(rs.getString("content"));
				dto.setPwd(rs.getString("pwd"));
				dto.setHitCount(rs.getInt("hitCount"));
				dto.setIpAddr(rs.getString("ipAddr"));
				dto.setCreated(rs.getString("created")); // 글보기 할 때는 연월일 시분초까지 보이도록
			}
		
		} catch (Exception e) {
			
		} finally {
			if(rs!=null) {
				try {
					rs.close();
				} catch (Exception e2) {
					// TODO: handle exception
				}
			}
			if(pstmt!=null) {
				try {
					pstmt.close();
				} catch (Exception e2) {
				}
			}
		}
		return dto;
	}
	
    // 이전글
    public BoardDTO preReadBoard(int num, String condition, String keyword) {
        BoardDTO dto=null;

        PreparedStatement pstmt=null;
        ResultSet rs=null;
        StringBuilder sb = new StringBuilder();

        try {
        	if(keyword.length() != 0) {
                sb.append("SELECT num, subject FROM bbs  ");
                if(condition.equals("name")) {
                    sb.append(" WHERE ( INSTR(name, ?) = 1)  ");
                } else if(condition.equals("created")) {
                	keyword = keyword.replaceAll("(\\-|\\/|\\.)", "");
                    sb.append(" WHERE (TO_CHAR(created, 'YYYYMMDD') = ?) ");
                } else {
                    sb.append(" WHERE ( INSTR("+condition+", ?) > 0) ");
                }
                sb.append("            AND (num > ? ) ");
                sb.append(" ORDER BY num ASC ");
                sb.append(" FETCH  FIRST  1  ROWS  ONLY ");

                pstmt=conn.prepareStatement(sb.toString());
                pstmt.setString(1, keyword);
               	pstmt.setInt(2, num);
            } else {
                sb.append("SELECT num, subject FROM bbs ");
                sb.append(" WHERE num > ? ");
                sb.append(" ORDER BY num ASC ");
                sb.append(" FETCH  FIRST  1  ROWS  ONLY ");

                pstmt=conn.prepareStatement(sb.toString());
                pstmt.setInt(1, num);
            }
        	
            rs=pstmt.executeQuery();

            if(rs.next()) {
                dto=new BoardDTO();
                dto.setNum(rs.getInt("num"));
                dto.setSubject(rs.getString("subject"));
            }
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(rs!=null) {
				try	{
					rs.close();
				}catch (SQLException e2){
				}
			}
			if(pstmt!=null) {
				try	{
					pstmt.close();
				}catch (SQLException e2){
				}
			}
		}   
        return dto;
    }

    // 다음글
    public BoardDTO nextReadBoard(int num, String condition, String keyword) {
        BoardDTO dto=null;

        PreparedStatement pstmt=null;
        ResultSet rs=null;
        StringBuilder sb = new StringBuilder();

        try {
        	if(keyword.length() != 0) {
                sb.append("SELECT num, subject FROM bbs ");
                if(condition.equals("name")) {
                    sb.append(" WHERE ( INSTR(name, ?) = 1) ");
                } else if(condition.equals("created")) {
                	keyword = keyword.replaceAll("(\\-|\\/|\\.)", "");
                    sb.append(" WHERE (TO_CHAR(created, 'YYYYMMDD') = ?) ");
                } else {
                    sb.append(" WHERE ( INSTR("+condition+", ?) > 0) ");
                }
                sb.append("          AND (num < ? ) ");
                sb.append(" ORDER BY num DESC ");
                sb.append(" FETCH  FIRST  1  ROWS  ONLY ");

                pstmt=conn.prepareStatement(sb.toString());
                pstmt.setString(1, keyword);
               	pstmt.setInt(2, num);
            } else {
                sb.append("SELECT num, subject FROM bbs ");
                sb.append(" WHERE num < ? ");
                sb.append(" ORDER BY num DESC ");
                sb.append(" FETCH  FIRST  1  ROWS  ONLY ");

                pstmt=conn.prepareStatement(sb.toString());
                pstmt.setInt(1, num);
            }

            rs=pstmt.executeQuery();

            if(rs.next()) {
                dto=new BoardDTO();
                dto.setNum(rs.getInt("num"));
                dto.setSubject(rs.getString("subject"));
            }
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(rs!=null) {
				try	{
					rs.close();
				}catch (SQLException e2){
				}
			}
			if(pstmt!=null) {
				try	{
					pstmt.close();
				}catch (SQLException e2){
				}
			}
		}

        return dto;
    }
    
    public int updateBoard(BoardDTO dto) throws SQLException {
    	int result = 0;
    	PreparedStatement pstmt = null;
    	String sql;
    	
    	try {
			sql = "UPDATE bbs SET name =?, subject =?, content=?, pwd=? WHERE num=?";
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, dto.getName());
			pstmt.setString(2, dto.getSubject());
			pstmt.setString(3, dto.getContent());
			pstmt.setString(4, dto.getPwd());
			pstmt.setInt(5, dto.getNum());
			
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			if(pstmt!=null) {
				try {
					pstmt.close();
				} catch (Exception e2) {
				}
			}
		} 	
    	return result;
    }
    
    public int deleteBoard(int num) throws SQLException {
    	int result =0;
    	PreparedStatement pstmt = null;
    	String sql;
    	
    	try {
			sql ="DELETE FROM bbs WHERE num=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, num);
			result = pstmt.executeUpdate();
			
		} catch (Exception e) {
			
		} finally {
			if(pstmt!=null) {
				try {
					pstmt.close();
				} catch (Exception e) {
				}
			}
		}
    	return result;
    }
}


```
여기서 이전글 다음글의 컨셉은 현재 머물러있는 주소의 게시글 **번호** 보다 큰 것 중에서 제일 작은 거 하나 노출, 혹은 작은 것 중에서 제일 큰 것 하나 노출하는 것이다. 

## insert - created.jsp
게시글을 등록할 수 있는 jsp이다. sql의 insert문과 상응한다. 
```
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
   String cp = request.getContextPath();
   // String path = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+cp;
   request.setCharacterEncoding("utf-8");   
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>study</title>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style type="text/css">
*{
	margin: 0; padding: 0;
	box-sizing: border-box;
}
body {
	font-size: 14px;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

a{
	color: #000;
	text-decoration: none;
}
a:active, a:hover {
    text-decoration: underline;
    color:tomato;
}
textarea:focus, input:focus{
    outline: none;
}
.btn {
    color:#333;
    font-weight:500;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
    border:1px solid #ccc;
    background-color:#fff;
    text-align:center;
    cursor:pointer;
    padding:3px 10px 5px;
    border-radius:4px;
}
.btn:active, .btn:focus, .btn:hover {
    background-color:#e6e6e6;
    border-color:#adadad;
    color:#333;
}
.boxTF {
    border:1px solid #999;
    padding:3px 5px 5px;
    border-radius:4px;
    background-color:#fff;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.selectField {
    border:1px solid #999;
    padding:3px 5px 3px;
    border-radius:4px;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.boxTA {
    border:1px solid #999;
    height:150px;
    padding:3px 5px;
    border-radius:4px;
    background-color:#ffffff;
    resize : none;  /* 크롬등 크기 고정 */
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.title {
    font-weight:bold;
    font-size:16px;
    font-family:나눔고딕, "맑은 고딕", 돋움, sans-serif;
}
</style>

<script type="text/javascript">
  // 좌우의 공백을 제거하는 함수 //익스7 초과하는 버전이면 쓸 필요 x
  if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        var TRIM_PATTERN = /(^\s*)|(\s*$)/g;
        return this.replace(TRIM_PATTERN, "");
    };
  }

  function sendBoard() {
        var f = document.boardForm;

    	var str = f.subject.value;
        if(!str) {
            alert("제목을 입력하세요. ");
            f.subject.focus();
            return;
        }

	    str = f.name.value;
        if(!str) {
            alert("이름을 입력하세요. ");
            f.name.focus();
            return;
        }

    	str = f.content.value;
        if(!str) {
            alert("내용을 입력하세요. ");
            f.content.focus();
            return;
        }

    	str = f.pwd.value;
        if(!str) {
            alert("패스워드를 입력하세요. ");
            f.pwd.focus();
            return;
        }
        f.action = "created_ok.jsp"; //서버 받을 주소
        f.submit();
  }
</script>

</head>

<body>
<div style="width: 600px; margin: 30px auto;">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse;">
<tr height="45">
	<td align="left" class="title">
		<h3><span>|</span> 게시판</h3>
	</td>
</tr>
</table>

<form name="boardForm" method="post">
  <table style="width: 100%; margin-top: 20px; border-spacing: 0; border-collapse: collapse;">
  <tr height="40" style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" style="text-align: center;">제&nbsp;&nbsp;&nbsp;&nbsp;목</td>
      <td style="padding-left:10px;"> 
        <input type="text" name="subject" maxlength="100" class="boxTF" style="width: 95%;">
      </td>
  </tr>

  <tr height="40" style="border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" style="text-align: center;">작성자</td>
      <td style="padding-left:10px;"> 
        <input type="text" name="name" size="35" maxlength="20" class="boxTF">
      </td>
  </tr>

  <tr style="border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" align="center" valign="top" style="padding-top:5px;">내&nbsp;&nbsp;&nbsp;&nbsp;용</td>
      <td valign="top" style="padding:5px 0px 5px 10px;"> 
        <textarea name="content" rows="12" class="boxTA" style="width: 95%;"></textarea>
      </td>
  </tr>

  <tr height="40" style="border-bottom: 1px solid #cccccc;">
      <td width="100" bgcolor="#eeeeee" align="center">패스워드</td>
      <td style="padding-left:10px;"> 
           <input type="password" name="pwd" size="35" maxlength="7" class="boxTF">&nbsp;(게시물 수정 및 삭제시 필요 !!!)
       </td>
  </tr> 
  <tr height="45"> 
      <td align="center" colspan="2">
        <button type="button" class="btn" onclick="sendBoard();">등록하기</button>
        <button type="reset" class="btn">다시입력</button>
        <button type="button" class="btn" onclick="javascript:location.href='list.jsp';">등록취소</button>
      </td>
  </tr>
  </table>
</form>
</div>

</body>
</html>
```

## created_ok.jsp 
created.jsp로부터 서버를 받을 주소이다.
```
<%@page import="com.bbs.BoardDAO"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="dto" class = "com.bbs.BoardDTO"/>
<jsp:setProperty property = "*" name = "dto"/>
<%
	BoardDAO dao = new BoardDAO();

	//파라미터로 넘어온 값 : name, subject, content, pwd
	//파라미터로 무엇이 넘어오는지 기억해야 한다. 
	dto.setIpAddr(request.getRemoteAddr()); //게시 등을 등록한 클라이언트 아이피 주소
	dao.insertBoard(dto);
	response.sendRedirect("list.jsp");
%>
```

## article.jsp
게시글이 작성되는 폼을 갖고 있는 jsp

```
<%@page import="com.bbs.BoardDTO"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="com.bbs.BoardDAO"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%
String cp = request.getContextPath();
// String path = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+cp;
request.setCharacterEncoding("utf-8");

BoardDAO dao = new BoardDAO();

//넘어온 파라미터 : num, page [, condition, keyword]
int num = Integer.parseInt(request.getParameter("num"));
String pageNum = request.getParameter("page");

String condition = request.getParameter("condition");
String keyword = request.getParameter("keyword");
if (condition == null) { //검색이 아닌 경우
	condition = "subject";
	keyword ="";
}
keyword = URLDecoder.decode(keyword, "UTF-8");

String query = "page="+pageNum;
if(keyword.length()!=0) { //검색 상태인 경우
	query += "&condition="+condition+"&keyword="+URLEncoder.encode(keyword, "UTF-8");
}

//조회수 증가
dao.updateHitCount(num);

//게시글 가져오기
BoardDTO dto = dao.readBoard(num);
if(dto==null) { //게시글이 없으면
	response.sendRedirect("list.jsp?"+query);
	return;
}

dto.setContent(dto.getContent().replaceAll("\n", "<br>"));

//이전, 다음글 가져오기
BoardDTO preBoardDTO = dao.preReadBoard(num, condition, keyword);
BoardDTO nexBoardDTO = dao.nextReadBoard(num, condition, keyword);

%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>study</title>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style type="text/css">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-size: 14px;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

a {
	color: #000;
	text-decoration: none;
}

a:active, a:hover {
	text-decoration: underline;
	color: tomato;
}

textarea:focus, input:focus {
	outline: none;
}

.btn {
	color: #333;
	font-weight: 500;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
	border: 1px solid #ccc;
	background-color: #fff;
	text-align: center;
	cursor: pointer;
	padding: 3px 10px 5px;
	border-radius: 4px;
}

.btn:active, .btn:focus, .btn:hover {
	background-color: #e6e6e6;
	border-color: #adadad;
	color: #333;
}

.boxTF {
	border: 1px solid #999;
	padding: 3px 5px 5px;
	border-radius: 4px;
	background-color: #fff;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

.selectField {
	border: 1px solid #999;
	padding: 3px 5px 3px;
	border-radius: 4px;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

.title {
	font-weight: bold;
	font-size: 16px;
	font-family: 나눔고딕, "맑은 고딕", 돋움, sans-serif;
}
</style>

<script type="text/javascript">
function deleteBoard(num) {
	if(confirm("게시물을 삭제하시겠습니까?")) {
		var url = "delete.jsp?num="+num+"&<%=query%>";
		location.href=url;
	}
}

</script>
</head>

<body>

	<div style="width: 600px; margin: 30px auto;">
		<table
			style="width: 100%; border-spacing: 0; border-collapse: collapse;">
			<tr height="40">
				<td class="title">
					<h3>
						<span>|</span> 게시판
					</h3>
				</td>
			</tr>
		</table>

		<table
			style="width: 100%; margin-top: 20px; border-spacing: 0; border-collapse: collapse;">
			<tr height="35"
				style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc;">
				<td colspan="2" align="center"><%=dto.getSubject()%></td>
			</tr>

			<tr height="35" style="border-bottom: 1px solid #cccccc;">
				<td width="50%" style="padding-left: 5px;">이름 : <%=dto.getName()%></td>
				<td width="50%" align="right" style="padding-right: 5px;">
					<%=dto.getCreated()%> | 조회 <%=dto.getHitCount()%></td>
			</tr>

			<tr style="border-bottom: 1px solid #cccccc;">
				<td colspan="2" style="padding: 10px 5px;" valign="top" height="200">
					<%=dto.getContent()%></td>
			</tr>

			<tr height="35" style="border-bottom: 1px solid #cccccc;">
				<td colspan="2" style="padding-left: 5px;">
				이전글 : 
				<% if(preBoardDTO !=null) { %>
					<a href="article.jsp?num=<%=preBoardDTO.getNum()%>&<%=query%>"><%=preBoardDTO.getSubject()%></a>
				<%} %>
				</td>
			</tr>

			<tr height="35" style="border-bottom: 1px solid #cccccc;">
				<td colspan="2" style="padding-left: 5px;">
				다음글 : 
				<% if(nexBoardDTO !=null) { %>
					<a href="article.jsp?num=<%=nexBoardDTO.getNum()%>&<%=query%>"><%=nexBoardDTO.getSubject()%></a>
				<%} %>
				</td>
			</tr>
			
			
			<tr height="45" style="padding-right: 5px; text-align: right;">
				<td>
					<%=dto.getIpAddr()%>
				</td>
			</tr>
			
			<tr height="45">
				<td>
					<button type="button" class="btn" onclick="javacript:location.href='update.jsp?num=<%=dto.getNum()%>&page=<%=pageNum%>';">수정</button>
					<button type="button" class="btn" onclick ="deleteBoard('<%=dto.getNum()%>')">삭제</button>
				</td>
				<td align="right">
					<button type="button" class="btn" onclick ="javascript:location.href='list.jsp?<%=query%>';">리스트</button>
				</td>
			</tr>
		</table>
	</div>

</body>
</html>

```

## update - update.jsp
```
<%@page import="com.bbs.BoardDTO"%>
<%@page import="com.bbs.BoardDAO"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
   String cp = request.getContextPath();
   // String path = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+cp;
   request.setCharacterEncoding("utf-8");   
   
   int num = Integer.parseInt(request.getParameter("num"));
   String pageNum = request.getParameter("page");
   
   BoardDAO dao = new BoardDAO();
   BoardDTO dto = dao.readBoard(num);
   
   if(dto ==null) {
	   response.sendRedirect("list.jsp?page="+pageNum);
	   return;
   }
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>study</title>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style type="text/css">
*{
	margin: 0; padding: 0;
	box-sizing: border-box;
}
body {
	font-size: 14px;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

a{
	color: #000;
	text-decoration: none;
}
a:active, a:hover {
    text-decoration: underline;
    color:tomato;
}
textarea:focus, input:focus{
    outline: none;
}
.btn {
    color:#333;
    font-weight:500;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
    border:1px solid #ccc;
    background-color:#fff;
    text-align:center;
    cursor:pointer;
    padding:3px 10px 5px;
    border-radius:4px;
}
.btn:active, .btn:focus, .btn:hover {
    background-color:#e6e6e6;
    border-color:#adadad;
    color:#333;
}
.boxTF {
    border:1px solid #999;
    padding:3px 5px 5px;
    border-radius:4px;
    background-color:#fff;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.selectField {
    border:1px solid #999;
    padding:3px 5px 3px;
    border-radius:4px;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.boxTA {
    border:1px solid #999;
    height:150px;
    padding:3px 5px;
    border-radius:4px;
    background-color:#ffffff;
    resize : none;  /* 크롬등 크기 고정 */
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.title {
    font-weight:bold;
    font-size:16px;
    font-family:나눔고딕, "맑은 고딕", 돋움, sans-serif;
}
</style>

<script type="text/javascript">
  // 좌우의 공백을 제거하는 함수 //익스7 초과하는 버전이면 쓸 필요 x
  if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        var TRIM_PATTERN = /(^\s*)|(\s*$)/g;
        return this.replace(TRIM_PATTERN, "");
    };
  }

  function sendBoard() {
        var f = document.boardForm;

    	var str = f.subject.value;
        if(!str) {
            alert("제목을 입력하세요. ");
            f.subject.focus();
            return;
        }

	    str = f.name.value;
        if(!str) {
            alert("이름을 입력하세요. ");
            f.name.focus();
            return;
        }

    	str = f.content.value;
        if(!str) {
            alert("내용을 입력하세요. ");
            f.content.focus();
            return;
        }

    	str = f.pwd.value;
        if(!str) {
            alert("패스워드를 입력하세요. ");
            f.pwd.focus();
            return;
        }
    	
        f.action = "update_ok.jsp"; //서버 받을 주소
        f.submit();
  }
</script>

</head>

<body>
<div style="width: 600px; margin: 30px auto;">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse;">
<tr height="45">
	<td align="left" class="title">
		<h3><span>|</span> 게시판</h3>
	</td>
</tr>
</table>

<form name="boardForm" method="post">
  <table style="width: 100%; margin-top: 20px; border-spacing: 0; border-collapse: collapse;">
  <tr height="40" style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" style="text-align: center;">제&nbsp;&nbsp;&nbsp;&nbsp;목</td>
      <td style="padding-left:10px;"> 
        <input type="text" name="subject" maxlength="100" class="boxTF" style="width: 95%;" value="<%=dto.getSubject()%>">
      </td>
  </tr>

  <tr height="40" style="border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" style="text-align: center;">작성자</td>
      <td style="padding-left:10px;"> 
        <input type="text" name="name" size="35" maxlength="20" class="boxTF" value="<%=dto.getName()%>">
      </td>
  </tr>

  <tr style="border-bottom: 1px solid #cccccc;"> 
      <td width="100" bgcolor="#eeeeee" align="center" valign="top" style="padding-top:5px;">내&nbsp;&nbsp;&nbsp;&nbsp;용</td>
      <td valign="top" style="padding:5px 0px 5px 10px;"> 
        <textarea name="content" rows="12" class="boxTA" style="width: 95%;"><%=dto.getContent()%></textarea>
      </td>
  </tr>

  <tr height="40" style="border-bottom: 1px solid #cccccc;">
      <td width="100" bgcolor="#eeeeee" align="center">패스워드</td>
      <td style="padding-left:10px;"> 
           <input type="password" name="pwd" size="35" maxlength="7" class="boxTF">&nbsp;(게시물 수정 및 삭제시 필요 !!!)
       </td>
  </tr> 
  <tr height="45"> 
      <td align="center" colspan="2">
      <input type="hidden" name="num" value="<%=dto.getNum()%>"> <!-- 중요! 게시글 번호를 넘겨줘야 수정가능 -->
      <input type="hidden" name="page" value="<%=pageNum%>"> <!-- 중요! 페이지 번호를 넘겨줘야 함. -->
        <button type="button" class="btn" onclick="sendBoard();">수정완료</button>
        <button type="reset" class="btn">다시입력</button>
        <button type="button" class="btn" onclick="javascript:location.href='list.jsp';">수정취소</button>
      </td>
  </tr>
  </table>
</form>
</div>

</body>
</html>
```

## update_ok.jsp
```
<%@page import="com.bbs.BoardDAO"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="dto" class="com.bbs.BoardDTO"/>
<jsp:setProperty property="*" name="dto"/>

<%
	BoardDAO dao = new BoardDAO();
	dao.updateBoard(dto);
	
	String pageNum = request.getParameter("page");

	response.sendRedirect("article.jsp?num="+dto.getNum()+"&page="+pageNum);
%>
```

## delete - delete.jsp
delete는 다른 것에 비해 조금 간단하다. 게시글을 지우고 처음 페이지인 list.jsp로 돌아가면 된다.
```
<%@page import="java.net.URLEncoder"%>
<%@page import="com.bbs.BoardDAO"%>
<%@page import="java.net.URLDecoder"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%
	request.setCharacterEncoding("utf-8");

	int num = Integer.parseInt(request.getParameter("num"));
	String pageNum = request.getParameter("page");
	
	String condition = request.getParameter("condition");
	String keyword = request.getParameter("keyword");
	if(condition==null) {
		condition = "subject";
		keyword="";
	}
	keyword = URLDecoder.decode(keyword, "utf-8");
	
	BoardDAO dao = new BoardDAO();
	dao.deleteBoard(num);
	
	String query = "page="+pageNum;
	if(keyword.length()!=0) {
		query+="&condition="+condition+"&keyword="+URLEncoder.encode(keyword, "utf-8");
	}
	
	response.sendRedirect("list.jsp?"+query);
%>
```

## 메인 list.jsp
```
<%@page import="java.net.URLEncoder"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="com.bbs.BoardDTO"%>
<%@page import="java.util.List"%>
<%@page import="com.bbs.BoardDAO"%>
<%@page import="com.util.MyUtil"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
   String cp = request.getContextPath();
   // String path = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+cp;
   request.setCharacterEncoding("utf-8");   
   
   // 리스트 - 오라클 18C 방식
   MyUtil util = new MyUtil();
   BoardDAO dao = new BoardDAO();
   
   //파라미터로 넘어온 페이지 번호 받기(page는 JSP 예약어로 변수명으로 사용 불가)
   String pageNum = request.getParameter("page");
   int current_page = 1;
   if(pageNum!=null) { //파라미터로 넘어온 페이지번호가 있으면 그 페이지를 출력, 없으면 1페이지
	   current_page = Integer.parseInt(pageNum); 
   }
   
   //검색 : 파라미터로 넘어온 검색 컬럼과 검색 값 // BoardDAO에서 condition과 keyword를 인자로 갖는 메소드 작성 후에 검색 짬.
   String condition = request.getParameter("condition");
   String keyword = request.getParameter("keyword");
   if(condition == null) { //검색이 아닌 경우
	   condition = "subject";
   	   keyword = ""; //length  ==0
   } 
   //GET방식으로 넘어온 경우 검색 값을 디코딩
   if(request.getMethod().equalsIgnoreCase("GET")) {
	   keyword = URLDecoder.decode(keyword, "UTF-8");
   }
   
   //전체 데이터 개수
   int dataCount; // keyword==0이면 검색이 아닐 경우. 따라서 데이터 개수를 가져오는 곳이 다르다.
   //검색이 아닐 경우에는 그냥 전체 데이터 개수,
   //검색일 경우에는 condition과 keyword를 넘겨서 인자가 일치하는 값을 가져온 -> 전체데이터.
   dataCount = keyword.length()==0? dao.dataCount() : dao.dataCount(condition, keyword);
   
   // 전체 페이지 수
   
   int rows = 5; // 한페이지에 출력할 데이터 개수
   int total_page = util.pageCount(rows, dataCount);
   
   //전체 페이지 수 보다 화면에 표시할 페이지가 큰 경우(웹은 정적이므로 다른 사람이 삭제한 것을 감지하지 못함.) 
   if(current_page > total_page)
	   current_page = total_page;
   
   //건너뛸 개수
   int offset = (current_page - 1) * rows;
   if(offset <0) offset = 0;
   
   //테이블에서 게시글 가져오기
   List<BoardDTO> list;
   if(keyword.length() ==0) {//검색이 아닐 때
	   list = dao.listBoard(offset, rows);
   } else { //검색일 때
	   list = dao.listBoard(offset, rows, condition, keyword);
   }
   
   //리스트 번호 만들기(검색했을 때 검색한 데이터의 넘버링)
   int listNum, n=0;
   for(BoardDTO dto : list) {
	   listNum = dataCount - (offset+n);
	   dto.setListNum(listNum);
	   n++;
   }
   
   //페이징 처리
   String query ="";
   if(keyword.length()!=0) {
	   query = "condition="+condition+"&keyword="+URLEncoder.encode(keyword, "utf-8");
   }
   
   String listUrl = "list.jsp";
   String articleUrl = "article.jsp?page="+current_page;
   if(query.length()!=0) {
	   listUrl +="?"+query;
	   articleUrl += "&" +query;
   }
   
   String paging = util.paging(current_page, total_page, listUrl);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>study</title>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style type="text/css">
*{
	margin: 0; padding: 0;
	box-sizing: border-box;
}
body {
	font-size: 14px;
	font-family: "맑은 고딕", 나눔고딕, 돋움, sans-serif;
}

a{
	color: #000;
	text-decoration: none;
}
a:active, a:hover {
    text-decoration: underline;
    color:tomato;
}
textarea:focus, input:focus{
    outline: none;
}
.btn {
    color:#333;
    font-weight:500;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
    border:1px solid #ccc;
    background-color:#fff;
    text-align:center;
    cursor:pointer;
    padding:3px 10px 5px;
    border-radius:4px;
}
.btn:active, .btn:focus, .btn:hover {
    background-color:#e6e6e6;
    border-color:#adadad;
    color:#333;
}
.boxTF {
    border:1px solid #999;
    padding:3px 5px 5px;
    border-radius:4px;
    background-color:#fff;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.selectField {
    border:1px solid #999;
    padding:3px 5px 3px;
    border-radius:4px;
    font-family:"맑은 고딕", 나눔고딕, 돋움, sans-serif;
}
.title {
    font-weight:bold;
    font-size:16px;
    font-family:나눔고딕, "맑은 고딕", 돋움, sans-serif;
}
</style>
<script type="text/javascript">
function searchList() {
	var f=document.searchForm;
	f.submit();
}
</script>
</head>

<body>
<div style="width: 700px; margin: 30px auto;">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse;">
<tr height="45">
	<td align="left" class="title">
		<h3><span>|</span> 게시판</h3>
	</td>
</tr>
</table>

<table style="width: 100%; margin-top: 20px; border-spacing: 0; border-collapse: collapse;">
   <tr height="35">
      <td align="left" width="50%">
          <%=dataCount%>(<%=current_page%>/<%=total_page%> 페이지)
      </td>
      <td align="right">
          &nbsp;
      </td>
   </tr>
</table>

<table style="width: 700px; margin: 0px auto; border-spacing: 0; border-collapse: collapse;">
  <tr align="center" bgcolor="#eeeeee" height="35" style="border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc;"> 
      <th width="60" style="color: #787878;">번호</th>
      <th style="color: #787878;">제목</th>
      <th width="100" style="color: #787878;">작성자</th>
      <th width="80" style="color: #787878;">작성일</th>
      <th width="60" style="color: #787878;">조회수</th>
  </tr>
 
 <%for(BoardDTO dto : list) { %>
  <tr align="center" height="35" style="border-bottom: 1px solid #cccccc;"> 
      <td><%=dto.getListNum()%></td>
      <td align="left" style="padding-left: 10px;">
           <a href="<%=articleUrl%>&num=<%=dto.getNum()%>"><%=dto.getSubject()%></a>
      </td>
      <td><%=dto.getName()%></td>
      <td><%=dto.getCreated()%></td>
      <td><%=dto.getHitCount()%></td>
  </tr>
<% } %>

</table>
 
<table style="width: 100%; border-spacing: 0; border-collapse: collapse;">
   <tr height="35">
	<td align="center">
        <%=dataCount==0?"등록된 게시글이 없습니다.":paging%>
	</td>
   </tr>
</table>

<table style="width: 100%; margin-top: 10px; border-spacing: 0; border-collapse: collapse;">
   <tr height="40">
      <td align="left" width="100">
          <button type="button" class="btn" onclick="javascript:location.href='list.jsp';">새로고침</button>
      </td>
      <td align="center">
          <form name="searchForm" action="list.jsp" method="post"> <!-- 검색은 본인이 본인에게 가는 것. -->
              <select name="condition" class="selectField">
                  <option value="subject">제목</option>
                  <option value="name">작성자</option>
                  <option value="content">내용</option>
                  <option value="created">등록일</option>
            </select>
            <input type="text" name="keyword" class="boxTF"> <!-- keyword와 option 선택값이 파라미터로 넘어감. -->
            <button type="button" class="btn" onclick="searchList()">검색</button>
        </form>
      </td>
      <td align="right" width="100">
          <button type="button" class="btn" onclick="javascript:location.href='created.jsp';">글올리기</button>
      </td>
   </tr>
</table>
</div>

</body>
</html>
```


## 어려웠던 점
* 파일의 개수가 늘어나면 늘어날 수록 어렵다고 느꼈다.
* 부가적인 기능(이전글, 다음글)의 개념이 간단해보이지만, 막상 뜯어보면 세세하게 생각할 게 많았다.

원래는 이런 방식으로는 코딩하지 않는다고 한다. servlet을 이용할 때 이것을 수정할 예정이다!
