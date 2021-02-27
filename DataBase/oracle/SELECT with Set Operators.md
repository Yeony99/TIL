## Set Operators 집합 연산자

### UNION 합집합
* 조건1 혹은 조건2를 만족하는 결과 출력
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 =(조건1);
UNION
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼2 =(조건2);
```

* 모두 출력. 중복적인 것도 출력
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 =(조건1);
UNION ALL
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼2 =(조건2);
```

### MINUS 차집합
* 첫번째 쿼리에는 있지만, 두번째 쿼리 결과에는 없는 것.
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 =(조건1);
MINUS
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼2 =(조건2);
```

### INTERSECT 교집합
* 두 쿼리의 결과가 겹치는 것
```
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼1 =(조건1);
INTERSECT
SELECT 컬럼1, 컬럼2 FROM A테이블 WHERE 컬럼2 =(조건2);
```
