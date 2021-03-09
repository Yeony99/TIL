# JOIN
여러 테이블에 산재된 데이터에서 원하는 데이터만을 선택해 하나의 테이블로 결합할 수 있게 한다.
## EQUI JOIN
* 조건에 만족하는 데이터를 가져온다
* **= 연산자** 사용

### 방법1
* ON 조건에 테이블명A.컬럼명a = 테이블명B.컬럼명b와 같은 식으로 같은 데이터로 이루어진 컬럼이란 것을 명시할 수 있다.
```
SELECT 컬럼1, 컬럼2...
FROM 테이블명A
JOIN 테이블명B ON 테이블명A.컬럼n = 테이블명B.컬럼n
JOIN 테이블명C ON 테이블명B.컬럼m = 테이블명C.컬럼m
:

```

### 방법2
* DB가 자동적으로 JOIN을 처리한다
* 문제가 생길 여지가 있다.
```
SELECT 컬럼1, 컬럼2...
FROM 테이블명A
JOIN 테이블명B USING (컬럼n)
JOIN 테이블명C USING (컬럼m)
:

```

## CROSS JOIN : 교차곱

```
SELECT 컬럼1, 컬럼2...
FROM 테이블명A
CROSS JOIN 테이블명B; 
```

## SELF JOIN
* 자기 자신을 JOIN하는 방식.
* 여러 항목이 저장되어 있는 경우 활용할 수 있다.
```
SELECT 컬럼1, 컬럼2 ...
FROM 테이블명A 별명A
JOIN 테이블명A 별명B ON 별명A.컬럼1 = 별명B.컬럼1;
```

## NON-EQUI JOIN
* EQUI와 반대로 **= 연산자**가 아닌 연산자로 JOIN 조건 수행

* EQUI JOIN의 경우
```
SELECT 컬럼1, 컬럼2...
FROM 테이블명A
JOIN 테이블명B ON 테이블명A.컬럼n = 테이블명B.컬럼n
JOIN 테이블명C ON 테이블명B.컬럼m = 테이블명C.컬럼m
```

* NON-EQUI JOIN의 경우
```
SELECT 컬럼1, 컬럼2...
FROM 테이블명A
JOIN 테이블명B ON 컬럼n [>, <, BETWEEN AND, IS NULL, IS NOT NULL ...] [값];
```
