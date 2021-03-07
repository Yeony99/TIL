# 실수로 커밋한 경우 되돌리기 (오라클)
DELETE 등의 연산으로 실수로 테이블 내용을 날려먹었을 때! 필요한 내용이다.
커밋을 하지 않았다면 언제든 ROLLBACK으로 실행취소가 가능하다.   
커밋을 하기 전에 오류를 발견하고 고치는 것이 가장 좋지만,
혹시라도 커밋하고 나서 실수를 발견했다면, 복구를 해야한다.

## 특정 시간 전의 테이블 내용 확인
쓰레기통에도 남아있지 않을 경우에는 실수한 자신을 탓해야 할 수도 있다...
하지만 복구할 수 있는 방법은 있다. 
**오라클은 작업한 내역을 기억하고 있다.**
이를 이용해 커밋했을지라도 커밋 전의 상태로 돌아갈 수 있다. 

* 10분 전의 테이블 내용 확인
```
SELECT * FROM 삭제한테이블명 
AS OF TIMESTAMP(SYSTIMESTAMP - INTERVAL '10' MINUTE); 
```

* 10분 전의 데이터로 복구
```
INSERT INTO 테이블명 ( 
  SELECT * FROM 테이블명
  AS OF TIMESTAMP(STSTIMESTAMP - INTERVAL '10' MINUTE)
  WHERE (조건)
);
```

혹시 내용이 아니라 테이블을 DROP으로 삭제했을 경우에는 쓰레기통을 확인하면 된다.

## 테이블을 삭제했을 때 - 쓰레기통(bin) 확인
* DROP TABLE - FLASHBACK TABLE
* 쓰레기통에 남아있으면 FLASHBACK 으로 복원 가능하다.
* 동일한 오리지널 이름이 두개 이상일 경우, 마지막으로 삭제된 테이블 복원.
```
DROP TABLE 테이블명; -- 삭제 파일을 bin에 임시보관
DROP TABLE 테이블명 PURGE; -- 영구삭제. bin에 보관하지 않음.
DROP TABLE 테이블명 CASCADE CONSTRAINTS PURGE; -- 테이블과 해당 테이블을 참조하는 FORIEGN KEY 제약조건 동시삭제

FLASHBACK TABLE 테이블명 TO BEFORE DROP; -- 테이블 복원
```
