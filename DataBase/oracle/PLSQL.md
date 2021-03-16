# PL/SQL (procedural language extensions to SQL)
프로그래밍 언어의 특성을 가지는 SQL의 확장.

## 기본 문법
```
DECLARE 
  변수선언;
BEGIN
  실행구문;
  (예외처리);
END;
```

## 레코드 유형 만들기
```
DECLARE
    -- 레코드 유형 선언
    TYPE 타입이름 IS RECORD
    (
        변수명컬럼1 자료형(크기),
        변수명컬럼2 테이블.컬럼n%TYPE
    );
    -- 레코드 변수 선언
    변수명 타입이름;
BEGIN
    SELECT 컬럼1, 컬럼2 INTO 변수명컬럼1, 변수명컬럼2
    FROM 테이블명
    WHERE 기준컬럼 = 값;
    DBMS_OUTPUT.PUT_LINE(변수명컬럼1, 변수명컬럼2);
END;
```

## 제어구조
* IF, CASE, LOOP, WHILE-LOOP, FOR-LOOP, SQL cursor LOOP 등이 있다.
* IF
```
DECLARE
    -- 변수 정의
BEGIN
    SELECT문;
    
    IF  조건1 THEN
        정의된변수 := ;
    ELSIF 조건2 THEN
        정의된변수 := ;
    ELSE
        정의된변수 := ;
    END IF;
    DBMS_OUTPUT.PUT_LINE(출력할 변수들); 
END;
```

* CASE
```
DECLARE
   -- 변수 정의
BEGIN
    SELECT문;
    
    CASE
        WHEN 조건1 THEN 실행문;
        WHEN 조건2 THEN 실행문;
        ELSE 실행문3;
    END CASE;
    DBMS_OUTPUT.PUT_LINE();
END;
```
* LOOP (무한루프)
```
DECLARE
    n NUMBER := 0;
    s NUMBER := 0;
BEGIN
    LOOP
        n := n+1;
        s := s+n;
        EXIT WHEN n = 10;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('결과 : ' || s); 
END;
```

* WHILE-LOOP
```
--1에서 10까지의 합

DECLARE
    n NUMBER := 0;
    s NUMBER := 0;
BEGIN
    WHILE n<10 LOOP
        n := n+1;
        s := s+n;
        EXIT WHEN n = 10;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('결과 : ' || s);
END;

-- 1~100까지의 홀수 합

DECLARE
    n NUMBER := 1;
    s NUMBER := 1;
BEGIN
    WHILE n<100 LOOP
        n := n+2;
        s := s+n;
        EXIT WHEN n = 99;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('결과 : ' || s);
END;

-- 2~9단까지 구구단 출력

DECLARE
    a NUMBER;
    b NUMBER;
BEGIN
    a :=1;
    WHILE a<=9 LOOP
        a:=a+1;
        DBMS_OUTPUT.PUT_LINE('**' || a || '단**');
        
        b :=0;
        WHILE b<=9 LOOP
            b := b+1;
            DBMS_OUTPUT.PUT_LINE(a ||'*' || b || '=' ||(a*b));
        END LOOP;
    END LOOP;
END;
```
* FOR-LOOP
```
-- 1~ 10 까지 합
DECLARE
    s NUMBER :=0;
BEGIN
    -- FOR의 변수는 자동으로 선언된다
    FOR n IN 1..10 LOOP
        s := s+n;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('결과 : ' || s);
END;

-- 역순 출력
DECLARE
BEGIN
    FOR n IN REVERSE 65..90 LOOP
        DBMS_OUTPUT.PUT( CHR(n) ); -- ZYXWVUTSRQPONMLKJIHGFEDCBA 출력.
    END LOOP;
    DBMS_OUTPUT.NEW_LINE(); -- 라인을 넘김(출력 버퍼로 넘기기 위해)
END;
```

* SQL Cursor FOR LOOP
```
DECLARE
BEGIN
    FOR  rec  IN  (SELECT name, sal FROM emp) LOOP
	     DBMS_OUTPUT.PUT_LINE(rec.name || ':' || rec.sal);
	END LOOP;
END;
```



