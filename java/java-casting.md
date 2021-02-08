# 캐스팅 Casting (형변환)    
## 다형성 polymorphism   
자바는 다형성을 지닌다.   
다형성이란, 하나의 객체가 **여러 타입**을 가질 수 있다는 것인데,   
다시 말해 실행 결과가 다양한 객체를 구현할 수 있다는 것이다.   

## 캐스팅   
자바는 상속을 할 수 있다. 상속을 한다는 것은 **상속한 클래스**와 **상속받은 클래스**가 있다는 것이다.   
상속한 클래스는 super class, 상속을 받은 클래스는 sub class 이다.   
상속의 is-a 속성으로 인해, sub class는 곧 super class라고 일컬어질 수 있다.   

## 업 캐스팅 up-casting   
업 캐스팅은 특정 객체가 sub 에서 super 클래스의 형으로 캐스팅, 즉 형변환 되는 것이다.   
* 업 캐스팅은 **언제나 가능**하다.   
* 상속관계가 아니면 레퍼런스 변수는 형 변환이 불가능.   
* **업캐스팅한 것만 다운캐스팅이 가능**   

## 다운 캐스팅 down-casting   
다운 캐스팅은 super class의 객체를 sub class의 객체에 대입하는 것이다.   
* 자동적으로 캐스팅되는 up casting과 달리, **반드시 명시적으로 형변환(강제 캐스팅)**해야 한다.   

예시   
```
//클래스
public class A { }
public class B extends A { } //A의 sub class
public class C extends A { } //A의 sub class

//객체 생성
A a1 = new A(); //A클래스의 객체 생성
B b1 = new B(); //B클래스의 객체 생성
C c1 = new C(); //C클래스의 객체 생성

// 업캐스팅
A a2 = b1; 
A a3 = new B(); 
A a4 = new C();

// 다운캐스팅 //업한것만 다운 가능
B b2 = (B)a3;
C c2 = (C)a4;

```

## instanceof 연산자   
주어진 객체가 어떤 클래스 / 해당 클래스가 상속하는 하위 클래스의 인스턴스인지를 **검사**하기 위해 사용   
연산 결과는 boolean형으로 리턴.   
해당 클래스의 객체이면 true

```
객체명 instanceof 클래스명
객체명 instanceof 인터페이스명
------------------------------
public class Casting {
	public static void main(String[] args) {
		Demo dd = new Demo(); 
		Test tt = new Test(); 

    //아래 3개 형변환 가능
		Test td =dd; //Demo객체를 Test에 넣음. 
		Test td2 = new Demo();
		Object ob = new Demo(); 
	
    //Demo7 dt = td; //컴파일 에러.. 다운은 반드시 캐스팅이 필요하다.
		Demo dt =(Demo)td; //
		Demo dob = (Demo)ob;
		System.out.println(dt.b+":"+dob.b);
		
		if(tt instanceof Demo) {
			Demo dt2 = (Demo)tt;
			System.out.println(dt2.a);
		} else {
			System.out.println("변환불가");
		}
		
		int x= ((Demo7)ob).a; // 다운 캐스팅
		// (()) 괄호 두개인 이유는 . 이 ()보다 연산 순서가 빠르기 때문.
    }
}

class Test {
	int a=10;
	int b=20;
	public void print() {
		System.out.println("super:"+a+","+b);
	}
	
	public void disp() {
		System.out.println("super...");
	}
}

class Demo extends Test {
	int a=100;
	int b=200;
}
```
instanceof는 헷갈리는 업/다운 캐스팅 과정을 확실하게 안전한 방법으로 **가능 여부를 확인** 시켜준다.   
꼭 기억해야하는 것 3가지   
1. 클래스 간의 캐스팅은 **상하관계**에서 가능   
2. 다운캐스팅은 **업캐스팅한 것만** 가능   
3. 업캐스팅을 해도 메소드는 재정위된 하위 메소드 호출   
