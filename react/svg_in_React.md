# React에서 svg 사용하기

## svg 예시
파일 경로 : images/logo.svg
```
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="50"
  viewBox="0 0 100 50"
>
  <path fill="none" stroke="#02E500" stroke-width="5" ... />
</svg>
```

## 사용법
1. img src 
일반적인 이미지 파일을 삽입할 때처럼 `<img>`태그를 이용해 `src=""`로 처리한다.
```
import Logo from 'images/logo.svg' //상대경로
<img src={Logo}>
```

단, 이 방법은 색깔과 크기를 다르게 설정해야 할 경우엔 또다른 svg 파일로 처리해야 한다.   
활용성이 떨어지는 방법.   


2. svg 컴포넌트화   

```
import { ReactComponent as Logo } from "images/logo.svg;
<Logo />;
```

* svg 스타일 변경
    - svg의 변경할 요소를 `current`로 설정한다.
```
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 100 50"
>
  <path fill="current" stroke="current" stroke-width="5" ... />
</svg>
```
```
import { ReactComponent as Logo } from "images/logo.svg;
<Logo width="50" height="25" fill="white" stroke="blue" />;
```
이제 원하는대로 크기와 색깔을 조정할 수 있다.   

3. svgr를 이용해 React component로 사용
[How to use SVGs in React](https://blog.logrocket.com/how-to-use-svgs-in-react/#:~:text=Using%20SVG%20as%20a%20component,%7D%20from%20'.%2Flogo.) 참고   

* npm을 이용해 `svgr` 설치
```
> npm install @svgr/webpack --save-dev
```

* webpack.config.js 작성
```
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  //...
};
```

* 사용
```
import Logo from "images/logo.svg;

<Logo />
```