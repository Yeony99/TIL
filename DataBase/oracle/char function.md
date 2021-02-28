# 문자 함수

[문자 함수 참고(ENG)](https://www.oradev.com/oracle_string_functions.html)

### LOWER(char)
* 모두 소문자로 출력
```
SELECT LOWER('abCDEf12') FROM dual; -- abcdef12
```

### UPPER(char)
* 모두 대문자로 출력
```
SELECT UPPER('abCDEf12') FROM dual; -- ABCDEF12
```

### INITCAP(char)
* 단어의 첫 글자 대문자, 나머지는 소문자 출력
```
SELECT INITCAP('korea seoul') FROM dual; -- Korea Seoul
```

### SUBSTR(char, position, substring_length)
* 문자열의 지정된 범위를 출력
```
SELECT SUBSTR('seoul korea', 7, 3) FROM dual; -- 7번째부터 3개(index 1부터 시작) : kor
SELECT SUBSTR('seoul korea', -5, 3) FROM dual; -- korea의 a가 -1
```

### CHR
* 아스키코드의 값으로 출력
```
SELECT CHR(65) || CHR(66) FROM dual; --ASCII code AB
```

### ASCII(char)
* **첫번째** 문자의 아스키코드값 리턴
```
SELECT ASCII('ABC') FROM dual;
```

### ASCIISTR
* UTF-16
* 영문자, 숫자는 입력된 그대로 출력되지만, 한글은 UTF-16 코드로 출력
```
SELECT ASCIISTR('abc 123 서울') FROM dual;  -- 서울은 c11c c6b8 로 출력
```
