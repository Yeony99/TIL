# localhost 상태에서 svg가 작동하지 않을 때
jsp로 semi 프로젝트를 하는 중인데, 절대경로로 아무리 입력을 해도 `Failed to load resource: the server responded with a status of 404 (Not Found)` 라는 오류만 발생했다.

## 해결방법
조금 허무한데, src 주소가 잘못된 거였다...
EL(Expression Language)을 사용해 contextPath로 접근해야 했다.
```
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<img alt="" src="${pageContext.request.contextPath}/폴더/logo.svg">
```
