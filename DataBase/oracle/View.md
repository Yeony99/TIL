# VIEW
뷰는 접근 허용된 자료만을 제한적으로 보여주기 위해 만들어진 **가상 테이블**이다.   
논리적으로 존재하며, 데이터를 가지고 있지 않다.(=SQL만 저장되어 있다)

## VIEW의 특징
* 물리적으로 구현되어있지 않다
* 정의된 뷰 위에 뷰를 구현할 수 있다
* 데이터를 보호할 수 있다
* 기본 테이블 - 기본키, NOT NULL 제약조건 가진 컬럼을 포함하여 뷰를 구성해야 삽입 가능.

### VIEW 생성
VIEW는 **관리자**에게서 권한을 부여받아 사용 가능하다

* 관리자 계정
  - VIEW를 만들 수 있는 권한 부여
```
GRANT CREATE VIEW TO 테이블명;
```

* USER 계정
  - USER의 시스템 권한 확인
```
SELECT * FROM user_sys_privs;
```

### VIEW 작성
SELECT문을 활용해 VIEW를 선언할 수 있다
```
CREATE VIEW 뷰이름
AS SELECT 컬럼1, 컬럼2, ... FROM 테이블;
```

### VIEW 확인
```
SELECT * FROM tabs; -- tabtype : view 확인
SELECT * FROM 뷰이름;
SELECT * FROM col WHERE tname = '뷰이름'; -- 뷰이름 대문자로
DESC 뷰이름;

SELECT view_name, text FROM user_view;
```

### VIEW 수정
뷰는 기본적으로 수정이 아닌 생성/대체 개념으로 내용을 편집할 수 있다.
```
CREATE OR REPLACE VIEW 뷰이름
AS SELECT 컬럼1, 컬럼2, ... FROM 테이블;
```

### VIEW 삭제
```
DROP VIEW 뷰이름;
```
