# CRUD

## CRUD 란?
* **C**reate
* **R**ead
* **U**pdate
* **D**elete

## CRUD 활용
* Create
  - **INSERT** INTO 테이블명(column1, column2, ...) VALUES (value1, value2, ...)
  - column은 value가 무엇인지 알려준다. 따라서 입력 순서는 반드시 동일해야 한다.
  - DESC 테이블명; 을 하면 테이블을 출력해준다. 이를 참고해 INSERT INTO 가능.
  - cf) DATETIME을 이용하는 경우에는 NOW() 와 같은 형식으로 작성해야 한다.
  
* Read
  - **SELECT** * FROM 테이블명; 을 하면 추가한 모든 데이터를 보여준다.
  - SELECT A,B... FROM 테이블명; 을 하면 선택한 요소들의 데이터만 출력한다.
  - SELECT A, B, ...FROM 테이블명 **WHERE** N = 'valueN'; 을 하면, 엑셀의 필터와 같은 기능이다. 
  - SELECT A, B, ...FROM 테이블명 **WHERE** N = 'valueN' ORDER BY N DESC LIMIT 2; 와 같이 정렬 순서를 바꿀 수 있다. 
  - LIMIT (num)은 필요한 양 만큼만 출력하는 것. 
  
* Update
  - UPDATE 테이블명 SET valueA = ' ', valueB = ' ', ... valueN = ' ' WHERE PRIMARY KEY = ' ';
    - 수정. valueA와 valueB를 ' '안의 내용으로 바꾸는데, 특정 PRIMARY KEY에 있는 것을 바꾼다는 것.
    - WHERE 문을 빠뜨리면 돌이킬 수 없는 ...  참혹한 결과가 따라올 수도 있다.
    
* Delete
  - DELETE FROM 테이블명 **WHERE** PRIMARY KEY = ' ';
  - DELETE할 때 WHERE 구문을 빠뜨리면 역시... 모든 데이터가 삭제되는, 인생이 바뀔 수 있는 끔찍한 결과가 따라올 수도 있다.
