# make github blog (with Gatsby)
틀린 부분이 많을 수도 있는 우당탕탕 TIL 블로그 만들기.   

## Why Gatsby?
블로그를 만들 때 여러 선택지가 있었다. 가장 많이들 쓰는 Jekyll부터 hugo 등.   
하지만 요새 특히 관심 갖고 있는 것들에 개츠비가 기반을 두고 있었기 때문에 이를 선택했다.   
Gatsby는 static site generReact-based이며, GraphQL 기반이다. 공부하려고 선택했다는 게 더 맞는 표현일 듯 싶다..

## 기본 설정
* Git 설치
* repository 생성
    - github에 username.github.io 레파지토리 생성
    - git clone `https://username.github.io.git`
* Node.js 설치
    - npm이 이미 설치되어 있다면, cmd에서 `npm init` 한 후 package.json 생성
    - 설치할 프로젝트에 `npm install module --save` 
* VSCode 설치 (Atom도 프론트 개발에 많이 사용된다.)
* Gatsby Cli 설치
    - Node.js를 설치한 이후에 한다.
    - 프로젝트 내에서 `npm install -g gatsby-cli`
* Gatsby site 생성
    - 조금 시간이 걸린다.
    - 터미널에서 `gatsby new blog(폴더명)`
    - info로 `Your new Gatsby site has been successfully bootstrapped` 메시지를 확인할 수 있다.
    - `cd blog`
    - `gatsby develop` 후 success Building development bundle 메시지 확인 가능.
    - http://localhost:8000 접속해 Gatsby Default Starter 페이지 확인

## 폴더 살펴보기
### pages 
블로그 폴더 안에는 주 작업장소인 src 폴더가 있다.   
그 안 `pages` 폴더 속 index.js 파일이 localhost 창을 띄웠을 때 나타나는 페이지이다.   
해당 폴더 속 `.js`파일들은 자동으로 페이지가 된다.
개츠비는 기본적으로 JSX를 사용하기 위해 React를 import하고 있다.   

### components
리액트 기반이기 때문에 컴포넌트를 재사용할 수 있다.    
index.js에는 `import Layout from "../components/layout"`처럼 컴포넌트의 layout이 import되어있다.    
header.js 와 같은 경우에는 header 부분을 작성해 컴포넌트를 다른 웹페이지에서 불러와 사용할 수 있게끔 한다.   
React를 사용하니 jsx가 좀더 맞는 말일 듯 하다.   

### Link
페이지 이동이다. 개츠비 개발환경을 구축하면 자동으로 들어가는 index.js에도 이미 Link가 있다.   
```
<Link to="/page-2/">Go to page 2</Link> <br />
```
pages폴더 안 page-2.js로 연결된다.   

## deploy
React 공식에서도 사용하는 Netlify랑 고민을 했는데, Gatsby 튜토리얼 등에서 설명하는 Surge가 굉장히 간편해보였다. Surge로 선택.   

1. Surge 설치
```
> npm install --global surge
```

2. Surge 로그인(가입)
```
> surge login
> (이메일)
> (비밀번호)
```
자동으로 가입된다.

3. gatsby를 적용한 최상위 폴더에서 빌드
```
> gatsby build
```

4. public 폴더 확인
```
> ls public
```

5. publishing 
```
> surge public/
```

6. 주의아닌 주의
`Running as (본인 이메일)` 이 뜬다. 그리고 각자 부여받은 domain도 확인 가능하다.   
여기서 순간 끝난 줄 알고 도메인으로 이동을 했는데 project not found가 떴다.   
절대 이슈라든가 그런 게 아니라, 아직 publishing과정이 덜 끝난 것이다. enter 누르면 성공적으로 끝난다. 찾아봤다가 비슷한 사람들이 꽤 많은 걸 알게 됐다..

7. domain 접속 확인
받은 도메인에 연결이 잘 되는 것을 확인할 수 있다. pc가 아니여도 된다.   


## 깃허브 도메인으로 변경
블로그를 username으로 된 repository에 만들고 있다. username.github.io 같은 주소가 나오도록 surge를 통해 받은 도메인을 변경한다.    

1. 브랜치 생성   
생성과 체크아웃(main 브랜치에서 이동)을 동시에 처리한다.   
나는 `page` 브랜치를 사용하기로 했다.
```
git checkout -b page
```

2. 브랜치에 push   
처음 push하고, 로컬에서 브랜치를 새로 생성한 경우에는 아래 명령어를 사용한다.
```
git push --set-upstream origin page
```

3. gh-pages install
```
npm install gh-pages --save-dev
```

#### cf) Deprecated Solution
`npm-install-peers`   
`npm install -g npm-install-peers`   

updated solution is `npm install --save-dev`

4. package.json - scripts에 deploy 설정 추가   
```
"scripts": {
        "deploy": "gatsby build && gh-pages -d public -b main"
    }
```

5. npm run deploy
```
npm run deploy
```

6. Published 확인
public 폴더 내 static 파일 생긴다.   
해당 파일들이 master 브랜치에 이동되고 github에서 확인할 수 있다.


## css 적용
주 작업 폴더인 `src` 밑에는 기본적으로 생성된 `components`, `images`, `pages`가 있다.   
1. src 아래에 css 효과를 주고 파일을 분리시킬 폴더 `styles`를 하나 만든다.   
2. 해당 폴더 내에 global.css파일 하나를 생성한다. (test 코드 작성)
3. `gatsby-browser.js` 파일에 해당 css 경로를 추가한다.
```
import "./src/styles/global.css"
```
4. css 효과를 테스트.

#### cf) What is gatsby-browser.js?
> The file gatsby-browser.js lets you respond to Gatsby-specific events within the browser, and wrap your page components in additional global components.
> gatsby-browser.js 파일을 이용하면 브라우저 내의 gatsby 이벤트에 응답할 수 있고, 부가적인 전역 컴포넌트로 페이지 구성요소를 랩핑할 수 있다.

