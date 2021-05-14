# 사용자 계정 인증 (with GraphQL)

## 애플리케이션 인증 흐름

### 계정 생성
1. 사용자 : UI에 `이메일`, `이름`, `비밀번호` 입력
2. UI :  입력된 정보를 GraphQL과 함께 서버로 전송
3. 서버 : 비밀번호 암호화, 사용자 정보 DB 저장
4. 서버 : 사용자 ID 포함한 토큰 UI에 return
5. UI : 일정 시간동안 토큰 저장 & 사용자가 요청할 때마다 요청과 함께 토큰 서버로 전송(=사용자 확인)

### 사용자 로그인
1. 사용자 : `이메일`, `이름`, `비밀번호` UI에 입력
2. UI :  입력된 정보를 GraphQL과 함께 서버로 전송
3. 서버 : DB에 저장된 비밀번호를 **해독**해 사용자가 입력한 비밀번호와 **비교**
4. 서버 : **비밀번호 일치 시** 사용자 ID가 포함된 토큰 UI로 return
5. UI : 일정 시간동안 토큰 저장 & 모든 요청과 함께 서버로 전송


## 암호화
* hashing(해싱)
    - 텍스트 문자열을 임의의 문자열로 바꿔 텍스트 문자열을 암호화하는 것.
    - 해싱은 **단방향** (원래 문자열로 되돌릴 수 없음)
    - 즉, 비밀번호 해싱 후에는 비밀번호의 원래 텍스트(평문)은 DB에 저장되지 않음.
* salting(솔팅)
    - 해싱을 거친 비밀번호와 함께 사용될 임의의 데이터 문자열 생성하는 것.
    - 만약 같은 비밀번호를 사용하더라도 해시된 암호와 솔트가 같이 제공되어 구별된다.
    - 즉, 같은 `1234` 비밀번호가 2개여도 솔팅을 거친 비밀번호는 `해싱된비밀번호+솔트`로 유일한 값을 갖게 된다.

### 예시

* 솔팅, 해싱 처리 함수
bcrypt 모듈이 필요하다. 
```
//모듈 요청
const bcrypt = require('bcrypt');

//데이터 솔팅 위한 상수(기본 10)
const saltRounds = 10;

// 해싱, 솔팅을 위한 함수
const passwordEncrypt = async password = {
    return await bcrypt.hash(password, saltRounds)
};
```

* 사용자 입력 비밀번호 확인 
```
//비밀번호 = 사용자가 입력한 값
//DB에서 해싱 결과 수신
const checkPassword = async (plainTextPassword, hashedPassword) => {
    //result = true or false
    return await bcrypt.compare(hashedPassword, plainTextPassword)
};
```

