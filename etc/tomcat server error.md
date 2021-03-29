# Tomcat server error port(8005, 8080...) already in use 포트 서버 에러 해결

## Tomcat 에러
이클립스 Localhost를 실행하다 갑자기! 뜬금없이 server를 이미 사용 중이라는 오류가 떴다.   
나의 경우에는 서버가 종료되지 않아 일어난 에러 같았다.
종종 일어나는 에러인 것 같아 해결 방법을 적어놓는다.   

* 에러 전문
  > Several ports (8005, 8080, 8009) required by Tomcat v6.0 Server at localhost are already in use. The server may already be running in another process, or a system process may be using the port. To start this server you will need to stop the other process or change the port number(s).

## Tomcat 사용 번호 확인
Tomcat v8.5 Server at localhost 파일에서 이클립스가 어떤 포트를 사용하는지 확인한다.
![tomcat port number](https://user-images.githubusercontent.com/76241233/112754096-867d3e80-9015-11eb-9421-5e76a6d52fc5.png)

## Tomcat port의 PID 확인 - taskkill
1) cmd 실행
2) netstat -ano | find "포트번호"
3) 포트의 PID 확인
4) taskkill   
   taskkill /f /PID PID번호 (taskkill/f /PID 8005)
6) 만약 액세스가 안된다면 cmd를 **관리자 권한**으로 실행하여 재시도
