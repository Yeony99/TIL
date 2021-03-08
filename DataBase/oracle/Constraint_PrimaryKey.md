# 제약조건 CONSTRAINT 
제약조건은 테이블이 정해진 제약 하에 유지되게끔 한다.

## 제약조건 종류
1. NOT NULL : NULL을 허용하지 않음. 값을 필수적으로 입력해야한다.
2. UNIQUE : 중복 값 허용하지 않음.(NULL 제외)
3. PRIMARY KEY(기본 키) :  식별 가능한 **기본키**. 따라서 중복과 NULL 모두 허용하지 않음.
4. FOREIGN KEY(외래 키) : 참조테이블 칼럼의 데이터만을 허용. 참조테이블의 PRIMARY KEY 혹은 UNIQUE로 지정된 칼럼만을 FOREIGN KEY로 지정 가능.
5. CHECK : 데이터의 값의 범위나 조건 설정해 조건에 해당되는 데이터만 허용
6. DEFAULT : 데이터를 입력하지 않았을 경우, DEFAULT로 지정한 데이터가 자동 입력

## 제약조건 확인
* 첫번째 방법은 어떤 컬럼이 어떤 제약조건에 해당하는지 확인 불가능
* 두번째 방법으로 각 컬럼이 어떤 제약조건이 있는지 확인할 수 있다.
```
SELECT * FROM user_constraints WHERE table_name='테이블명(대문자)'; 
SELECT * FROM user_cons_columns WHERE table_name='테이블명(대문자)';
```
## 테이블 생성과 동시에 기본 키 설정

### 컬럼 레벨 방식의 PRIMARY KEY 설정(inline constraint)
* 제약조건명은 자동으로 시스템이 부여한다.
```
CREATE TABLE test1 ( -- 테이블 생성 
    id VARCHAR2(30) PRIMARY KEY, -- 기본키 제약 설정
    pwd VARCHAR2(100) NOT NULL, -- NOT NULL 제약 설정
    name VARCHAR(30) NOT NULL
);
```

### 사용자 정의 제약조건명
```
CREATE TABLE test2 ( -- 테이블 생성 
    id VARCHAR2(30) CONSTRAINT pk_test2_id PRIMARY KEY, -- 기본키 제약설정
    pwd VARCHAR2(100) NOT NULL, -- NOT NULL 제약 설정
    name VARCHAR(30) NOT NULL
);

SELECT * FROM user_constraints WHERE table_name='TEST2';
SELECT * FROM user_cons_columns WHERE table_name='TEST2'; -- pk_test2_id 제약조건 확인
```

## 테이블 레벨 방식의 PRIMARY KEY 설정(out of line constraint)
### 테이블 레벨 방식, 복합키로 기본키 부여
* id+pwd 가 PRIMARY KEY가 된다.
* 원활한 테이블 관리를 위해 되도록이면 3개 이상이 결합된 복합키로는 설정하지 않는 것이 좋다.
* 기본키 컬럼의 개수는 적게 
```
CREATE TABLE test3 (
    id VARCHAR2(50),
    pwd VARCHAR2(100) NOT NULL,
    name VARCHAR2(50) NOT NULL,
    CONSTRAINT pk_test3_id PRIMARY KEY (id, pwd)
);

SELECT * FROM user_constraints WHERE table_name='TEST3';
SELECT * FROM user_cons_columns WHERE table_name='TEST3';
```

## 이미 존재하는 테이블에 기본키 설정

* 기본키 제약이 없는 테이블
```
CREATE TABLE test4 (
    id VARCHAR2(50),
    code VARCHAR2(50),
    name VARCHAR2(50) NOT NULL
);

SELECT * FROM tab;
INSERT INTO test4(id, code, name) VALUES('1', 'a', 'aa');
SELECT * FROM test4;
```
* test4 테이블에 기본키 추가
```
ALTER TABLE test4 ADD CONSTRAINT pk_test4_id PRIMARY KEY(id); 
```


## 기본키 제약조건 삭제
### 기본키 삭제 : 제약조건명 이용
```
ALTER TABLE test4 DROP CONSTRAINT pk_test4_id;
SELECT * FROM user_constraints WHERE table_name = 'TEST4'; -- 기본키 삭제 확인
```

### 기본키 삭제 : PRIMARY KEY 를 입력하여
```
ALTER TABLE test3 DROP PRIMARY KEY;
SELECT * FROM user_constraints WHERE table_name = 'TEST3';
```
