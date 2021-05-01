# 몽고DB 시작

## MongoDB 특징

### 문서지향 데이터베이스
NoSQL(Not Only SQL) 중 가장 많이 사용되며, 객체지향 언어 사용할 때 편리함을 준다.

#### 문서
문서는 키와 값이 결합된 집합이다. 

### 스키마가 없다.
데이터베이스를 구성하는 레코드 크기, key 정의, 관계, 검색 방법 등이 없다.
 -> 개발 과정이 간소화되는 장점이 있다.

### 제공하는 기능
* 인덱싱
* 파일 저장소
* 컬렉션 (SQL의 테이블)
* 집계 파이프라인

### Scale out 
서버를 여러대 추가해 시스템 확장이 가능하다. 
서버 하나가 다운되면 다른 서버로 전환되어 서비스 제공된다. 
도큐먼트를 분배하고 라우팅까지 처리할 수 있다.

### 조인과 트랜잭션이 없다
분산 시스템을 중점으로 두어 해당 기능이 없다.


## 설치
윈도우를 사용 중이기에 윈도우를 기준으로 작성.
1. 다운로드 받아 설치한다.
[MongoDB download](https://www.mongodb.com/try/download/community?jmp=docs)
2. 명령 프롬프트에 mongo입력
```
> mongo

MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("  ") }
MongoDB server version: 4.4.5
```
위처럼 출력되면 몽고DB 셸이 실행된다.

3. use [데이터베이스명]
터미널에서 몽고DB를 접근할 수 있다.
`use` 명령어는 데이터베이스를 생성 -> 전환하는 명령어이다.
```
> use learning
switched to db learning
```
learning이라는 데이터베이스를 생성했다.

4. 컬렉션 생성
몽고DB는 자바스크립트 객체와 유사한 느낌인데, 컬렉션 = 최상위 객체, 도큐먼트 = 종속 객체이다.

* 도큐먼트 한 개 생성
```
> db.icecream.save({type: "vanila"})
```
성공적으로 완료하면 아래와 같은 결과를 볼 수 있다.
```
WriteResult({nInserted" : 1})
```

* 여러 도큐먼트 생성
```
> db.icecream.save([{type: "chocolate"}, {type: "melon"}])
```

5. icecream 컬렉션 조회
* 전체 조회
```
> db.icecream.find()
{ "_id" : ObjectId("id값"), "type" : "vanila" }
{ "_id" : ObjectId("id값"), "type" : "chocolate" }
{ "_id" : ObjectId("id값"), "type" : "melon" }
```

* 선택 조회 
```
> db.icecream.find({type:"vanila})
> db.icecream.find({"_id" : ObjectId("id값")})
```

6. 도큐먼트 내용 업데이트
```
> db.icecream.update({type:"vanila"}, {type: "mint"})
```

7. 도큐먼트 내용 삭제

* 특정 내용 삭제
```
> db.icecream.remove({type: "mint"})
```

* 컬렉션 내 모든 도큐먼트 삭제
```
> db.icecream.remove({})
```



