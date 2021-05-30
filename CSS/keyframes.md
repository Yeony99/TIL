# @keyframes
keyframes는 CSS 애니메이션 사용시, 구간을 정해 각 구간별로 어떠한 스타일을 적용할 지 작성하는 문법이다.

## @keyframes 필요요소
* animation-name: `@keyframes`가 적용될 애니메이션 이름. 사용자 임의로 부여
* stage: 0~100%의 구간
* css style: 각 구간에 적용될 style

## animation 속성
* animation-name
* animation-duration: 2s;
    - 애니메이션 완료까지 소요 시간
* animation-delay: 1s;
    - 애니메이션이 시작 전 지연시간
* animation-iteration-count: infinite;
    - 반복횟수
* animation-timing-function: ease-out;
    - 애니메이션 실행 속도
* animation-direction: alternate;
    - 애니메이션 방향 (앞, 뒤, 번갈아 재생 여부)
* animation-fill-mode: backwards;
    - 애니메이션 시작전, 끝나기 전 스타일 지정
* animation-play-state:paused;
    - 애니메이션 실행 여부(running, paused)

## @keyframes 사용
```
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left:0px;

    }
    50% {
      background-color: green;
      top: 50px;
      left:25px;

    }
    100% {
      background-color: yellow;
      top: 0px;
      left:-25px;
    }
  }
</style>

<div id="rect"></div>
```

```
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```