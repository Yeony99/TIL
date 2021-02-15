# 제네릭 Generics

## 제네릭이란?   
: 다양한 타입의 객체를 다루는 클래스 혹은 인터페이스에서 사용할 데이터 타입을 인스턴스 생성할 때 결정하는 것.   

다시말해 클래스 내부에서 사용되는 데이터 타입을 외부에서 지정하는 것.   
객체 타입을 컴파일 할 때 체크하기 때문에, 불필요한 형변환을 줄이고 안정성이 높아진다.  


## 타입 파라미터   
일반적으로 대문자 알파벳 하나 사용.    
- E : Element   
- K : Key   
- N : Number
- T : Type
- V : Value
- S, U, V : 2nd, 3rd, 4th types...

## 예시
```
import java.util.Arrays;

public class Ex1 {
	public static void main(String[] args) {
		Object[] ob = new Object[5];
		
		ob[0] = new Integer(10);
		ob[1] = new Integer(5);
		ob[2] = new String("서울");
		ob[3] = new String("부산");
		ob[4] = new Integer(7);

		if(ob[0] instanceof Integer) {
			Integer ii = (Integer)ob[0]; //다운 캐스팅
			System.out.println(ii+5);
		}
		
		Arrays.sort(ob); //런타임 오류.
	}
}
```
배열을 하나 생성해보면 아무런 오류가 나지 않다가, 런타임 시 java.lang.ClassCastException 오류가 발생한다.   
객체타입 다른 것들을 캐스팅 할 때 타입이 맞지 않으면 발생하는 오류다.   

제네릭은 이런 상황에서 사용된다.   
무리한 형변환은 성능 저하를 일으킨다.    
이를 방지하기 위해, 객체 타입을 컴파일 시 확인하는 제네릭을 사용한다.   
```
public class Ex2 {
	public static void main(String[] args) {
		Demo2<Integer> ob1 = new Demo2<>(); //Integer로 자료형 지정
		ob1.set(10); // java.lang.Integer
		//ob1.set("seoul"); //컴파일 오류
		Integer ii = ob1.get(); //캐스팅 필요 X
		System.out.println(ii);
		
		Demo2<String> ob2 = new Demo2<>(); //String으로 자료형 지정
		ob2.set("서울"); //java.lang.String
		System.out.println(ob2.get());
	}
}

class Demo2<T> { //제네릭
	private T a; //a의 자료형은 T
	public void set(T a) {
		System.out.println(a.getClass().getName());
		this.a=a;
	}
	public T get() {
		return a;
	}
}
```
위와 같이 Demo2<T>로 지정한 제네릭은    
main에서 객체 생성 시 각각 Integer와 String으로 **클래스 외부에서 결정된다**


## 제네릭 타입 2개 
```
public class Ex3 {
	public static void main(String[] args) {
		Demo3<String, Integer> ob = new Demo3<>(); //String과 Integer 형으로 지정.
		ob.set("서울", 1000);
		ob.print();
	}
}

class Demo3<T, U> { //자료형이 T와 U.
	private T t;
	private U u;
	
	public void set(T t, U u) {
		this.u=u;
		this.t=t;
	}
	
	public void print() {
		System.out.println("T:"+t.getClass().getName()+","+t); //T:java.lang.String,서울
		System.out.println("U:"+t.getClass().getName()+","+u); //U:java.lang.String,1000
	}
  ```
}
