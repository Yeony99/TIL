# MySQL
자바로 파일처리 방법을 배우고 나니, 데이터베이스를 알아야 할 필요성을 느꼈다.   
오라클이 [database 2021 Ranking](https://db-engines.com/en/ranking)에서는 1위이지만, Relational DB는 어느정도 비슷한 부분이 있다고 하여   
MySQL을 처음 배우는 용도로 사용하기로 결정했다. 

## MySQL설치
오라클 공식 홈페이지에서 다운로드 받을 수도 있지만,    
[bitnami](https://bitnami.com/stack/wamp)에서 보다 간편하게 다운로드 및 설치가 가능하다.

## TABLE 생성
1. 콘솔> bitnami에서 bin> 으로 위치 이동 후 mysql -uroot - p 설정해둔 root 사용자의 password를 입력 후 mysql에 접속. 
2. CREATE DATABASE [데이터베이스명];   
3. use [데이터베이스명];  --> Database changed 가 나오면 ok
4. CREATE TABLE [테이블명](요소);
5. 성공적으로 Database changed 를 봤다면, SHOW TABLES로 만들어진 테이블 확인 가능.
