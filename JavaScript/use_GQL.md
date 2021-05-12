# playground로 결과 보기
## 스키마
```
type Note {
    id: ID!
    content: String!
    author:String!
}

type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content:String!):Note!
    deleteNote(id:ID!): Boolean!
}
```
## Query 
데이터베이스에서 데이터 **읽기**

### 전체 읽기
스키마에 정의된 형태로 서버에 요청해야 한다.   
query형태로 notes를 요청하면 notes 배열이 반환된다. (없으면 빈 배열 반환)

* 작성
```
query {
  notes {
    content
    id
    author
  }
}
```

* 결과
```
{
  "data": {
    "notes": [
      {
        "content": "Hello, world!",
        "id": "부여받은 고유 아이디",
        "author": "yeony"
      },
      {
        "content": "content2!",
        "id": "부여받은 고유 아이디2",
        "author": "nayeon"
      }
    ]
  }
}
```

* 결과(등록된 데이터가 없을 경우)
```
{
  "data": {
    "notes": []
  }
}
```

### 특정 조건으로 읽기
* 작성
```
query {
  note(id:"부여받은 고유 아이디") {
    content
    id
    author
  }
}
```

* 결과 - id와 일치하는 것이 나온다.
```
{
  "data": {
    "note": {
      "content": "Hello, world!",
      "id": "부여받은 고유 아이디",
      "author": "yeon"
    }
  }
}

```

## Mutation
데이터베이스를 **수정**

### 뮤테이션
```
newNote: async (parent, args, {models}) => {
    return await models.Note.create({
        content: args.content,
        author: 'yeony'
    });
},
deleteNote: async(parent, {id}, {models}) => {
    try {
        await models.Note.findOneAndRemove({_id: id});
        return true;
    } catch (err) {
        return false;
    }
},
updateNote: async(parent, {content, id}, {models}) => {
    return await models.Note.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $set:{
                content
            }
        },
        {
            new:true
        }
    );
},

```

* 작성
```
mutation {
  updateNote(content:"new one, updated", id:"부여받은 고유 아이디"){
    content
    author
  }
}
```

* 결과
    - deleteNote 시에 삭제에 성공하면 true 반환.
```
{
  "data": {
    "updateNote": {
      "content": "new one, updated",
      "author": "yeony"
    }
  }
}
```