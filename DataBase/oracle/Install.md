# Oracle

## 오라클 설치 및 사용
1) 오라클 홈페이지 회원가입 후 [다운로드](https://www.oracle.com/database/technologies/xe-downloads.html) 가능
2) setup.exe 실행 및 설치
3) 기본 저장위치는 c:\app 이다.
4) 관리 비밀번호 설정
5) cmd 명령 프롬프트 -> sqlplus  sys/"암호"  AS SYSDBA 입력
6) SHOW USER 명령으로 접속한 사용자 확인

## 사용자 추가 및 데이터 입력
1) sqlplus 실행 중인 cmd 창
2) sql을 활용할 데이터가 저장된 공간의 주소 복사
3) @C:\경로\파일명.sql -- 사용자명으로 계정추가 + 해당 계정에 데이터가 추가된다.
4) 아무 것도 나오지 않고 다음 실행 대기로 넘어가면 성공.

## 다른 계정으로 CONNECT
1) sqlplus 실행 중인 cmd 창
2) conn 계정명/"암호"
3) SHOW USER 명령으로 접속한 사용자 확인
4) EXIT 명령으로 종료

## 주의사항
* 사용자 이름은 **반드시 영문**이어야 한다. 
* sys는 관리자이다. (system또한 관리자이지만, sys > system 순으로 더 많은 권한을 가진다.)

## 비밀번호 잊었을 때
* cmd > sqlplus / AS SYSDBA
  - 단, 경우에 따라 접속이 안될 수 있다.

