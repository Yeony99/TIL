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

* 뷰 생성
View 테이블은 SELETE 질의로 도출된 결과를 저장할 수 있는 테이블이다.    
새로운 데이터가 생성되는 것은 아니며, 기존의 결과를 그대로 불러와 참조할 수 있다.   

```
CREATE VIEW [VIEW_NAME] AS
SELECT C1, C2, C3, ...
FROM [TABLE_NAME]
```

* 인덱스 테이블 생성
~~ UNIQUE 조건을 갖고 있는 컬럼에 대해 자동적으로 생성된다. ~~
~~ 하지만 언제 쓰는지 정확히 모르겠다~~

```
CREATE INDEX [INDEX_TABLE_NAME] ON [TABLE_NAME] (Column1, C2, C3, ...)
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

## INSERT 
레코드에 데이터를 추가하는 명령어
```
INSERT INTO [TABLENAME] VALUES (v1, v2, v3, ...) 
-- 컬럼 명시 안 할 경우, 테이블의 컬럼 순서를 지켜야 함

INSERT INTO [TABLENAME] (Column1, C2, C3, ...) VALUES (v1, v2, v3, ...)
```

## DROP / DELETE
* 데이터베이스 삭제
```
DROP DATABASE [DBName]
```
* 테이블 삭제
```
DROP TABLE [TABLENAME]
```
* 레코드 삭제
```
DELETE FROM [TABLENAME] WHERE [condition]
```

## UPDATE 
컬럼의 값, 레코드를 업데이트한다.
```
UPDATE [TABLENAME] SET Column1 = Value1 [WHERE 조건]
```

## ALTER
컬럼(속성)을 추가/변경/삭제할 수 있다.

```
-- 새로운 컬럼 추가
ALTER TABLE [TABLENAME] ADD [ColumnName] [Type] [CONSTRAINT]

-- 제약조건 설정
ALTER TABLE [TABLENAME] ALTER COLUMN [ColumnName] SET [CONSTRAINT]

-- 제약조건 삭제
ALTER TABLE [TABLENAME] ALTER COLUMN [ColumnName] DROP [CONSTRAINT]

-- 자료형 변경
ALTER TABLE [TABLENAME] ALTER COLUMN [ColumnName] TYPE [Type] 

-- check 조건 추가
ALTER TABLE [TABLENAME] ADD CONSTRAINT [CONSTRAINT_NAME] CHECK (condition)

-- check 조건 삭제
ALTER TABLE [TABLENAME] DROP CONSTRAINT [CONSTRAINT_NAME]
```

## 자료형
* char(n) : 길이 고정 문자열
* varchar : 길이 가변 문자열
* int2
* int
* int8
* float4
* float8
* boolean 
  * TRUE, 't', 'true', 'y', 'yes', 'on', '1' 은 TRUE 값을 가진다
  * FALSE, 'f', 'n', 'no', 'off', '0' 은  FALSE 값을 가진다
  * 참조 [Boolean Type](https://www.postgresql.org/docs/9.1/datatype-boolean.html)
* date : 년월일
* time : 시분초
* timez : 시분초 + 타임존
* timestamp : 년월일시분초
* timestampz : 년월일시분초 + 타임존