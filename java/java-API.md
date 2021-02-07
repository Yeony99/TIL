# API   
## pakage 
* 패키지 : 비슷한 성격의 클래스, 인터페이스 등을 모아놓은 묶음으로 하나의 디렉토리 (폴더)이다.   
  - 하위패키지 가질 수 있으며, 패키지-패키지, 패키지-클래스는 **.**으로 구분   


* import 문
  - 프로그램 작성할 때 다른 패키지의 클래스를 사용하기 위해 import 사용.   
  - java.lang.* 패키지이지만, 컴파일 시 자동 import가 되어 java.lang. 의 패키지 클래스는 import하지 않음.   
  
``` 
//형식
import 패키지.클래스; //패키지에 있는 하나의 클래스만 import
import 패키지.*; //패키지에 포함된 모든 클래스(인터페이스) import

//한 패키지 전체 import
import java.util.*;

//개별 클래스 import
import java.util.(클래스명);

//import문 사용 안하는 클래스의 객체 생성
java.util.클래스명 a = new java.util.클래스명();
```

* Object 클래스
  - Object는 자바 클래스의 최상위 클래스.
  - java.lang.Object로부터 모든 클래스가 **상속**받는 것.   

* equals 메소드   
  - public boolean equals(Obeject obj)   
  - 클래스 객체의 값이 아니라, 주소를 비교한다.   
  
* toString 메소드   
  - public String toString()   
  - 객체에 대한 클래스 이름, 정보를 "클래스이름@16진수 해쉬코드값"으로 문자열 리턴.   
  
* hashCode 메소드   
  - public int hashCode()   
  - 객체에 대한 해쉬코드 값 리턴   

* getClass 메소드   
  - final Class<?> getClass()   
  - 객체 자신의 클래스 정보를 담고 있는 Class 인스턴스 반환   

* clone 메소드   
  - protected Object clone() throws CloneNotSupportedException   
  - 객체의 복사본 반환. **실제 데이터 복사!**   

## Wrapper class   
기본형 데이터를 제외한 나머지는 **클래스로 정의**해 **객체 단위로 처리**   
기본형 데이터를 객체 단위로 처리할 수 있도록 클래스 제공.   

* 기본형 타입 -> Wrapper class   
  - byte -> Byte   
  - short -> Short   
  - int -> Integer   
  - long -> Long   
  - float -> Float   
  - double -> Double   
  - char -> Character   
  - boolean -> Boolean   
  - void -> Void   
  
  - 특징   
  - java.lang 패키지에 포함되어 있어 import 없이 사용 가능!   
  - 기본형 데이터(ex. int a;)는 null값을 가지지 못하지만, Wrapper 클래스 객체는 null 가질 수 있다.   
  - Void 클래스는 인스턴스 생성 불가능. (void 나타내는 클래스)   
  
* java.lang.Integer 클래스   
  - static int Max_VALUE : int형으로 표현할 수 있는 최댓값   
  - static int MIN_VALUE : int형으로 표현할 수 있는 최솟값   
  - static int parseInt(String s, int radix) : 문자열 형식으로 저장된 숫자(s)를 주어진 진법(radix)의 정수로 변환.   
  - static String toBinarySting(int i) : 정수를 2진수 형태의 문자열로 변환 (Hex, Octal도 가능)   
  - String toString() : Integer 형을 문자열로 변환   
  - static String toString(int i) : int형을 문자열로 변환
  - static String toString(int i, int radix) : int형을 주어진 진법으로 표시되는 문자열로 변환   
  - static Integer valueOf(int i) : int을 Integer로 변환   
  - static Integer valueOf(String s) : String 형을 Integer로 변환   
  - static Integer valueOf(String s, int radix) : String 형을 radix 진수의 Integer로 변환   
  
* java.lang.String 클래스   
  - String 클래스는 문자열을 나타내는 클래스.   
  - String 클래스는 final 클래스. = 상속 불가, 하위 클래스 가질 수 없다   
  - String 인스턴스는 한번 생성되면 그 값을 변경 불가능   
  - String 클래스 객체 간에 연산 가능. ex. String a + String b = ab 이런식...    
  - String() : String 객체 생성    
  - String(int codepoints, int offset, int count) : String 객체 생성//offset : 변환할 처음 위치, length :길이   
  - String(byte[] bytes) : 주어진 byte 배열을 이용해 String 객체 생성   
  - String(StringBuffer buffer) : 주어진 StringBuffer 객체를 이용해 String 객체를 생성   
  - String(StringBuilder builder) : 주어진 StringBuilder 객체를 이용해 String 객체를 생성   
  - indexOf(int ch(혹은 String str), int formIndex) : 지정한 문자, 문자열이 나타나는 첫 번째 위치를 return. //ch = 검색할 문자, str = 검색할 문자열, fromIndex : 검색할 시작 위치   
  - int lastIndexOf(int ch(혹은 String str), in formIndex) : 지정한 문자, 문자열이 나타나는 마지막 위치 return. // 검색 결과가 없을 경우 -1을 리턴.   
  - toLowerCase 메소드 : 문자열 중 대문자를 소문자로 변환해 문자열 반환(toUpperCase는 소->대문자)   
  - String trim() : 문자열의 앞부분과 뒷부분의 공백을 제거한 후 문자열 반환   
  - String substring(int beginIndex, int endIndex) : begin 위치에서 마지막까지 문자열 반환.   
  - char charAt(int index) : index(검색할 문자의 위치)로 지정된 곳의 char 값을 반환.   
  - String [] split (String regex, int limit) : 문자열을 지정된 정규 표현에 일치하는 위치에서 분할해 리턴   
  - int compareTO(String anotherString) : anotherString(비교할 문자열)이 크면 음수를, 적으면 양수를 리턴. 두 String 객체의 값이 동일하면 0 반환   
  - Stirng replaceAll (String regex, String replacement) : 지정된 regex를 replacement로 치환   
  
* java.lang.StringBuffer/StringBuilder   
  - 둘 다 모두 직렬화, 문자를 읽어낼 수 있는 메소드, 순서 정의 인터페이스가 구현된 final class이다.   
  - append() 메소드 및 insert() 메소드를 이용해 주어진 데이터를 문자열로 변환해 해당 문자열의 문자를 기존 객체의 문자열 버퍼에 추가하거나 삽입.   
  - 버퍼가 **가변적**이므로, 객체 생성 시점에서 미리 크기, 값을 지정 혹은 실행시간에도 버퍼 크기를 조정 가능   
  - StringBuffer 클래스는 하나의 문자, 문자열의 추가가 여러 번 이뤄지는 경우 String보다 유리.   
  - length() : 문자열의 길이 반환   
  - capacity() : 버퍼의 크기 반환   
  - StringBuffer delete(int start, int end) : start에서부터 end-1까지의 문자열 삭제.   
  - StringBuffer reverse() : 문자열 뒤집기.   
  - StringBuffer replace(int start, int end, String str) : start에서부터 end-1까지의 내용을 지우고, str 문자열로 채우기.   
  - String toString() : StringBuffer 객체의 값을 String으로 변환해 리턴   
  - setCharAt(int index, char ch) : index 위치에 있는 문자를 ch로 변환.   
  
* java.util.Calendar 클래스   
  - 날짜, 시간을 객체로 만든 클래스. 연도, 월, 일, 요일, 시, 분, 초에 대한 정보 제공.   
  - 추상 클래스. 직접 객체 생성 불가능.   
  - 메소드 구현은 Calendar 클래스의 sub class인 GregorianCalendar 클래스에 정의되어 있다.   
  ```
  //Calendar 객체 생성
  //OS에 설정된 시간대의 정보를 얻기 위해 객체 생성.
  Calendar now = Calendar.getInstance();
               = new GregorianCalendar();
  GregorianCalendar now = new GregorianCalendar();
  ```
  
* java.util.Date 클래스   
  - 날짜를 표현하는 클래스.   
  - Date() 생성자는 컴퓨터의 현재 날짜를 읽어 Date 객체로 만든다 // Date now = new Date()   
  - long getTime() : Date 객체로 나타내는 1970년 1월 1일 00시 00분 00초 GMT로부터의 밀리 세컨드 수 보여줌.   
  - String toString() : Date객체를 dow mon dd hh:mm:ss zzz yyyy (요일, 월, 날짜, 시, 분, 초, 타임존, 연도)   

* java.sql.Date 클래스   
  - 데이터베이스에 저장된 날짜나 시각정보를 데이터로 추출, DB에 저장할 때 사용.   
  - 한국처럼 2021-02-07 같은 형식으로 저장하는데 특화   
 
* java.util.Random 클래스   
  - 여러 형태의 난수를 발생시킨다   
  
* java.text.SimpleDateFormat 클래스   
  - 날짜, 또는 시간을 텍스트화(혹은 텍스트를 날짜화)하는 추상 클래스.   
  - DateFormat.SHORT(MEDIUM, LONG, FULL)   
  - y(년), M(월), d(일), D(월 구분 없는 일자), E(요일), a(오전/오후), w(년의 n번째 주), W(월의 n번째 주)   
  - H(시 0~23), h(시 1~12), m(분), s(초), S(밀리세컨드)   
  
* java.util.Locale 클래스   
  - Locale.KOREA 와 같은 형식을 취하면, 국가, 지역의 관습에 따라 형식이 맞춰진다.   
  
  > 더 알게 되는 내용은 이후 추가 업데이트. 
  
  
