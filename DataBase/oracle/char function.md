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

### LENGTH
* 문자의 길이 반환
* LENGHTB는 문자 대신 바이트 길이로 반환

### INSTR
* LIKE와 유사한 기능. 
* 문자열에서 일치하는 값을 찾는다
```
SELECT INSTR ('korea seoul', 'e') FROM dual; -- 4 (인덱스는 1부터 시작)
SELECT INSTR ('korea seoul', 'abc') FROM dual -- 0 (없는경우 0 반환)
SELECT INSTR ('korea seoul', 'e', 7) FROM dual -- 8 (7번째 인덱스부터 검색)
SELECT INSTR ('korea seoul', 'e', 1, 2) FROM dual -- 8 (1인덱스부터 검색해서 2번째 나오는 문자 'e'의 위치 반환)
```

### LPAD / RPAD 
* LPAD(a, n, b) 일 때 남은 왼쪽 여백을 b로 채워 길이가 n인 a를 반환한다. 
  - b 지정하지 않을 시 단일 공백.
```
SELECT LPAD('서울', 6, '*') FROM dual; -- 한글은 2자로 처리
SELECT RPAD('korea', 12, '*') FROM dual; -- 좌측 정렬 후 * 붙임
```

### LTRIM / RTRIM / TRIM
* 공백을 제거한다
```
SELECT ':' || '     대한  민국      ' || ':' FROM dual;
SELECT ':' || LTRIM('     대한  민국      ') || ':' FROM dual; -- 왼쪽 공백 제거
SELECT ':' || RTRIM('     대한  민국      ') || ':' FROM dual; -- 오른쪽 공백 제거
SELECT ':' || TRIM('     대한  민국      ') || ':' FROM dual; -- 왼쪽, 오른쪽 공백 제거

SELECT LTRIM('AABBBCDABCD', 'BA') FROM dual; -- 왼족에서 B또는 A가 하나라도 존재하면 제거
SELECT RTRIM('우리나라대한', '대한') FROM dual; -- 우측 '대한' 제거
SELECT TRIM('A' FROm 'AABBCCAA') FROm dual; -- 양쪽 'A'제거. 단, 삭제할 문자는 >한글자<만 가능
```

### TRANSLATE
* TRANSLATE(string, a, b) 일 때, string에 있는 a를 b로 치환한다.
```
SELECT TRANSLATE('2kbh34tu78', '0123456789', '9999999999') FROM dual; -- 숫자는 9

SELECT TRANSLATE('2kbh34tu78', '0123456789abcdefghijklmnopqrstuvwxyz', '9999999999xxxxxxxxxxxxxxxxxxxxxxxxxx') 
FROM dual; -- 숫자는 9로, 알파벳은 x로

SELECT TRANSLATE('2kbh34tu78', '0123456789abcdefghijklmnopqrstuvwxyz', '0123456789')
FROM dual; -- 23478, 영문자 사라짐
```

### TO_CHAR
* 문자가 아닌 자료(날짜, 숫자 등)을 char로 바꾼다.
