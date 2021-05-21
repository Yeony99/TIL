# React Context
## React Context란?
context는 React 컴포넌트 트리 내에서 전역 데이터를 공유할 수 있도록 사용되는 방법이다.   
> React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it 
> 리액트 context는 정보를 중앙에 저장하고, 모든 component에 접근할 수 있도록 하여 정보를 어떤 component이든 정보를 공유할 수 있도록 한다.
일반적으로 리액트는 상->하로 context를 사용하면 단계마다 props를 넘기지 않아도 된다. 

### Props Drilling
피해야할 작성법이다. 상위 컴포넌트하나와 하위 컴포넌트 A, B, C가 있을 때, A, B에는 필요없지만 C에게 데이터를 전달하기 위해 props를 A -> B -> C 처럼 상하 **의존적**으로 구성하는 것이다.   
이를 해결하기 위해 **전역**에서 관리할 수 있는 Context를 도입한 것이다.   


## React Context
props drilling과 비교해본다. props drilling은 방문을 열고, 열고, 열고 최종 목적지에 도착하는 것이라면, React Context는 문을 통하는 것과 상관없이 원하는 목적지에 바로 정보를 전달하는 것이다.   

### context 생성
context를 만들기 위해서는 createContext 메소드를 사용한다.   
기본적으로 매개 변수를 허용한다.   
```
import React from "react"
const newContext = createContext();

const App = () => {
    const user = {
        name: 'Yeony',
        idAdmin: true
    }

    return (
        <newContext.Provider value={user}/>
    )
}
```
`Context.Consumer`보다 `useContext`를 이용하는 게 더 직관적인 듯 하다.   
밑은 다뉴님 예제. 
```

// 0. AppContext 생성
const AppContext = createContext()

const App = () => {
    const user = {
        nickname: 'danuel',
        isAdmin: true
    }

    return (
        <AppContext.Provider value={user}>
            <div>
                <Posts />
            </div>
        </AppContext.Provider>
    )
}

// 1. PostsContext 생성
const PostsContext = createContext()

const Posts = () => {
    const posts = [
        {
            title: 'useContext 알아보기',
            content: '이번 편에서는 React Context를 ...'
        }
    ]

    return (
        <PostsContext.Provider value={posts}>
            <Children />
        </PostsContext.Provider>
    )
}

// 2. user와 posts를 가져와 화면에 보여주기
const Children = () => {
    const user = useContext(AppContext)
    const posts = useContext(PostsContext)

    let label = 'user'
    if (user.isAdmin) {
        label = 'admin'
    }

    return (
        <div>
            <div>{label}</div>
            <div>{user.nickname}</div>
            <div>{posts.map((post, index) => (
                <div key={index}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}
            </div>
        </div>
    )
}
```


### 주로 사용하는 경우
컴포넌트가 서브 컴포넌트를 가질 때 주로 사용한다.    
창을 띄우는 Modal 컴포넌트의 경우(alert, confirm 창 등), context가 필요하다. Modal이 open되어있는 상태가 컴포넌트 내부에서 공유되어야 하기 때문.   
