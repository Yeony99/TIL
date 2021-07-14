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