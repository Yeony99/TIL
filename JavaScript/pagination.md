# pagination(paging) 페이지네이션
## 페이지네이션이란?
> graphQL, MongoDB 기반의 pagination
애플리케이션이 갖고 잇는 방대한 양의 데이터를 항상 전부를 반환할 수 없다. 만약 그러하다면 엄청난 고비용 쿼리가 발생하고, 데이터베이스, 서버, 네트워크 속도까지 느려지게 될 것이다. 따라서 쿼리를 pagination해 정해진 수의 결과만 반환하게끔 할 수 있다.   
페이지네이션은 백, 프론트할 것 없이 다 구현해야 한다.   
## 페이지네이션 종류
* offset pagination
    - 클라이언트가 오프셋 번호를 전달하고 제한된 양의 데이터를 반환.
    - DB의 offset 쿼리를 이용해 `페이지`단위로 구분해 요청, 응답
    - 페이지 데이터가 10이고, 3번째 페이지 요청한 경우 -> offset 20 전달
    - oracle(12이후) 쿼리의 경우, 아래 같은 방식으로 작성한다.
    ```
    SELECT * 
    FROM table 
    ORDER BY column
    OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY
    ```
    - mySQL은 아래와 같은 방식으로 작성한다.
    ```
    SELECT *
    FROM table
    LIMIT 10
    OFFSET 20
    ```
    - 가장 간단한 개념이지만 확장성이 낮고 성능 문제 발생 가능성 있다.
        - 페이지 요청하는 사이 데이터 변화있을 경우 `중복 데이터`가 노출된다.
        - `ORDER BY`에 특정 row가 몇 번째 순서인지 파악하지 않고, 지정된 개수만큼 잘라냈을 때 어디에 위치한지를 파악한다. rows 가 많으면 많을수록 퍼포먼스는 성능이 떨어진다.
        - 참고 [Faster Pagination in Mysql – Why Order By With Limit and Offset is Slow?](https://www.eversql.com/faster-pagination-in-mysql-why-order-by-with-limit-and-offset-is-slow/)
        - 만약 유저가 **가장 마지막 페이지**로 이동하면...? 이라는 생각을 해야한다.

* cursor-based pagination
    - `시간 기반 커서` 또는 `고유 식별자`를 시작점으로 전달.
    - 클라이언트가 받은 마지막 row의 `다음 row`를 `n개` 요청, 응답
    - 만약 10개씩 노출되는 페이지의 가장 첫번째 페이지에 있다 가정했을 때, 가장 마지막 row는 10이다. 
    - pagination을 가장 잘 제어할 수 있는 방식.
    - MongoDB의 객체 ID(4바이트 시간 값으로 시작)은 정렬된 상태로, 커서로 쉽게 사용 가능하다.

## cursor-based pagination
* schema.js
```
type Query {
    notes: [Note!]!
    note(id:ID!):Note!
    noteFeed(cursor: String) : NoteFeed
},
type NoteFeed {
    notes: [Note]!
    cursor: String!
    hasNextPage: Boolean!
}
```
* resolvers/query.js
```
module.exports = {
    notes: async (parent, args, {models}) => {
        return await models.Note.find();
    },
    note: async (parent, args, {models}) => {
        return await models.Note.findById(args.id);
    },
    noteFeed: async (parent, {cursor}, {models}) => {
        //limit를 10으로 하드코딩
        const limit = 10;
        //hasNextPage 기본값 false로 설정
        let hasNextPage = false;
        //전달된 cursor가 없으면 기본 query는 빈 배열을 할당. 이를 통해 DB에서 최신 노트 목록을 당겨오게 됨.
        let cursorQuery = {};

        //cursor가 있으면, 쿼리가 cursor 미만의 ObjectId를 가진 노트를 탐색
        if(cursor) {
            cursorQuery = {_id: {$lt: cursor}};
        }
        //DB에서 limit + 1개의 노트를 탐색하고 최신순으로 정렬
        let notes = await models.Note.find(cursorQuery)
            .sort({_id: -1})
            .limit(limit +1);

        //노트 개수가 limit를 초과하면, hasNextPage를 true로 설정하고 notes를 limit까지 자름
        if(notes.length > limit) {
            hasNextPage = true;
            notes = notes.slice(0, 1);
        }

        //새 cursor는 피드 배열 마지막 항목의 몽고 객체 ID
        const newCursor = notes[notes.length -1]._id;

        return {
            notes,
            cursor: newCursor,
            hasNextPage
        };
    }
}
```

* playground에서 확인
```
# limit를 10개로 설정해 결과 최대 10개 출력
# 10개 넘는 노트가 있으면 hasNextPage 결과가 true
query {
  noteFeed{
    notes {
      id
      createdAt
    }
    cursor
    hasNextPage
  }
}
```

```
query {
  noteFeed(cursor:"notes의 id") {
    notes {
      id
      createdAt
    }
    cursor
    hasNextPage
  }
}
```