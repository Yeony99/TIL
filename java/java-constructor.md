#생성자 constructor   
생성자는 new 연산자와 같이 사용되며, 객체를 생성할 때 호출된다.   
자바의 **모든 클래스는 생성자가 반드시 존재**하며, 하나 이상 가질 수 있다.   

##생성자의 객체 생성    
```
//예시
public class App {
    public static void main (String[] args) {
          Score ob = new Score(); //public class Score {} 클래스의 public Score() 생성자로부터 객체 생성.
    }
}
/*
1. new 연산자로 객체 생성(메모리 할당)    
2. 생성자 몸체를 실행해 초기화 담당
*/
```
생성자는 모든 클래스에 있으며, **클래스명과 동일**   
리턴 타입이 존재하지 않고, 사용자가 생성자를 만들지 않으면 컴파일시 자동으로 디폴트 생성자 생성   

## 생성자 - 클래스   
```
//1. 생성자를 정의하지 않은 클래스 
//생성자를 만들지 않으면 컴파일 시 자동으로 디폴트 생성자 만들어진다.

public class Score {
    int s;
    public void record() {
    ...
    }
}    

//Score ob = new Score(); 할 시.
---------------------------------------------------
//2. 인자가 없는 생성자만 정의한 클래스

public class Score {
    int s;
    public Score() {
        //초기화 코드
    }
    public void record() {
    ...
    }
}    

//Score ob = new Score(); 할 시..

----------------------------------------------------
//3. 인자가 있는 생성자만 정의한 클래스
public class Score {
    int s;
    public Score(int s) {
        //초기화 코드
    }
    public void record() {
    ...
    }
}    

//Score ob = new Score(100); //인자의 값을 넣어 객체 생성
//Score ob1 = new Score(); //컴파일 에러. 인자가 없는 생성자가 없다.

```

## 생성자의 중복 정의 overloading   
인수를 각 생성자 내에서 다시 정의할 수 있다.   
```
public class Score {
    private String name;
    private Stirng subject;
    private int sco;
    
    public Score() { //인자가 없는 생성자
    
        //Score a = new Score(); 로 생성자 호출하면
        //name은 null, no, sco는 0으로 초기화
    }
    
    public Score(String name, int no) { //인자가 두 개인 생성자
        this(name, subject, 100); //다른 생성자 호출 -> 3개 생성자 호출 -> 그곳에 반영
        
        //Score b = new Score("홍길동", "math" ); 로 생성자 호출하면
        //인자가 세 개인 다른 생성자를 호출해 초기화.
        //따라서 name은 홍길동, subject는 math, sco는 100으로 초기화.
    }
    
    public Score(String x, String y, int z) { //인자가 세 개인 생성자
        name = x;
        subject = y;
        sco = z;
        
        //Score c = new Score("Yeony", "Korean", 97); 로 인자가 3개인 생성자 호출
        //name은 Yeony, subject는 Korean, sco는 97로 초기화.      
}
```

## this   
this는 현재 클래스의 인스턴스로, 객체 자신에 대한 참조 값을 갖는다.   
따라서 생성자 혹은 인스턴스 메소드 내에서만 사용하며, 클래스 메소드 안에서는 사용 불가.   
this를 통해 생성자 호출 코드의 중복을 최소화할 수 있다.
**생성자의 최상단**에 **한번만** 사용 가능하며, super(인수)와 함께 사용 불가.
```
//객체 자신의 인스턴스 변수 참조
this.인스턴스 변수;

//객체 자신의 인스턴스 메소드 호출
this.인스턴스 메소드(인수);

//메소드에서 자신의 객체 리턴
return this;

//생성자의 선두에서 중복 정의된 다른 생성자 호출
this(인수);
```

## 초기화 블록(initialization block)   
멤버 변수의 초기화 수식만으로 초기화 불가능할 경우, 초기화블록 {} 으로 초기화 가능.   
초기화 블록은 이럴 때 쓰인다.   
1. 배열의 여러 요소를 초기화 2. 여러 개의 변수를 동시에 초기화 3. exception 예외를 발생시키는 메소드를 호출할 때    

* 클래스 초기화 블록(static 초기화 블록)   
클래스 변수의 초기화에 사용. 클래스가 로딩될 때 **한 번만** 실행   

* 인스턴스 초기화 블록
인스턴스 변수의 초기화에 사용. 인스턴스가 생성될 때마다 생성자보다 먼저 실행.   


