# PostgreSQL 시작하기

## 설치
[PostgreSQL](https://www.postgresql.org/)   
위 링크에서 본인이 사용하는 운영체제를 선택해 다운로드한다.   
* 설치 시 비밀번호를 두 번 입력해야 한다.   
* PostgreSQL의 포트는 기본적으로 `5432`이다. (변경 가능)

## path 설정
명령 프롬프트를 통해 postgreSQL를 실행하고자 할 경우, 환경변수 PATH를 설정한다.   
커맨드 라인으로 실행할 수 있는 경로는 `C:\Program Files\PostgreSQL\12\bin`이다.   

* 윈도우 검색창에 `환경 변수` 입력해 환경변수 설정 열기
* 혹은 파일탐색기 - 내 PC - 속성 - 고급 시스템 설정 - 환경변수 - 시스템 변수 - Path 클릭 후 편집 - 새로 만들기 - `C:\Program Files\PostgreSQL\12\bin` 입력 후 확인
* cmd에 `psql --version` 명령어를 입력해 path 설정 확인

## PostgreSQL 연결하기
```
psql -h {IP 주소} -p {포트 번호(기본 5432)} -U {사용자명} -d {데이터베이스명}
```
* IP 주소는 PostgreSQL이 실행 중인 곳이다.
  * localhost 환경에서 실행되고 있다면 생략 가능.
* 포트번호가 기본 5432로 설정되어 있다면 생략 가능
* 사용자명은 설치 직후에는 postgres 역할만 생성된다. 생략 시 os에 등록된 사용자 이름으로 지정.
* 연결할 데이터 베이스 이름 지정. 생략 시 사용자명과 같은 이름의 데이터베이스에 연결된다.
  * 자동으로 생성된다.

```
> psql -U 사용자명
postgres 사용자의 암호: {설치 시 입력한 암호}
psql(버전)

postgres=#
```
`postgres=#`은 데이터베이스가 연결되어 있다는 것이다.


## PostgreSQL 연결 해제
윈도우 cmd에서는 `ctrl+c` 입력하면 자동으로 접속 종료된다.   
아래는 정식 명령어
```
\p
```