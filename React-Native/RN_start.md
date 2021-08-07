# React Native 시작하기
> 어플이 궁금해서 시작한 RN 공부

## RN 개발환경 구축
나는 window 환경을 쓰고 있기 때문에, Android studio를 설치해야 한다. ~~나도 간지나게 home brew해보고싶다~~
(chocolatey를 사용해 비슷하게 패키지를 설치할 수 있긴 하다.)

1. Node.js 설치
2. Python 설치 - Mac은 기본적으로 파이썬이 설치되어 있다.
3. React Native CLI 설치 `npm install -g react-native-cli`, 확인은 `npx react-native --version`
4. JDK 설치
5. (Android studio)[https://developer.android.com/studio] 설치 - Do not import settings

## Android Studio SDK 설정
1. Setting > System Settings > Android SDK
2. Show Package Details 클릭
3. 아래 항목 체크 후 ok
- Android SDK Platform 29
- Intel x86 Atom System Image
- Google APIs Intel x86 Atom System Image
- Google APIs Intel x86 Atom_64 System Image
4. 환경 변수 등록
- 사용자에 대한 사용자 변수 > 새로 만들기 > 변수이름 : ANDROID_HOME, 변수 값 : SDK 설정 화면의 Android SDK Location 입력 
- 사용자에 대한 사용자 변수 > Path > 편집 > 새로만들기 > `C:\Users\사용자 이름\Android SDK Location주소\platform-tools` 입력 후 확인
- `cmd> adb` 입력해 환경변수 설정되었는지 확인
