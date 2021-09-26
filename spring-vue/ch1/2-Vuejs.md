# Vue.js

## Vue 인스턴스
* 루트 Vue 인스턴트
  * `new Vue({   })
  * 객체 리터럴 사용해 data 추가
  ```
  let vm = new Vue({
      el: '#app'
      data: {
          
      }
  })
  ```
  ```
  let vm = new Vue({
      el: '#app'
      data () {
          return {

          }
      }
  })
  ```

## 컴포넌트
* 코드 재사용하는 기본적인 방법
* 컴포넌트를 전체 애플리케이션에서 활용할 수 있게 전역으로 등록 가능
  * `Vue.component(id, [definition])

## Vue 인스턴스 라이프 사이클
> 무엇을 사용해야할 지 고민을 해봐야 할 것 같다...

* beforeCreate : 인스턴스 내부 이벤트, 라이프 사이클 상태가 초기화된 후 호출
* created : 인스턴스 주입과 반응형 시스템이 초기화된 후에 호출.
  * 인스턴스는 기능 수행하지만 DOM은 업뎃되지 않음
* beforeMount : Vue.js가 템플릿 컴파일 마치고 -> 생성된 DOM을 렌더링할 준비가 된 후에 호출
* mounted : DOM이 업데이트된 후에 호출. 
  * 사용자는 UI와 상호작용 할 수 있으며, 인스턴스는 완전한 기능 수행
* beforeUpdate : 데이터 변경된 이후, DOM이 업데이트되기 전에 호출.
  * 진행 도중 데이터 변경 가능
  * 또 변경 시 추가적 DOM 업데이트 트리거 x
* updated : DOM이 데이터 변경 사항을 기반으로 업뎃된 후 호출
* activated : keep-alive 컴포넌트 활성화될 때 호출
* deactivated: keep-alive 컴포넌트가 비활성화될 때 호출
* beforeDestroy : 인스턴스가 파괴되기 전에 호출.
* destroyed : 인스턴스가 파괴(?!)된 후에 호출.
  * 인스턴스의 모든 지시자 바인딩 해제, 모든 이벤트 리스너 제거, 모든 하위 Vue 인스턴스 파괴
* errorCaptured : 자손 컴포넌트에서 에러가 검출될 때마다 호출

### keep-alive
> ~~도대체 keep-alive가 뭘까...~~   
* keep-alive 는 컴포넌트를 상태를 보존할 때 사용
* keep-alive를 사용하면 컴포넌트 인스턴스가 전역 큐에 저장
* 활성화 될 때는 기존 컴포넌트를 사용하여 activated 라이프 사이클 hook이 호출
* 비활성화시에는 인스턴스를 소멸시키지 않고 deactivated 라이프사이클 hook이 호출

~~활용할 수 있을 것 같은 예시~~ [keep-alive예제](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jhc9639&logNo=221112423557) 20211013 추가

## 지시자 
`v-for`나 `v-on`등의 지시자처럼 사용자가 정의해서 지시자를 생성할 수 있다.
* `Vue.directive()`를 이용
  * 훅 함수를 추가 가능하다
    * bind: 지시자가 처음 요소에 바인딩 됐을 때 **한 번** 호출
    * inserted: 바인딩 된 요소가 부모 노드에 삽입됐을 때 호출 (단, 이 때 부모 노드는 DOM에 없을 수도...)
    * update: 포함하는 컴포넌트의 VNode가 업데이트됐을 때 호출 (단, 자식 컴포넌트의 VNode가 업데이트되기 전에 호출 가능)
    * componentUpdated: 컴포넌트의 VNode와 자식 컴포넌트의 것도 업데이트된 후에 호출
    * unbind: 요소에서 지시자의 바인딩이 해제될 때 한 번만 호출
* 예시
```
Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
})

// https://vuejs.org/v2/guide/custom-directive.html
```

## 플러그인
> Vue.js 에서 플러그인 만들기...
* install() 메소드를 가지는 일반 객체 만든다
~~플러그인을 만드는 방법은 나중에 보자~~