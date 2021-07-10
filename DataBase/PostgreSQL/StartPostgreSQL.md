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