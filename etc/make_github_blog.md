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
    - 터미널에서 `gatsby new Blog`
    - info로 `Your new Gatsby site has been successfully bootstrapped` 메시지를 확인할 수 있다.
    - `cd Blog`
    - `gatsby develop` 후 success Building development bundle 메시지 확인 가능.
    - http://localhost:8000 접속해 Gatsby Default Starter 페이지 확인


## pages 
블로그 폴더 안에는 주 작업장소인 src 폴더가 있다.   
그 안 `pages` 폴더 속 index.js 파일이 localhost 창을 띄웠을 때 나타나는 페이지이다.   
해당 폴더 속 `.js`파일들은 자동으로 페이지가 된다.
개츠비는 기본적으로 JSX를 사용하기 위해 React를 import하고 있다.   

