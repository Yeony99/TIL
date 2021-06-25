# Vue Expected linebreaks to be 'LF' but found 'CRLF' 해결

VScode로 Vue를 사용하던 중 에러가 발생했다.
> Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style

eslint의 공식 document에서는 이렇게 설명한다.
> When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).
>
> The linebreaks (new lines) used in windows operating system are usually carriage returns (CR) followed by a line feed (LF) making it a carriage return line feed (CRLF) whereas Linux and Unix use a simple line feed (LF). The corresponding control sequences are "\n" (for LF) and "\r\n" for (CRLF).

즉, linestyle이 맞지 않아 생기는 오류이다.   
VSCode의 하단을 보면 나는 CRLF를 사용중이다. 하지만 Vue의 `eslintrc.js`가 인식하는 rule은 LF 였던 것이다.   

## 오류 해결
이 오류를 해결하려면 `eslintrc.js`에 rule을 추가하면 된다.   
```
 rules: {
    ...
    
    "linebreak-style": 0,

    ...
```

## Ref
eslint의 문서를 참고해보자.
[eslint](https://github.com/eslint/eslint/blob/master/docs/rules/linebreak-style.md)