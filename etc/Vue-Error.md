# Vue.js 에러

## These dependencies were not found
> 평소와 다름없이 npm run serve를 하는데, 위와 같은 에러 발생
### 원인
아마도 [core-js module error](https://github.com/vuejs/vue-cli/issues/3678) 이것이 원인이었던 듯 하다.

### 해결
`barbel.config.js` 파일을 아래와 같이 수정

```
module.exports = {
    presets: [
        [ "@vue/app", { useBuiltIns: "entry" } ]
    ]
}
```