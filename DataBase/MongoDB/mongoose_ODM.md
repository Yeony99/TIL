# mongoose ODM 
> Object Document Mapper
API 애플리케이션과 DB를 연결. Node.js 기반.
## 몽구스란?
* 스키마 기반 모델링 솔루션
* boilerplate code (관용구) 줄여 간소화
* node.js 에서 몽고와 쉽게 연동할 수 있도록 하는 라이브러리
* 데이터베이스 쿼리 및 데이터의 유효성 검사 도구 제공

## 과정
### `.env` 파일 변경
1. 로컬 데이터베이스 접속 URL로 변경 
2. 로컬 몽고 서버 디폴트 URL : mongodb://localhost:27017/databaseName
.env 파일 내에서 몽고 인스턴스 URL을 `DB_HOST` 변수에 할당.
```
DB_HOST = mongodb://localhost:27017/yourDBName
```

### src/db.js 작성
1. 데이터베이스 연결 및 종료 기능 작성
```
//몽구스 라이브러리 요청
const mongoose = require('mongoose');

module.exports = {
    connect: DB_HOST => {
        //몽고 드라이버의 업데이터된 URL 스프링 파서 사용
        mongoose.set('useNewUrlParser', true);

        //findAndModify() 대신 findOndAndUpdate() 사용
        mongoose.set('useFindAndModify', false);

        //ensureIndex() 대신 createIndex() 사용
        mongoose.set('useCreateIndex', true);

        //새로운 서버 디스커버리 및 모니터링 엔진 사용
        mongoose.set('useUnifiedTopology', true);

        //DB에 연결
        mongoose.connect(DB_HOST);

        //연결 실패시 에러 로깅
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log(
                'MongoDB connection error. MongoDB가 작동 중인지 확인해주세요.'
            );
            process.exit();
        })
    },
    close: () => {
        mongoose.connection.close();
    }
};

```

2. `index.js` 수정
작업환경 src/index.js 를 수정한다.
`.env` 설정파일, `db.js`파일 import
```
require('dotenv').config();
const db = require('/db');
```
`.env` 설정 값 변수에 저장
```
const DB_HOST = process.env.DB_HOST;
```
데이터베이스 연결코드 호출
```
db.connect(DB_HOST);
```
### playground에서 id 확인
```
mutation {
  newNote (content :"This is a note in our database") {
    content
    author
    id
  }
}
```
위 쿼리를 실행하면, 몽고에 의해 부여된 ID를 확인할 수 있다.

### playground에서 id 이용해 특정 notes 가져오기
- findbyId를 이용한다.
```
//index.js
note: async (parent, args) => {
    return await models.Note.findById(args.id);
  }
},
```
playground에서 아래 쿼리를 실행하면 입력한 content과 author가 함께 출력된다.   
```
query{
  note(id: "부여받은 id값") {
    id
    content
    author
  }
}
```

### index.js
```
// index.js
// This is the main entry point of our application

const express = require('express');
//get apollo-server
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const db = require('/db');
const port = process.env.PORT || 4000; //명시적으로 포트번호 지정하지 않으면 예비 포트 4000번이 지정.
const DB_HOST = process.env.DB_HOST;

//API에서 제공하는 기본 데이터로 사용할 배열 - id, content, author
/*
//확인
let notes = [
  {id: '1', content: 'This is a note', author:'Yeony Kim'},
  {id: '2', content: 'This is another note', author: 'Nayeon Kim'},
  {id: '3', content: 'another note again!', author: 'yeony99'}
];
*/


//기본 그래프 QL 애플리케이션 설정 
//GQL API 적용 - 스키마
const typeDefs = gql`
type Query {
  hello: String!
  notes: [Note!]!
  note(id: ID!): Note!
}
  type Note {
    id: ID!
    content: String!
    author:String!
  }
  `;
  
  //리졸버 함수
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      notes: () => notes,
      note: (parent, args) => {
          return notes. find(note => note.id === args.id);
        }
      }
};

const app = express();

//DB 연결
db.connect(DB_HOST);

//아폴로 서버 설정
const server = new ApolloServer({ typeDefs, resolvers });

// 아폴로 그래프 QL 미들웨어를 적용하고 경로를 /api로 설정
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
console.log(
  `GraphQL server running at http://localhost:${port}${server.graphqlPath}`
  )
);
```
