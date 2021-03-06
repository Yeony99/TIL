### COUNT() OVER()
* 서브쿼리를 쓰지 않고 행 수를 구할 수 있다.
* 무조건 **숫자**에 해당하는 값이 출력된다. (값이 NULL일지라도 count는 0으로 출력)
```
SELECT 컬럼1, 컬럼2, COUNT(*) OVER(ORDER BY[PARTITION  BY] 컬럼) FROM 테이블명;
-- ORDER BY 생략 가능
-- ORDER BY 와 PARTITION BY 함께 기입 가능
```

### SUM() OVER() 
* 합계

* 서브쿼리를 이용할 경우
```
SELECT 컬럼1, 컬럼2, 컬럼3,
    (SELECT SUM(컬럼3) FROM 테이블명) 컬럼별명
FROM 테이블명;
```

* SUM() OVER() 사용
  - ORDER BY 하면 누계
```
SELECT 컬럼1, 컬럼2, 컬럼3,
    SUM(컬럼3) OVER(ORDER BY[PARTITION BY] 컬럼2) 컬럼별명
FROM 테이블명;
```

### AVG() OVER() 
* 평균

* 서브쿼리 이용할 경우
```
SELECT 컬럼1, 컬럼2, 컬럼3,
    (SELECT AVG(컬럼3) FROM 테이블명) 컬럼별명
FROM 테이블명;
```

* AVG() OVER() 사용
```
SELECT 컬럼1, 컬럼2, 컬럼3,
    AVG(컬럼3) OVER() 컬럼별명
FROM 테이블명;

SELECT 컬럼1, 컬럼2, 컬럼3,
    AVG(컬럼3) OVER(PARTITION BY 컬럼2) 컬럼별명
FROM 테이블명;
```

### MAX() OVER() / MIN() OVER()
* 최대/최소
```
SELECT 컬럼1, 컬럼2, 컬럼3,
    MIN(컬럼3) OVER() 컬럼별명
FROM 테이블;

SELECT 컬럼1, 컬럼2, 컬럼3,
    MAX(컬럼3) OVER() 컬럼별명
FROM 테이블;

-- 최대와의 차 계산
SELECT 컬럼1, 컬럼2, 컬럼3,
    MAX(컬럼3) OVER() 최대,
    컬럼3-MAX(컬럼3) OVER() 최대와차이
FROM emp;
```
