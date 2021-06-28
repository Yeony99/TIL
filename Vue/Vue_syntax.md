# vue의 문법

## Vue 인스턴스
Vue 공식 가이드의 인스턴스 부분은 이렇게 시작한다.   
> 모든 Vue 앱은 `Vue`함수로 새 Vue 인스턴스를 만드는 것부터 시작합니다.
Vue로 개발하려면 이런 인스턴스를 만드는 것부터 시작해야 한다.

```
var vm = new Vue({
    //옵션
})
```
```
new Vue({
    el: "#print",
    data: {
        text: 'hello Vue!'
    },
})
```

## 옵션

### el 
인스턴스 생성시 el 옵션을 사용할 수 있다. 위의 인스턴스 생성에서도 대략 알 수 있듯,    `el`이라 함은 Vue가 실행할 HTML의 DOM요소를 지정하는 것이다.    
el을 지정할 때는 CSS의 선택자처럼 사용하면 된다.
```
el : {
    #selector
}
```

### data
Vue의 data객체. 

```
data : {
    name : 'yeony',
    age : 23
}
```
### 데이터 표기법
Vue에 데이터를 표기할 때는 `{{데이터}}`로 표현한다.
```
<div id="selector"> <!--el -->
    <p>{{name}}</p> <!-- data 속 name. 출력 yeony -->
</div>
```

### computed
함수로 정의한다.   
data객체 등을 사용하고 계산된 값을 return.   
요청이 다시 오면 이미 계산된 값을 return.
단, 화살표함수는 사용 불가능하다.
```
computed : {
    sum : function() {
        return 1+2
    }
}
```
### methods
computed와 비슷한 옵션이다.    
하지만 computed와 달리 요청이 올 때마다 함수를 실행한다.   
마찬가지로 화살표함수는 사용 불가능하다.
```
methods : {
    sum : function() {
        return 1+2
    }
}
```

### watch 
말 그대로 지켜보는 옵션이다.   
지정된 변수를 계속 지켜보고 있다, 값이 변경되면 미리 정의해둔 함수를 실행시킨다.   
긴 시간이 요구되는 비동기 처리(axios, fetch) 시에 사용된다.   
```
watch : {
    x : function(i) { //x : 관찰할 변수
        return i++
    }
}
```

## `v-` 디렉티브
디렉티브는 Vue에서 HTML요소에 대해 실행하는 명령어다.   
Vue 인스턴스가 즉시 컴파일된다.

### v-text
데이터를 표현할 때 `{{프로퍼티 이름}}`으로 표현할 수 있다.   
이 방식을 `v-text`로도 표현할 수 있다.    
```
<div>
    <p v-text="name"></p>
</div>
```

### v-html
`v-text`가 프로퍼티를 **텍스트**로 표시한다면, `v-html`은 html요소로 표현한다.   
```
<body>
    <h2>HTML로 표시하는 예제</h2>
    <div id="app">
        <p>{{ myProperty}}</p>
        <p v-text="myProperty"></p> <!-- 출력 : <h1>Hello, Vue</h1> -->
        <p v-html="myProperty"></p> <!-- 출력 : Hello, Vue 가 h1크기로 표시.-->
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                myProperty:'<h1>Hello, Vue</h1>'
            }
        })
    </script>
</body>
```

### v-bind
태그의 속성을 Vue에서 지정할 수 있는 디렉티브다.   
v-bind로 선언할 경우 동적으로 반영된다.    

```
<body>
    <h2>HTML로 표시하는 예제</h2>
    <div id="app">
        <input :type='type1'> <!--v-bind 생략 가능하다.-->
        <input v-bind:type='type2'> 
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                type1:'text',
                type2:'radio'
            }
        })
    </script>
</body>
```
혹은 input의 입력값을 저장할 수도 있다.

```
<body>
    <div id="app">
        <!--input 입력값 저장(바로 반영)-->
        <input v-model = "input1">
        <p>input1 : {{input1}}</p> 

        <!--lazy 입력값 저장(포커스 이동 시 프로퍼티에 반영)-->
        <input v-model.lazy = "input2">
        <p>input1 : {{input2}}</p>

        <!--checkbox가 false(체크x)면 button이 disabled -->
        <input type="checkbox" v-model="checkbox" value="Y">
        <button v-bind:disabled="checkbox_model === false">disabled</button>
        <p>checkbox model : {{checkbox_model}}</p>

        <!--라디오 프로퍼티 저장-->
        <!--라디오를 클릭할 때 p태그 속에 선택된 radio의 value값 배열로 노출-->
        <input type="radio" v-model="radioM" value="test1">
        <input type="radio" v-model="radioM" value="test2">
        <input type="radio" v-model="radioM" value="test3">
        <p>radio model : {{radio_model}}</p>
    </div>
    <script>
      new Vue({
        el: '#app',
        data: {
          input1:'',
          input2:'',
          checkbox:false,
          radioM:''
        }
      })
    </script>
</body>

```

### v-model
v-bind가 동적으로 반영된다면, v-model은 정적인 문자열을 넣을 때 사용하기 좋다.   

### v-on
이벤트메소드와 연결할 수 있다.
`v-on`대신 `@`로 간편하게 표현할 수 있다.   

```
<body>
    <div id="app">
      <!--v-on:click = "method name"-->
      <button v-on:click="countUp">+1</button>
      <p>{{ count }}</p>

      <button :disabled="click" v-on:click="oneClick">only one</button>
      <p>{{ text }}</p>

      <!--함수 param전달-->
      <button v-on:click="paramClick(10)">+10</button>
      <p>{{ tenCount }}</p>

      <!--포커스 상태에서 keyup이벤트 등록 (특정 키 누를 때)-->
      <input v-on:keyup.enter="alertClick">
    </div>

    <script>
      new Vue({
        el: '#app',
        data: {
          count:0,
          click:false,
          text:"",
          tenCount:0
        },
        methods: {
          plusOne() {
            this.count++;
          },
          oneClick() {
            this.click = true;
            this.text = "click";
          },
          paramClick(num) {
            this.tenCount += 10;
          },
          alertClick() {
            alert("enter");
          }
        }
      })
    </script>
  </body>
```

### v-if & v-for
`v-if`같은 경우는 반드시 마지막에 `v-else`가 있어야 오류가 나지 않는다.
```
<tr v-for="(body, index) in bodys" v-bind:key="index"> 
    <td v-for="(value, key) in body" v-bind:key="key" v-bind:class=value.type > 
        <div v-if="key%2 === 0" >{{value.value}}</div> 
        <div v-else>{{value.value}}</div> 
    </td>
</tr>
```


## Reference
[Vue 공식문서](https://kr.vuejs.org/index.html)   
https://junho94.tistory.com/19   