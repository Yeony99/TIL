# graph QL

## graph QL이란?
graph QL은 REST API의 어려움을 해결하기 위해 사용된다.
기존 REST API는 url에서 요청을 보내면 응답으로 JSON, XML이 넘어온다.
이 방식에는 큰 단점이 있는데, 이미 보내지기로 정해진 응답만을 가져올 수 있다는 것이다.
마치 도서관에서 하나의 책만 찾으면 되는데, 그 책이 속한 서가, 그리고 그 서가의 모든 책을 함께 가져올 수 밖에 없는 것이다.

다시말해, 필요없는 정보까지 데이터로 전송이 된다.
이에 반해 Graph QL은 **원하는 정보**만을 요청 -> 응답하는 과정이 가능하다.

## Apollo Server
GraphQL서버는 Node.js를 기반으로 작동한다. Node.js에서는 Express를 통해 이것이 가능한데, Apollo 서버 패키지를 이용해서 이를 좀더 간편하게 할 수 있다.
[아폴로서버](https://oreil/ly/1fNt3)
Node.js 애프리케이션에서 그래프QL API로 데이터를 제공하며, **플레이그라운드**같은 도구까지 제공한다.

###### index.js 에서 작성
```
const express = require('express');
//get apollo-server
const { ApolloServer, gql } = require('apollo-server-express');
const port = process.env.PORT || 4000; //명시적으로 포트번호 지정하지 않으면 예비 포트 4000번이 지정
```

## 스키마 / 리졸버
### schema
스키마는 사용자가 할 행위를 정의한 것이다. 
그래프QL 서버는 query와 mutation을 가지는데, 이들이 어떤 것인지를 명시하는 게 스키마이다.

```
// 그래프 QL스키마 언어로 스키마 구성
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;
```

### resolvers
리졸버는 클라이언트가 요청한 query를 실행하기 위해 필요한 것이다.
사용자가 특정 쿼리를 보내면 밑 처럼 `Hello world!`를 return하라고 정의할 수 있다. (REST API의 url 정의와 같다.)
```
const resolvers = {
    Query: {
        sayHello: () => 'Hello world!'
    }
};
```

쿼리와 리졸버를 설정했으면 아폴로 서버를 설정하고, `http://localhost:4000/api`로 이동해 playground가 실행되는지 확인한다.
```
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

## query /  mutation
간단하게 말하면, 아래와 같다.
query : 데이터베이스에서 정보 가져오기
mutation : 정보 변경하기

## 참고하면 좋은 설명
[GraphQL이 뭔가요?](https://www.youtube.com/watch?v=EkWI6Ru8lFQ&t=448s)