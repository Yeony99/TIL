# Deep Selector in Vue

## scoped
vue에서 `<style scoped>`를 주면 해당 컴포넌트 안에서만 스타일 속성이 주어진다.
```
<button class="btn" data-v-e1123455> <!--요소에 식별값이 붙음-->
</button>

...

.btn[data-v-e1123455]:hover {

}
```   
이런 방식으로 특정 vue 컴포넌트의 특정 요소에 지정되어 다른 컴포넌트에는 영향을 끼치지 않는다.   
`scoped`를 붙이지 않으면 글로벌하게 적용된다.

## deep
`<style scoped>`는 하위 컴포넌트에까지 영향을 끼치진 않는다.   
만약 한 컴포넌트에 포함된 하위 컴포넌트까지 스타일을 적용하고 싶다면,   
`deep` selector를 사용해야 한다.

```
// Vue2 
/deep/ {}   // deprecated
::v-deep    // Sass
>>>         // without Sass

// Vue3
/deep/ {}   // deprecated
>>>         // deprecated
::v-deep    // for all child
::v-slotted // for <slot>
::v-global  // for scoped component (컴포넌트 내)
```
