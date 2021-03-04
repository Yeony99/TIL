# 날짜 함수 DateTime function
연산 대상이 날짜

### SYSDATE
* 데이터베이스가 설치된 시스템의 현재 날짜 및 시간 DATE형으로 반환
```
SELECT SYSDATE FROM dual; --오늘날짜

SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') --년월일 시분초 날짜를 '문자'로 변환
FROM dual; 

SELECT SYSDATE-10 FROM dual; -- 지금 시각에서 10일전
SELECT SYSDATE -1/24 FROM dual; -- 지금 시각에서 1시간 전

```

### ADD_MONTHS(date, integer)
* 월 더하기
```
SELECT 
ADD_MONTHS(SYSDATE, -1) 지난달, SYSDATE 오늘,
ADD_MONTHS(SYSDATE, 1) 다음달
FROM dual; 


-- 2021년 3월 30일로부터 6개월 뒤
SELECT ADD_MONTHS(TO_DATE('20210330', 'YYYYMMDD'), 6) 
FROM dual;

-- 2021년3월30일로부터 6개월 뒤
-- 3월 31일로부터 6개월뒤 9월 31일이 없기 때문에 9월 30일로 출력
SELECT ADD_MONTHS(TO_DATE('20210330', 'YYYYMMDD'), 6),
    ADD_MONTHS(TO_DATE('20210331', 'YYYYMMDD'), 6) 
FROM dual;
```

### LAST_DAY(date)
* 월의 마지막 일자 구하기
```
SELECT SYSDATE, LAST_DAY(SYSDATE) FROM dual;
```

### NEXT_DAY(date)
* 다가오는 요일 구하기
```
SELECT NEXT_DAY(SYSDATE, '일') FROM dual;
SELECT NEXT_DAY(SYSDATE, '일요일') FROM dual;
SELECT NEXT_DAY(SYSDATE, 1) FROM dual; -- 1~7 : 일~토 순서.
```

* 오늘, 이번주 일요일, 이번주 토요일 구하기
```
-- 1) 
SELECT SYSDATE,
NEXT_DAY(SYSDATE, 1)-7 이번주일욜, -- 다가오는 일요일에서 -7
    CASE
        WHEN TO_CHAR(SYSDATE, 'D') = 7 THEN SYSDATE
        ELSE NEXT_DAY(SYSDATE, 7)
    END 이번주토욜
FROM dual;


-- 2) 
SELECT SYSDATE,
NEXT_DAY(SYSDATE, 1)-7 이번주일욜, -- 다가오는 일요일에서 -7
NEXT_DAY(SYSDATE-1, 7) 이번주토욜
FROM dual;
```

* 월 기준 주차 (w)
  - 달의 n번째 요일
  - 1~7일 : 1주
  - 8~14일 : 2주 ...

```
SELECT TO_CHAR(TO_DATE('2021-03-06', 'YYYY-MM-DD'), 'w')
FROM dual;
```

* 연 기준 주차 (iw)
  - 1~52주(혹은 53주)
  - 1월 4일이 있는 주를 첫 주로 간주
  - 한 주의 시작이 **월요일** 
```
SELECT TO_CHAR(TO_DATE('2021-03-05', 'YYYY-MM-DD'), 'iw')
FROM dual; --9, 2020-03-05면 10
```

### 날짜 절삭 TRUNC
```
SELECT TRUNC(SYSDATE) "오늘",
    TO_CHAR(SYSDATE, 'D') "요일 수치로"
FROM dual;
-- 오늘 날짜와 1~7(일~토)에 해당하는 날짜 출력

SELECT TRUNC(TO_DATE('2021-07-14', 'YYYY-MM-DD'), 'YEAR') FROM dual; -- 21/01/01 로 출력
SELECT TRUNC(SYSDATE- TRUNC(SYSDATE, 'YEAR')) "올해가 지난지" FROM dual; -- 1월 1일부터 며칠이나 지났는지
```


### 날짜 반올림 ROUND
* 연도는 7월 1일부터 반올림
```
SELECT ROUND(TO_DATE('2021-07-14', 'YYYY-MM-DD'), 'YEAR') FROM dual; -- 22/01/01 로 출력
SELECT ROUND(TO_DATE('2021-07-14', 'YYYY-MM-DD'), 'MONTH') FROM dual; -- 21/07/01 로 출력. (월 기준으로 반올림) 16일부터 반올림.
SELECT ROUND(TO_DATE('2021-07-16', 'YYYY-MM-DD'), 'MONTH') FROM dual; -- 21/08/01 출력
```

### 즐거운 주말 구하기 :)
* When is your Happy Weekend
```
SELECT SYSDATE,
NEXT_DAY(SYSDATE, 1)-7 이번주일욜, -- 다가오는 일요일에서 -7
    CASE
        WHEN TO_CHAR(SYSDATE, 'D') = 7 THEN SYSDATE
        ELSE NEXT_DAY(SYSDATE, 7)
    END 이번주토욜
FROM dual;

-- 혹은
SELECT SYSDATE,
NEXT_DAY(SYSDATE, 1)-7 이번주일욜, -- 다가오는 일요일에서 -7
NEXT_DAY(SYSDATE-1, 7) 이번주토욜
FROM dual;
```

