# VSCode React 코드 자동완성
리액트 개발환경을 비주얼 스튜디오 코드에서 하고 있는데, `import` 등 자동완성이 안되는 불편함이 생겼다.

## 해결
1. 자바스크립트 자동완성
settings.json 파일에 아래 코드 추가
```
 "emmet.includeLanguages": {
	    "javascript": "javascriptreact"
    }
```

2. import 자동완성
root 폴더에 jsconfig.json 파일을 생성한 후, 아래 코드 추가
```
{
  "compilerOptions": {
      "baseUrl": "./src",
      "checkJs": true,
      "jsx": "react"
   }
}
```


## Reference
[Auto Import of React Components in Visual Studio Code](https://stackoverflow.com/questions/60637561/auto-import-of-react-components-in-visual-studio-code)
