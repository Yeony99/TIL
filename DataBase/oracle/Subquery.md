## 서브 쿼리

### ROWNUM
* 조회된 순서대로 번호 매기는 것.
```
SELECT * FROM A테이블 WHERE ROWNUM
```
* ORDER BY 절이 있는 경우에 ROWNUM을 실행하면 의도하는 결과가 나오지 않는다.
  - 서브쿼리를 사용해 해결
* 컬럼2 오름차순 정렬해서 앞의 n개의 결과를 출력하려 하나, 결과 출력되지 않음
  - ROWNUM이 먼저 실행되기 때문
```
--오류)
SELECT 컬럼1, 컬럼2 FROM A테이블 
WHERE ROWNUM<n
ORDER BY 컬럼2; 
```

### Subquery 이용
```
SELECT * FROM (
  SELECT 컬럼1, 컬럼2 FROM A테이블 ORDER BY 컬럼2
) WHERE ROWNUM <n;
```
