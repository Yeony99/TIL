# sequence 시퀀스
시퀀스는 유일한 정수 값을 연속적으로 생성하기 위해 사용하는 객체.   
기본키를 자동으로 생성할 수 있다.

## 시퀀스 정보 확인
* USER_SEQUENCES DD를 이용해 시퀀스 정보 확인 가능
```
SELECT * FROM seq;
```

## 시퀀스 생성
* 주의! 시퀀스를 만들 때 이름을 "seq"로 만들지 않아야 한다.
```
CREATE SEQUENCE ex_seq1; -- 기본 캐시 : 20개

SELECT * FROM seq;
```

* NEXTVAL : 다음 시퀀스값 반환 (처음은 0부터 시작 -> 1출력)
* CURRVAL : 현대 시퀀스 값 반환
```
SELECT ex_seq1.NEXTVAL,
        ex_seq1.NEXTVAL, ex_seq1.CURRVAL
FROM dual;
```

* 100부터 10씩 증가, 최대 200
```
CREATE SEQUENCE ex_seq2
    INCREMENT BY 10
    START WITH 100
    MINVALUE 1
    MAXVALUE 200;
SELECT * FROM seq;

SELECT ex_seq2.NEXTVAL FROM dual;
```

* 100 부터 20씩 증가, 최대 200. 최대에 도달하면 처음부터 다시
```
CREATE SEQUENCE ex_seq3
    INCREMENT BY 20
    START WITH 100
    MINVALUE 1
    MAXVALUE 200
    CYCLE
    CACHE 2;
SELECT ex_seq3.NEXTVAL FROM dual;
```

* 1부터 1씩 증가
```
CREATE SEQUENCE ex_seq4
INCREMENT BY 1
START WITH 1
NOMAXVALUE
NOCYCLE
NOCACHE; --NOCACHE 하면 시퀀스 건너뛰는 일이 발생하지 않는다.

CREATE TABLE testA (
    num NUMBER,
    subject VARCHAR2(100)
);

CREATE TABLE testB (
    num NUMBER,
    subjext VARCHAR2(100)
);

INSERT INTO testA(num, subject) VALUES(ex_seq4.NEXTVAL, 'a');
INSERT INTO testB(num, subjext) VALUES(ex_seq4.CURRVAL, 'a');
SELECT * FROM testA;
SELECT * FROM testB;

INSERT ALL
    INTO testA(num, subject) VALUES(ex_seq4.NEXTVAL, 'a')
    INTO testB(num, subjext) VALUES(ex_seq4.NEXTVAL, 'x')
SELECT * FROM dual;


SELECT * FROM testA;
SELECT * FROM testB;

SELECT * FROM seq;
SELECT * FROM tab;
```

## 시퀀스 수정
* START WITH은 수정 불가. 
* 그 밖의 것은 CREATE SEQUENCE문과 동일.

## 시퀀스 삭제
```
DROP SEQUENCE 시퀀스이름;
```
