# Github Profile 꾸미기

## overview Readmd.md
깃허브 메인 화면에 예쁜 프로필을 설정할 수 있는 방법.   
1. 사용자 이름과 똑같이 repository를 생성한다.    
`Add a README file` 옵션을 선택한다.

![make repository](https://user-images.githubusercontent.com/76241233/121770705-df388e00-cba5-11eb-8228-a96df8e51c6f.png)

2. You found a secret! 를 발견할 수 있다.
3. README.md를 취향에 맞게 수정한다.

* 뱃지
    - [shields.io 뱃지](https://shields.io/)
    - [simpleicons 아이콘](https://simpleicons.org/)
```
http://img.shields.io/badge/-BadgeName-HexColorCode?style=flat&logo=LogoIconName&link=Link
```
Hexcode는 `#000000`이 아닌, `000000`으로 기입한다.
* hits count
    - [hits.seeyoufarm](https://hits.seeyoufarm.com/)
* capsule-render 
    - [capsule-render](https://github.com/kyechan99/capsule-render)

### "." 이 들어간 스택의 경우
`Node.js` 같은 경우, 어떻게 해야 할지 조금 헤맸다.   
Node.js나 Vue.js처럼 dot가 들어간 경우는 아래와 같이 하면 된다.    
```
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node-dot-js&logoColor=white)]()
```

## 참고

[Managing your profile README](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)

[How to make custom language badges for your profile using shields.io](https://javascript.plainenglish.io/how-to-make-custom-language-badges-for-your-profile-using-shields-io-d2aeaf016b6b)