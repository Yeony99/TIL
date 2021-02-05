# 메소드 method   

## 메소드란?   
생성된 객체가 수행할 수 있는 행위(연산 등)을 기술한 것.   
메소드는 함수이기 때문에, **return**값을 먼저 지정 -> 함수 이름을 쓴 후 매개변수를 나열.   
```
public class Score {
    public int sum(int n) { 
    // 메소드 접근제어자 - 메소드 리턴 타입 - 메소드 이름 - 메소드 파라미터
    
      //이하 메소드 코드
      int s = 0; //지역 변수
      for(int i = 0; i<=n; i++ {
          s+=i;
      }
      return s; //메소드 리턴 값
 ```
* 메소드의 구성   
  - 메소드 접근 제어자
    - private < (생략)default < protected < public   
  - 메소드 리턴 타입   
    - 메소드에서 처리된 결과를 호출한 곳으로 return 할 때의 데이터 타입.   
    - 되돌려줄 데이터가 없을 때는 void 사용.   
    
  - 메소드 이름   
    - 식별자. 일반적으로 소문자로 시작   
    
  - 메소드 파라미터(매개변수)   
    - 메소드를 호출한 곳에서 메소드에 값을 전달할 때 사용   
    - 파라미터는 지역변수(local variable)에 메소드 내에서만 유효한 범위를 가진다.   
  - 지역 변수 local variable   
    - 선언한 메소드 내에서만 사용 가능.   
    - 메소드 종료시 메모리 해제   
    
  - 메소드 리턴 값
    - 호출한 곳으로 리턴값 넘기며 호출한 쪽으로 제어가 이동.   
    - return 값 <= 메소드 리턴 타입 자료형   

## 메소드 호출   
* 리턴 타입이 void가 아닐 때   
```
public class Score {
    public int high(int a, int b) { //리턴 타입이 int형, int a, b는 파라미터.
        //이하 메소드 코드
        int result;
        if(a>b) {
            result = a;
        } else {
            result = b;
        }
        
        return result; //리턴 값.
-------------------------------------------------------------------------
public class App {
    public static void main(String[] args) {
        Score ob = new Score();
        int n;
        int x = 10, y = 5;
        
        n = ob.high(x, y); //메소드 호출. x, y가 실제 인수.
        //실행하면 메소드 Score가 실행되고 return result; 리턴값을 n(호출한 곳)으로 돌려줌.
        
        System.out.println(x+","+y+"중 큰 점수:"+n);
    }
}
    
```
###### 리턴 타입이 void 일 경우에는, return값 혹은 return; 생략 가능.   

* 인스턴스 메소드 instance method   
  - 객체 생성 후, 객체를 이용해 접근 가능한 메소드.   
  - 메소드 내에서 인스턴스 변수, 클래스 변수 접근해 사용 가능.   
  - 메소드 내에서 다른 인스턴스, 클래스 변수 호출 가능.   
  
* 클래스 메소드 class method (**static** method)   
  - 메소드 리턴 타입 앞에 **static** 키워드를 붙여 선언   
  - 객체 생성과 무관하게 클래스 이름 이용해 바로 호출 가능   
  - 메소드 내에서 인스턴스 변수/인스턴스 메소드 바로 접근해 사용 불가.   
  - 클래스 메소드 내에서 인스턴스 변수, 메소드에 접근하기 위해서는 **먼저 객체 생성 후, 객체를 통해서만 접근 가능**   
  - 클래스 메소드 내에서는 this / super 키워드 사용 불가.   
  - 클래스 메소드는 final 메소드 -> **overriding 불가능**   
  
```
public class Score {
    int a = 1; //인스턴스 변수
    static int b = 2; //클래스 변수


//인스턴스 메소드
    public void print() {
        System.out.println(a+","+b); //인스턴스, 클래스변수 모두 사용 가능
    }

//클래스 메소드
    public static void sub() {
        System.out.println(b); // 클래스 변수만 접근 가능
        print(); //인스턴스 메소드 바로 호출 불가능
        System.out.println(a); //인스턴스 변수 바로 호출 불가능
    
        Score s = new Score(); // Score 클래스 객체 생성   
        System.out.println(s.a); //인스턴스 변수 객체 통해 접근   
        a.print(); //인스턴스 메소드 객체 통해 접근
    }
```

## 메소드의 인수 전달
메소드 사이의 자료교환은 **매개변수**에 의해 이루어진다.   
형식 매개변수 (formal parameter) : 메소드가 호출되는 쪽에 호출한 메소드에서 넘겨받는 값을 기억   
실 매개변수 (actual parameter) : 메소드를 호출할 때 호출받는 함수에게 넘겨주는 값을 의미   


* Call By Value (값에 의한 호출)   
  - **기본 자료형**으로 인수를 전달   
  - 메소드의 형식 매개변수 값이 변경되어도 호출한 메소드의 **실매개변수** 값은 **변경되지 않는다**   
```
class Score {
    public void sub (int a) {
        a = 50; //2. a의 값을 50으로 변경
        
        System.out.println("a="+a);
    }
}
--------------------------------------------
public class App {
    public static void main(String []args) {
        Score s = new Score();
        int x;
        x = 10;
        
        s.sub(x); //1. sub 메소드 호출, x=10을 int a에 전달.
                  
        System.out.println("x="+x); // x=10 출력
        //x와 sub는 다른 장소에 저장되므로 sub 메소드에서 변경된 a 값을 받지 않는다.
```

* Call By Reference (참조에 의한 호출)   
레퍼런스 형으로 인수를 전달(배열, 클래스 참조형, 인스턴스 참조형 등)   
호출된 메소드로 값(value)를 전달하는 것이 아니라 **참조 위치** 전달   

```
class Score {
    int a = 50;
    public void sub (Score s) {
        s.a = 20; //3. 참조 위치의 a 필드값 변경
    }
}
--------------------------------------------
public class App {
    public static void main(String []args) {
        Score s = new Score();// 1. main 메소드에서 Score 객체 생성.
        System.out.println("a="+s.a); // a=50 출력
        
        s.sub(s); // 2. sub 메소드 Score s에 호출 + s 객체 참조위치 전달                 
        System.out.println("a="+s.a); //4. 변경된 a 필드 값 출력
```
둘의 차이는 콜 바이 벨류는 **값을 복사**, 콜 바이 레퍼런스는 **주소를 보낸다**는 점.  



