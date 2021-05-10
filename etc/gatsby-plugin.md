# gatsby plugin
## 플러그인 설치
typography 플러그인을 설치해보는 과정.
```
> npm install gatsby-plugin-typography react-typography typography
```
터미널에서 install 한 후, `gatsby-config.js`파일을 생성한다.   

## gatsby-config.js 수정
gatsby-browser.js 파일처럼 gatsby가 인식하는 파일이다.   
```
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

## ref
[gatsby-plugin-typography](https://www.gatsbyjs.com/plugins/gatsby-plugin-typography/?=typo)   
