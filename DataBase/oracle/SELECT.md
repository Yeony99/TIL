# SELECT 문
- 테이블, 뷰의 데이터를 조회해 0개 이상의 행 반환

```
SELECT * FROM A; -- A테이블의 모든 정보
SELECT 123 + '10' FROM dual; -- 133
SELECT 1/2 + 1/2 FROM dual; -- 1
SELECT 컬럼1, 컬럼2 FROM A -- A테이블의 컬럼1, 2
```
* dual 테이블 : 오라클에 의해 생성되는 테이블. 

```
SELECT * FROM tabs; -- table 출력
SELECT * FROM tab; -- 더욱 간단하게 출력 (테이블 목록 확인)
SELECT * FROM cols; -- 모든 테이블의 컬럼 확인
```

## 수식 사용
```
SELECT 컬럼1, 컬럼2 + 컬럼3 FROM A테이블; -- 컬럼1, 컬럼2와3의 연산된 값을 A테이블로부터 추출
SELECT 컬럼1 || '님' FROM A테이블; -- 컬럼의 모든 값 '님' 문자열과 함께 출력
```

## 모든 컬럼 출력 
  - 단, 컬럼 이름은 명시하는 것이 원래 원칙이다. 
  - 컬럼 이름을 모르면 SQL에서 원래 가져올 수 없는 것.
```
SELECT * FROM A테이블;
SELECT A테이블.* FROM A테이블;
```

## 컬럼명 변경해 출력
```
SELECT 컬럼1 AS YES, 컬럼2 AS NO, FROM A테이블;
SELECT 컬럼1 YES, 컬럼2 NO, FROM A테이블; -- AS는 생략 가능
SELECT 컬럼1 Y E S, 컬럼2 N O FROM A테이블; -- 오류
SELECT 컬럼1 "Y E S", 컬럼2 "N O" FROM A테이블; -- " " 쌍따옴표는 라벨에서만 사용 가능.
```

## 특정 조건에 부합하는 컬럼 출력
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 = (조건); -- 문자열, 수식 등이 올 수 있다.
```
### ANY
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 = ANY(조건1, 조건2); -- 조건에 부합하는 모든 것 출력(조건1 OR 조건2 등으로 표현 가능)
```

### ALL
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 = ALL(조건1, 조건2); -- 모든 조건이 맞아야 출력, AND와 유사.
```

### BETWEEN
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 BETWEEN 조건1 AND 조건2; 
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 수식1 AND 수식2; -- 위와 같다
```

### IN
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 IN (조건1, 조건2, 조건3);
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 NOT IN (조건1, 조건2, 조건3);
```

### LIKE
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 LIKE (조건); 
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 LIKE (조건1) OR LIKE (조건2);

--ex
SELECT name FROM student WHERE name LIKE '김%'; -- 김씨인 학생의 이름 출력
SELECT name, rrn FROM emp WHERE rrn LIKE '_0%'; -- 90년대생, 00년대생 학생 이름과 주민번호 출력
```

### %
* %김 - 김으로 끝나는 것
* %김% - 김이 포함되는 것
* 김% - 김으로 시작하는 것
* _김% - 2번째가 김인 것.

### NULL
* NULL과 '' (홑따옴표 2개) 는 같지 않다. 
* 만약 자바의 null 혹은 ""(길이 0)인 것을 오라클에 추가하면, 오라클은 NULL로 추가.
```
SELECT 10+NULL FROM dual; -- NULL 출력
```

### CASE expressions
- JAVA의 switch 문과 유사.
```
-- 1)
SELECT 컬럼1, 컬럼2,
  CASE (조건식)
    WHEN (조건식 결과) THEN (표현식)
    WHEN (조건식 결과2) THEN (표현식2)
  END AS "(컬럼별명)"
FROM A테이블; 

--2) 
SELECT 컬럼1, 컬럼2+컬럼3,
  CASE (조건식)
    WHEN (조건식 결과) THEN (표현식)
    WHEN (조건식 결과2) THEN (표현식2)
    ELSE (표현식3)
  END "(컬럼별명)"
FROM A테이블; 
```

### WITH
* 동일 블록에 대해 반복적으로 SQL문을 사용하는 경우 해당 블록에 별명을 붙여 재사용 할 수 있게끔 한다.
* 오라클 9부터 사용 가능
* WITH으로 처리된 쿼리를 자주 사용할 수록 그 효율이 증대
```
WITH EXAMPLE AS (
  SELECT (컬럼내용) AS 별명
 FROM A테이블
)
SELECT * FROM EXAMPLE
```

### DISTINCT | UNIQUE
* 중복 제거해 보여준다
* DISTINCT는 ANSI SQL표준, UNIQUE는 오라클에서만 쓰인다.
```
SELECT DISTINCT 컬럼1 FROM A테이블; 
SELECT UNIQUE 컬럼1 FROM A테이블; -- 동일 결과
```

### ORDER BY
```
SELECT 컬럼1, 컬럼2, 컬럼3+컬럼4 별명 FROM A테이블
ORDER BY 컬럼3+컬럼4 ASC; --오름차순 (생략 가능)

SELECT 컬럼1, 컬럼2, 컬럼3+컬럼4 별명 FROM A테이블
ORDER BY 컬럼3+컬럼4 DESC; --내림차순
```
### 번역 순서
* FROM -> WHERE -> SELECT -> ORDER BY
