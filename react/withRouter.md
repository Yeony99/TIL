# withRouter
직접 라우팅하지 못하는 컴포넌트에 라우팅을 포함시키려면, 리액트 라우터의 상위 컴포넌트인 withRouter를 사용해야 한다.   
사용하지 않는 컴포넌트에서도 라우트 관련 props 인 match , history , location 을 조회할 수 있도록 하는 것이 `withRouter`이다.

## 라우팅이란?
라우트는 경로, 라우팅은 경로를 찾아가는 과정이다.   
* 서울에서 부산까지 가는 경로가 많이 있듯, 라우팅은 여러개가 존재한다.
* 여러 경로 중 최적의 경로를 찾아가게끔 하는 것은 `라우팅 프로토콜`
    - 라우팅은 기준에 따라 최적의 경로가 달라진다.

## 라우팅 테이블
1. connected 
한 장비가 물리적으로 연결된 루트를 학습.   
디바이스간에 통신이 가능한 상태여야 한다.   
    * status up : 전기적 신호가 송수신 될 때
    * status down : 신호가 송수신되지 않을 때

2. static
수동으로 Router에게 필요한 Route 정보들을 입력.   
네트워크 변화에 라우터가 자동으로 반응하지 못한다.   

3. dynamic
합의된 프로토콜 규칙을 라우터가 자동으로 정보를 주고, 받아 루트를 알림.   
BGP(Border Gateway Protocol)이 이에 속한다.   

4. redistribution
dynamic 방식을 사용해 학습할 때 사용. 하나이상의 프로토콜을 나눠준다.   

## ref
[withRouter](https://reactrouter.com/web/api/withRouter)