# 기본 사용법 - postgreSQL

## CREATE

* 데이터베이스 생성
```
CREATE database [DBName]
```

* 테이블 생성
```
CREATE TABLE [TABLENAME] (
    [컬럼명] 조건,
    [컬럼명2] 조건,
    ...
)
```

### 컬럼 조건
* NOT NULL : NULL 비허용
* PRIMARY KEY : 기본키.　(NULL 비허용, 유일한 값)
* UNIQUE : 테이블 내에서 유일한 값
* CHECK : 지정된 조건에 맞는 값
* REFERENCES : 다른 테이블의 특정 컬럼을 참조

### 외래키 옵션
* 기본값 : 외래키가 참조하는 다른 테이블의 레코드 삭제 불가
* `ON DELETE SET NULL` : 외래키가 참조하는 레코드 삭제 시 해당 외래키 값을 NULL로 설정
* `ON DELETE CASCADE` : 외래키가 참조하는 레코드 삭제 시 현재 테이블 레코드도 함께 삭제