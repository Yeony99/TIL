# GraphQL Error - solved
GraphQL을 사용하며 발생한 에러와 해결법 작성.   

* Error : `the Object Name` defined in resolvers, but not in schema
    - `schema`파일에 정의한 `type Mutation`의 object와 `mutation`이 일치하는지 확인한다.
    - 대소문자도 구분하니 이름이 일치하는지 확인한다.
```
 type Mutation {
        newNote(content: String!): Note!
        .
        .
        .
    }
```
```
module.exports = {
    newNote: async (parent, args, {models}) => {
        return await models.Note.create({
            content: args.content,
            author: 'yeon'
        });
    },
    .
    .
    .
```

* Error : Cannot find module `bcrypt`
    - `mutation.js` 파일에서 `const bcryptjs = require('bcryptjs');`으로 모듈을 불러왔더니 발생한 오류.
    - 아래는 실패한 방법들

1. npm install bcrypt --save
```
> npm install node-gyp -g
> npm install bcrypt -g

> npm install bcrypt --save
```

2. npm rebuild
```
> npm rebuild
```

3. npm install --save bcrypt-nodejs
```
> npm install --save bcrypt-nodejs
> npm uninstall --save bcrypt
```

4. npm install --global --production windows-build-tools
명령 프롬프트가 계속 멈추는 issue가 있는 듯 하다. 
```
관리자 모드
> npm install --global --production windows-build-tools

콘솔
> npm i bcrypt
```

5. npm install bcrypt --build-from-source
```
npm install bcrypt --build-from-source
```

<hr>
해결 : bcryptjs 사용 (not bcrypt)   
bcrypt는 해시 암호 생성 과정이 bcryptjs 3.1배 빠르고, 기능 비교에서 1.3배 빠르다.   
하지만 적용 자체가 되지 않아 bcryptjs로 사용하기로 결정.   
사용 방법 자체는 같다.
```
npm install --save bcryptjs
```
