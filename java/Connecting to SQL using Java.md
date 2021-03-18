# Connecting to SQL using Java(oracle)
자바로 실행하지만, 실질적으로 sql이다.   
자바로 실행하는 오라클이라고 말할 수 있을 것 같다.

## 메이븐을 이용한 자바 프로젝트 생성
1. sql에 테이블 제작
2. java가 저장된 dbhomeSE\jdbc\lib 경로에, ojbc8.jar 가 있는지 확인
3. 이클립스 file -> new -> others -> maven -> maven project 
  - group id : com.users
  - artifact id : (프로젝트명) 
4. JRE System 라이브러리 버전 수정
  - (프로젝트명)폴더 우클릭 -> properties -> compiler -> 버전 1.8로 수정
  - maven에 project facets -> java 1.8로 변경
  - JRE 라이브러리 1.8로 변경되었는지 확인
5. (프로젝트명) 폴더에서 java Build path -> jre 라이브러리 -> workspace default JRE 적용
6. pom.xml 에 라이브러리 추가
  - [라이브러리 검색](https://mvnrepository.com/)
```       
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.user</groupId>
  <artifactId>javaApp</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  
  <dependencies>
		<dependency>
			<groupId>com.oracle.ojdbc</groupId>
			<artifactId>ojdbc8</artifactId>
			<version>19.3.0.0</version>
		</dependency>
	</dependencies>
</project>
```

## 오라클과 연동하는 클래스 생성(사용자 정의)
* 오라클과의 지속적인 연동이 수월하도록 
```
package db.util;

import java.sql.Connection;
import java.sql.DriverManager;

// Singleton pattern
public class DBConn {
	private static Connection conn;
	
	private DBConn() {
	}
	
	public static Connection getConnection() {
		// String url="jdbc:oracle:thin:@127.0.0.1:1521:xe"; // 11g 방식
		String url="jdbc:oracle:thin:@//127.0.0.1:1521/xe"; // 12c 이상
		   // 1521:오라클포트번호, xe:SID
		String user="오라클사용자명";
		String pwd="오라클계정비밀번호";
		
		if(conn==null) {
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver"); // 자바 6부터는 생략가능. 자동 로딩
				conn = DriverManager.getConnection(url, user, pwd);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return conn;
	}
	
	public static void close() {
		if(conn!=null) {
			try {
				if(! conn.isClosed()) {
					conn.close();
				}
			} catch (Exception e) {
			}
		}
		
		conn = null;
	}
}
```

