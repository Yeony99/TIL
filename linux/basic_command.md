#  리눅스 기본 명령어

## 검색

### ls

- list 의 줄임말
- 디렉터리를 리스트화 시켜서 보여줌

### ls -al

- list all 의 줄임말
- 디렉터리를 좀더 자세하게 보여준다.

### man

- manual 의 줄임말
- 명령어를 어떻게 사용하는지 도움말을 제공

```
$ man ls
```

### cd

- 디렉터리 이동

```
$ cd /blabla // 루트에서 blabla 디렉터리로 이동
$ cd .. // 상위 디렉터리로 이동
$ cd ./blaaa // 현재 디렉토리의 blaaa 디렉토리로 이동
```

### pwd

- 현재 디렉토리의 경로 확인

## 사용자

### su (switch user)

- 사용자를 변경한다.
- 현재 계정을 로그아웃 하지 않고 다른 계정으로 전환

```
$ su -- root 사용자로 변경

$ su username -- 다른 사용자로 변경

$ su - username -- 다른 사용자 변경, 환경 변수 적용
```

## 파일 변경
### mkdir (make directory)
- 디렉토리를 생성하는 명령어
```
$ mkdir dirName
$ mkdir -p dirName/subdname -- 존재하지 않는 하위 디렉터리까지 생성
```