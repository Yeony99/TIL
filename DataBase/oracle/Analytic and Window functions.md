# 분석함수(analytic functions)와 윈도우 함수(window functions)
윈도우 함수는 행과 행 사이의 관계를 정의하기 위해 사용되는 함수.
파티셔닝의 개념.

## 순위 함수
### RANK() OVER()
* 동일한 값은 동일한 석차 부여
  - 100점 2명, 90점 1명일 때 => 1등, 1등, 3등 

* 컬럼을 기준으로 순위 부여
```
-- 컬럼2 기준
SELECT 컬럼1, 컬럼2,
    RANK() OVER(ORDER BY 컬럼2) 컬럼별명
FROM 테이블명;
```

* 컬럼 기준, 그룹별로 파티셔닝
```
SELECT 컬럼1, 컬럼2,
    RANK() OVER(PARTITION BY 컬럼1 ORDER BY 컬럼2) 컬럼별명
FROM 테이블명;
```

* 순위 1~10등
  - WHERE 컬럼별명a = 1 을 주게 되면 가장 첫번째의 값이 출력된다.
```
SELECT * FROM (
    SELECT 컬럼1, 컬럼2,
        RANK() OVER(ORDER BY 컬럼2) 컬럼별명a
    FROM 테이블명
) WHERE 컬럼별명a <=10;
```

* 상위 10% 출력
```
SELECT * FROM (
    SELECT 컬럼1, 컬럼2,
        RANK() OVER(ORDER BY 컬럼2) 컬럼별명b
    FROM 테이블명
) WHERE 컬럼별명b <=(SELECT COUNT(*) FROM 테이블명) * 0.1;
```

### ROW_NUMBER() OVER() 
* 같은 결과가 있더라도 1,2,3,4 ... 순서대로 번호가 부여되어 출력된다.
```
SELECT 컬럼1, 컬럼2,
    RANK() OVER(ORDER BY 컬럼2) 컬럼별명
FROM 테이블명;
```

### RANK() WITHIN GROUP()
* RANK(값) WITHIN GROUP() 일 때, 값이 들어간 곳의 순번을 구할 수 있다.
```
SELECT RANK(값) WITHIN GROUP(ORDER BY 컬럼1) 컬럼별명
FROM 테이블명;
```
