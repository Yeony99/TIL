# package-lock.json 
## package-lock.json이 생성되는 이유
사용자가 이미 사용하고 있던 package.json으로는 정보가 부족하기 때문이다.   
협업 시에 같은 package.json을 사용해서 개발환경을 만드는데 npm 버전이 다르거나.. 하는 경우에 `npm install` 실행해도, 다른 node_modules이 생성된다. 
`npm --version` 으로 버전 확인후 npm 버전 일치시키면 괜찮다.

## package-lock.json
node_modules의 구조, package.json이 수정/생성 등이 될 때 의존성에 대한 데이터를 가지고 만들어진다.   
노드 모듈도 이 lock 파일을 기반으로 생성되기 때문에, 뭔가 큰 문제가 있는 상황은 아니다.   