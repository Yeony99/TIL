# JSON Web Token
사용자가 로그인이 필요한 곳에 접근할 때마다 새로 로그인 해야한다면 불편함을 초래할 것이다.   
이를 간편하게 사용하기 위해 사용자의 ID를 **기기 내의 JSON 웹 토큰, JWT(https://jwt.io)**에 안전하게 저장할 수 있다.   
`JWT`를 사용하면 사용자가 클라이언트에 요청할 때마다 서버에서 사용자를 식별할 수 있는 토큰을 전송한다.

## JWT
* 헤더
    - 토큰의 일반적인 정보 포함
    - 서명에 사용하는 알고리즘 종류 포함

* 페이로드
    - 토큰 내 저장하는 정보(사용자 이름, ID 등)

* 서명
    - 토큰을 인증하는 수단

`JWT` 모듈을 사용해 토큰 생성하고 유효성 검사한다.   
비밀번호는 주로 `.env` 파일에 저장된다.   

```
const jwt = require('jsonwebtoken');

// 사용자 ID 저장하는 JWT 생성
const generateJWT = await user => {
    return await jwt.sign({ id: user._id}, process.env.JWT_SECRET);
}

// JWT 검증
const validateJWT = await token => {
    return await jwt.verify(token, process.env.JWT_SECRET);
}
```

* localStorage
    - 토큰을  사용자의 기기에 사용자를 식별 가능한 ID를 안전하게 저장할 수 있다.
    - localStorage는 저장소가 업데이트되거나 삭제될 때까지 브라우저 세션 간에 유지되는 `키-값` 저장소
    - 단, 토큰이 localStorage에 저장되면 페이지에서 실행 가능한 모든 JS가 토큰에 접근 가능해 XSS 보안에 취약해진다.
        - 따라서 CDN 스크립트 등을 제한하는 등의 주의가 필요하다.
 
## 참고
[Authentication with GraphQL](https://www.howtographql.com/react-apollo/5-authentication/)
