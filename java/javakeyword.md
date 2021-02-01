## Java 키워드

* 이미 java 문법에 정의된 예약어로, 키워드가 가지고 있는 기능 외 다른 용도로 사용할 수 없다.
아래는 java에서 주로 사용되는 예약어의 종류이다.

1. 기본 자료형 (Primitive Type)   
: boolean, byte, short, int, long, char, float, double, void   

> 논리 타입 : boolean (1byte)   
> 문자 타입 : char(2byte)   
> 정수 타입 : byte(1byte), short(2byte), int(4byte), long(8byte)   
> 실수 타입 : float(4byte), double(8byte)   
   

2. 리터럴 (Literal)    
: 한번 값이 정해지면 실행 도중에 변하지 않는 값.   
: true, false, null   
   
> 정수형 리터럴 : 1, 10, 15L 등.    
> 실수형 리터럴 : 3.14, 3.14f, 3.1415d 등.   
> 문자 리터럴 : 'A', 'B', '1', '가' 등.    
> 문자열 리터럴 : "Yeony", "java" 등.   
> boolean 리터럴 : true, false   
> null 리터럴 : null   
   
3. 문장 (syntax)
: if, else, switch, case, default, for, while, do, break, continue, return   
   
4. 클래스 (class)   
: class, extends, implements, static, abstract, final, finally, new, instanceof, this, super   
   
5. 접근 제어자 (Access Modifier)   
: public, protected,(default), privated         
   
   
## Java 기본 입출력   
* PrintStream 클래스의 println() 메소드   
: 주어진 값을 출력하고 다음 라인(ln)으로 넘긴다.   
   
```
public class Ex01 {
  public static void main(String[] args) {
    System.out.println("Hello, Java");
    System.out.println("Hello, World!");
    }
}
/* 실행 결과 
Hello, Java
Hello, World!
*/
```   
   
* PrintStream 클래스의 printf() 메소드   
: 수치, 문자, 문자열 등을 " "안에 지정한 서식에 따라 화면에 출력.   

```
public class Ex02 {
  public static void main(String[] args) {
    int a, b;
    a=1; b=2;
    String s = "Seoul";
    System.out.printf("%d + %d = %d\n", a, b, a+b);
    System.out.printf("%d%d%s", a,b,s);
    }
}
/* 실행 결과
1 + 2 = 3
12Seoul
*/
```
   
> printf : format. 출력할 자료의 서식을 지정하는 것.   
> % 뒤에는    
>> b(boolean)    
>> c(char)   
>> d(double)   
>> e(=E, 부동 소수점 실수(지수형))   
>> f(float)   
>> g(실수 소숫점 이하 자릿수)    
>> o(octal, 8진수)   
>> s(String)   
>> x(=X, hexa, 16진수)   
>> n(줄바꿈)   
> 이 올 수 있다.
   
   
* Scanner 클래스를 이용한 데이터 입력   
> java.util.Scanner 클래스
1. java.util.Scanner 클래스 import   
2. Scanner 클래스 생성자에 System.in 객체를 인자로 넘겨 Scanner 객체 생성 후 값 입력 받기.   
3. Scanner 사용이 완료되면 close() 메소드 이용해 Scanner 종료.   
   
```
import java.util.Scanner;
public class Ex03 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt(); //console에서 data입력
    
    scanner.close();
    }
}

//Scanner scanner에서 뒤 scanner는 sc등 다른 표시로 대체해도 가능.
```


   
   
