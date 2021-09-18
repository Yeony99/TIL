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