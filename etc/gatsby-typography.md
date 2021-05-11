# typography 플러그인

## utils/typography.js 생성
설정을 관리하는 utils폴더를 생성한 후, typography를 지정하는 js파일을 작성한다.   

```
import Typography from "typography" //타이포그래피를 지정위해 import

// 테마 설치 시 : 설치한 typography plugin으로부터 fairyGateTheme import
//import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({ //typography 객체 생성
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})

export default typography
```
위와 같은 느낌으로 작성하면 된다.   

## API - Configuration (간단한 번역)
> When creating a new instance of Typography, you can pass in an configuration object. All configuration keys are optional.
> 타이포그래피의 객체 생성 시, configuration object를 넘길 수 있다. 모든 key는 선택적이다.   
설정이 뭐가 있는지 기억 안날 때가 있어서 찾기 편하게 정리.

* title : 테마 title
* baseFontSize : 기본 폰트 사이즈 (pixel 단위). 디폴트 `16px`
* baseLineHeight : 기본 base line height.(줄간격) 기본 `1.5`
* scaleRatio : `h1`과`baseFontSize` 사이의 비율이다. 만약 비율이 2이고 baseFontSize가 16px이면, h1의 크기는 32px가 된다.   
* googleFonts : 프로젝트에 사용할 구글 폰트를 정의한 배열
```
googleFonts: [
  {
    name: 'Montserrat',
    styles: [
      '700',
    ],
  },
  {
    name: 'Merriweather',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
],
```
* headerFontFamily : header에 사용할 폰트를 정의한 문자열 배열. 기본값은 시스템 글꼴.
* bodyFontFamily : body에 사용할 폰트를 정의한 문자열 배열. 기본값은 `['georgia', 'serif']`
* headerColor : header에 적용되는 css 색상. 기본값은 `inherit`
* bodyColor : body에 적용되는 css 색상. 기본값은 `hsl(0, 0%, 0.8)`.
* headerWeight : header에 적용되는 font-weight. 기본값은 `bold`
* bodyWeight : body에 적용되는 font-weight. 기본값은 `normal`
* blockMarginBottom : block에 적용되는 기본 margin-bottom 값. 기본값은 "rhythm unit"
* includeNormalize : Normlaize.css 파일을 포함하는 것. 해당 파일은 브라우저 전체에서 기본 브라우저 css를 정규화하는 것이며, Typography.js의 좋은 기초가 된다. css는 기본적으로 제공되지만, 프로젝트 다른 곳에 이미 포함되어 있는 경우, false를 전달해 포함하지 않을 수 있다.
* overrideStyles : 자동 생성된 스타일을 직접 추가하거나 재정의하기 위해 필요한 API. Vertical Rhythm 객체, 옵션 객체, 알고리즘적으로 생성된 style을 사용해 호출된다.
```
overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  h1: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  blockquote: {
    ...adjustFontSizeTo('19px'),
    color: gray(41),
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1),
    borderLeft: `${rhythm(3/16)} solid ${gray(10)}`,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
})
```
* overrideThemeStyles : overrideStyles와 함수 시그니처(*함수 원형에 명시되는 매개변수 리스트)가 동일하지만, 제3 테마를 사용할 때는 테마 자체의 overrideStyles 기능을 삭제하지 않도록 overrideStyles 대신 사용한다.

## ref
[typography](https://kyleamathews.github.io/typography.js/)