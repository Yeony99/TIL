# static이란 무엇인가?   
간단하게 말하면 static은 class method, non-static은 instance method 이다.   
클래스는 단 한 번 정의되는 것이다. 반면에 non-static은 인스턴스의 메소드로, 여러 개 있을 수 있다.   
```
class Print { //8. class Print 생성
	public String delimiter; //12. delimiter 생성.
	public void a() { //2. 리턴값이 없는(void) 메소드 a 만든다. //5. a()안에 delimiter 삽입
		System.out.println(this.delimiter); //6. delimiter도 출력
		System.out.println("a");
		System.out.println("a"); //3. 메소드의 내용 작성
		
	}
	public void b() { //13. 인자는 필요없으니까 지운다. 14. 인스턴스 메소드가 됐으니 static을 지운다.
		System.out.println(this.delimiter); //this.delimiter 로 바꾼다.
		System.out.println("b");
		System.out.println("b");
		
	}
	//9. public static void a, b로 public class Method에 있던 메소드들을 class Print로 이동
}

public class Method {
	
	public static void main(String[] args) {
//		a(); //1. 만들고자 하는 메소드를 main에 정의한다.
//		a("-"); //4. a와 b () 안에 구분자를 입력한다. 
//		b("*");
//		Print.a("-"); //7. 두 메소드의 성격이 비슷하므로, 비슷한 메소드를 그룹핑하는 class 생성.
//		Print.b("-"); 
		
		Print t1 = new Print(); //10. 데ㅣㅇ터 타입이 print인 t1.
		t1.delimiter = "-"; //11. Print라는 클래스의 instance인 t1의 변수인 delimiter.
		t1.a();
		t1.b();
	}
}
```
