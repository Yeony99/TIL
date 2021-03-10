# 오라클 사용자 계정 추가
사용자 계정을 추가하기 위해서는 관리자(sys/system)계정에 접속해야 한다.
오라클 developer 사용을 기준으로 한다.

## 관리자
* 12c / 18c 에서 11g 방식으로 계정을 추가하거나 삭제
```
ALTER SESSION SET "_ORACLE_SCRIPT" = true;
```

* 계정 추가, 암호 : "password"
```
CREATE USER 계정이름 IDENTIFIED BY "password";
```

* 계정에 CONNECT(접속), RESOURCE(테이블 스페이스 사용) 권한 부여
```
GRANT CONNECT, RESOURCE TO 계정이름;
```

* 명령 프롬프트에서 확인 가능.
```
> sqlplus 계정명/"password"
> CONN 계정명/"password"
> show user
> 계정명 확인
```

* DEFAULT table space(데이터 저장 공간)를 USERS 로 변경
```
ALTER USER 계정명 DEFAULT TABLESPACE USERS;
```

* 계정의 TEMPORARY 테이블 스페이스를 TEMP로 변경 
  - TEMP : 정렬, GROUP BY 등의 연산에서 사용되는 테이블스페이스
```
ALTER USER 계정명 TEMPORARY TABLESPACE TEMP;
```

* 계정의 테이블 스페이스의 용량을 무한대로 할당
```
ALTER USER 계정명 QUOTA UNLIMITED ON USERS;
```

* 테이블 생성
```
CREATE TABLE 테이블명 (
  컬럼명 자료형
);
```

* 계정 삭제
  - 만약 명령프롬프트와 developer 등의 sql편집기를 같이 이용 중이라면, CMD 접속을 해제하고 테이블 삭제를 진행해야 한다.
```
DROP USER 계정명 CASCADE;
```
