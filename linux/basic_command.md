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

### cat (catenate)
- 파일의 내용을 화면에 출력
- 파일을 만든다

```
-- filename의 내용 출력
cat filename 

-- f1, f2를 이어서 출력
cat f1 f2 

-- f1 f2를 페이지별로 출력
cat f1 f2 | more 

-- f1, f2를 처음부터 10번째까지만 출력
cat f1 f2 | head

-- f1, f2를 끝에서부터 10번째까지만 출력
cat f1 f2 | tail
```

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

### cp 
- 파일을 복사
```
-- file을 cfile로 복사
$ cp file cfile

-- 복사할 대상을 삭제하고 복사
$ cp -f file cfile

-- 디렉터리와 폴더 속 하위경로, 파일을 모두 복사
$ cp -R dir cdir
```

### mv
- 파일을 이동

### rm 
- 파일을 제거

### touch
- 파일용량이 0인 파일을 생성
- 날짜를 변경

```
-- filename이 이름은 파일 생성
$ touch filename 

-- f1의 시간을 현재시간으로 변경
$ touch -c f1

-- f1의 시간을 날짜정보(YYYYMMDDhhmm)으로 변경
$ touch -t 202101010101 f1
```


